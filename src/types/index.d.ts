import { FastifyRequest } from 'fastify';

export interface Time {
  time:number
}

export interface TimeRequest extends FastifyRequest {
  body: {
    time:number
  }
}

