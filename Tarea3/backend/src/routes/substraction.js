import Router from 'koa-router';

const router = new Router();

router.post('/', async (ctx) => {
  const { num1, num2 } = ctx.request.body;

  // Realizar la resta y obtener el resultado
  const result = parseFloat(num1) - parseFloat(num2);

  // Responder con el resultado como un objeto JSON
  ctx.body = {
    status: 'success',
    result: result
  };
});

export default router;
