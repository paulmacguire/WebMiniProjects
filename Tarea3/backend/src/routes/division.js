import Router from "koa-router";

const router = new Router();

router.post("/", async (ctx) => {
  const { num1, num2 } = ctx.request.body;
  if (Number(num2) === 0) {
    ctx.body = {
      status: "error",
      result: "ERROR"
    };
  } else {
    const result = Number(num1) / Number(num2);

    ctx.body = {
      status: "success",
      result: result
    };
  }
});

export default router;
