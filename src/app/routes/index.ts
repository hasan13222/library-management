import express from 'express';
import { bookRoutes } from '../modules/book/book.route';
import { memeberRoutes } from '../modules/member/member.route';
import { borrowRoutes, returnRoutes } from '../modules/borrow/borrow.route';

const router = express.Router();

const moduleRouters = [
    {
        path: '/books',
        routes: bookRoutes
    },
    {
        path: '/members',
        routes: memeberRoutes
    },
    {
        path: '/borrow',
        routes: borrowRoutes
    },
    {
        path: '/return',
        routes: returnRoutes
    },
]


moduleRouters.forEach((route) => {
    router.use(route.path, route.routes);
})

export default router;