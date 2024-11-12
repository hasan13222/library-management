import app from './app';
import { Server } from 'http';
import config from './app/config';

let server: Server;
main().catch((err) => console.log(err));

async function main() {
  try {   

    server = app.listen(config.port, () => {
      console.log(`Library Management is listening on port ${config.port}`);
    });
  } catch (error) {
    console.log({
      project_url: 'process.cwd()',
      message: 'failed to connect',
      error: error,
    });
  }
}

process.on('unhandledRejection', () => {
  console.log('unhandledRejection. shutting down server');
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log('uncaughtException. shutting down');
  process.exit(1);
});