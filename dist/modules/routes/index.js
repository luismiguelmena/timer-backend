"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main = (fastify, opts, done) => {
    fastify.get('/', async (request, reply) => {
        return reply.send({
            message: 'Test endpoint',
            data: 'hello'
        });
    });
    done();
};
exports.default = main;
//# sourceMappingURL=index.js.map