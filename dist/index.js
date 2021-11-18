"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const fastify_blipp_1 = require("fastify-blipp");
const dotenv = require("dotenv");
const routes_1 = require("./modules/routes");
// Load dotenv configuration
dotenv.config();
const server = fastify_1.default();
server.register(fastify_blipp_1.default);
// Load routes
server.register(routes_1.default, { prefix: '/api/v1/main' });
const start = async () => {
    try {
        await server.listen(3000, '0.0.0.0');
        server.blipp();
    }
    catch (err) {
        console.log(err);
        server.log.error(err);
        process.exit(1);
    }
};
process.on('uncaughtException', error => {
    console.error(error);
});
process.on('unhandledRejection', error => {
    console.error(error);
});
start();
//# sourceMappingURL=index.js.map