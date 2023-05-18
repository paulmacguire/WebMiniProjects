import Router from "koa-router";

const router = new Router();

// Ruta para la operación "adding"
router.get("/:num1/:num2", async (ctx) => {
  console.log("Estoy en adding");

  // if (number.includes("+")) {
  //   const result = number.replace("+", "");
  //   console.log(result);

  const { num1, num2 } = ctx.params;

  if (num1.includes("+")) {
    const num1 = num1.replace("+", "");
  }

  if (num2.includes("+")) {
    const num2 = num2.replace("+", "");
  }
  
  // Realizar la operación
  const result = Number(num1) + Number(num2);

  ctx.body = {
    status: "success",
    result: result
  };
});

export default router;
