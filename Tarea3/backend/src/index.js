import koa from 'koa';
import { koaBody } from 'koa-body';
import KoaLogger from 'koa-logger';
import cors from 'koa2-cors';
import router from './routes.js';

// Crear instancia de Koa
const app = new koa();

const corsOptions = { origin: 'http://localhost:5173', credentials: true , optionsSuccessStatus: 200  };

app.use(cors(corsOptions));

// Middlewares proporcionados por Koa
app.use(KoaLogger());
app.use(koaBody());

// Middlewares personalizados. Encargado de dar respuesta "Hola Mundo"
app.use(async (ctx, next) => {
  // Verificar si la ruta coincide con alguna ruta definida en el enrutador
  const matchedRoute = router.match(ctx.path, ctx.method);

  if (!matchedRoute) {
    // La ruta no coincide, responder con " hola IIC2513"
    ctx.body = " hola IIC2513";
  } else {
    // La ruta coincide, continuar con el siguiente middleware
    await next();
  }
});

// koa-router
app.use(router.routes());

// Hacer que el servidor escuche en el puerto 4000
app.listen(4000, () => {
  console.log("Iniciando app en el puerto 4000");
});
