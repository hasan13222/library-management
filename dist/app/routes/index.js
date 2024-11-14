"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_route_1 = require("../modules/book/book.route");
const member_route_1 = require("../modules/member/member.route");
const borrow_route_1 = require("../modules/borrow/borrow.route");
const router = express_1.default.Router();
const moduleRouters = [
    {
        path: '/books',
        routes: book_route_1.bookRoutes
    },
    {
        path: '/members',
        routes: member_route_1.memeberRoutes
    },
    {
        path: '/borrow',
        routes: borrow_route_1.borrowRoutes
    },
    {
        path: '/return',
        routes: borrow_route_1.returnRoutes
    },
];
moduleRouters.forEach((route) => {
    router.use(route.path, route.routes);
});
exports.default = router;
