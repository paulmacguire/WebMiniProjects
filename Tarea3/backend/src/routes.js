import Router from "koa-router";
import adding from "./routes/adding.js";
import division from "./routes/division.js";
import substraction from "./routes/substraction.js";
import times from "./routes/times.js";

const router = new Router();

router.use('/adding',adding.routes());
router.use('/times',times.routes());
router.use('/substraction',substraction.routes());
router.use('/division',division.routes());


export default router;