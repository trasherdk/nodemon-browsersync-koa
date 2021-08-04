const Koa = require('koa')
const Router = require('koa-router')
const cors = require('kcors')

const app = new Koa()
const router = new Router()

router.get(`/`, ctx => {
  ctx.body = {
    dogs: [`Fido`, `Rover`, `Pussycat`, `Dude`]
  }
})

app
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(1337, () => console.log(`Koa at: http://localhost:1337`))
