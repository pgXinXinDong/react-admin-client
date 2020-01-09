//引入koa
const koa = require("koa")
const app = new koa();
const router = require("koa-router")();

router.get("/login",function (ctx,next) {
    ctx.body ="hello koa"
})

router.get("/news",function (ctx,next) {
    ctx.body = "新闻page"
})

app.use(router.routes())
app.use(router.allowedMethods())


app.listen(3050,()=>{
    console.log("starting at port 3050")
})