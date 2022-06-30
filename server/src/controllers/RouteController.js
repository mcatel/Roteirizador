import Route from '../database/models/Route';
import Stop from '../database/models/Stop';
import connection from '../database/connection';

const store = async (req, res) => {
  const { coordinates } = req.body;

  try {
    if (coordinates && coordinates.length > 0) {
      const { dataValues: route } = await connection.transaction(
        (t) => Route.create(null, { transaction: t }),
      );

      const stops = await Promise.all(
        coordinates.map((coord) => connection.transaction((t) => Stop.create({
          latitude: coord.latitude,
          longitude: coord.longitude,
          route_id: route.id,
        }, {
          transaction: t,
        }))),
      );

      return res.status(200).json({ ...route, stops });
    }
    return res.status(400).json({
      error: 'Nenhuma coordenada encontrada.',
    });
  } catch (error) {
    return res.status(500).json({
      error: 'Unexpected error while creating new route',
    });
  }
};

const search = async (req, res) => {
  try {
    const routes = await connection.transaction(
      (t) => Route.findAll({}, { transaction: t }),
    );

    if (routes && routes.length) {
      return res.status(200).json({ routes });
    }

    return res.status(200).json({
      error: 'Nenhuma rota encontrada.',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: 'Unexpected error while searching routes',
    });
  }
};

export default { store, search };
