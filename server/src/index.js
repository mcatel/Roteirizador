import Console from 'console';
import app from './app';

app.listen(process.env.PORT || 3333, () => {
  Console.log(`This server is running on port: ${process.env.PORT || 3333}`);
});
