import fastify, { FastifyInstance } from 'fastify';
import fastifyBlipp from 'fastify-blipp';
import cors from 'fastify-cors';
import * as dotenv from 'dotenv';
import { Server, IncomingMessage, ServerResponse } from 'http';

import defaultRoutes from './modules/routes';

// Load dotenv configuration
dotenv.config();

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify();

server.register(fastifyBlipp);
server.register(cors);

// Load routes
server.register(defaultRoutes, { prefix: '/' });

const start = async () => {
  try {
    await server.listen(4000, '0.0.0.0');
    server.blipp();
  } catch (err) {
    console.log(err);
    server.log.error(err);
    process.exit(1);
  }
};

process.on('uncaughtException', (error) => {
  console.error(error);
});
process.on('unhandledRejection', (error) => {
  console.error(error);
});

start();
