"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3100;
app.get('/', (req, res) => {
    res.send('Hello Everyone, TypeScript NodeJs and ExpressJS');
});
app.listen(port, () => {
    console.log('Server listening on http://localhost:${port}');
});
