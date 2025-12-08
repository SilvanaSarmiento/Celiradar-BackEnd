"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: 'http://localhost:5173',
        methods: 'GET,POST,PUT,DELETE',
        credentials: true,
    });
    const PORT = 3001;
    await app.listen(PORT);
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map