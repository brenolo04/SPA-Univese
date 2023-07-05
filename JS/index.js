import { Router } from "./routes.js"
const router = new Router()
router.add("/", "/Pages/home.html")
router.add("/universe", "/Pages/universe.html")
router.add("/explorer", "/Pages/explorer.html")

router.handle()
router.changeBg()

window.onpopstate = () => router.handle()
window.route = () => router.route()