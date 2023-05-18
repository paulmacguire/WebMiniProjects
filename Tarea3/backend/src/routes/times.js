import Router from "koa-router";

const router = new Router();

router.get("/:num1/:num2", async (ctx) => {
  console.log("Estoy en times");
  const { num1, num2 } = ctx.params;
  
  const result = Number(num1) * Number(num2);

  ctx.body = {
    status: "success",
    result: result
  };
});

export default router;
