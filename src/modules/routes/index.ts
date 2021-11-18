import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { getData, saveData } from '../controllers/index'
import { TimeRequest } from '../../types/index';


const main = (fastify: FastifyInstance, opts, done) => {
  fastify.get('/', async (request:FastifyRequest, reply:FastifyReply) => {
    
    let data = await getData();

    return reply.send({
      message: 'Test endpoint',
      data
    });
  });

  fastify.put('/put', async (request:TimeRequest, reply:FastifyReply) => {
    let data = await saveData(request.body)

    return reply.send({
      message: 'Test endpoint',
      data
    });
  });

  done();
};

export default main;
