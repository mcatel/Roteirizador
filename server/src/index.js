import app from './app';
import Console from 'console';

app.listen(process.env.PORT || 3333, () => {
  Console.log(`This server is running on port: ${process.env.PORT || 3333}`)
});