import {Router} from "express"
import { adapRoute } from "../adapters/express-route-adapter"
import { makeSignUpController } from "../factories/signup"

export default (router: Router): void => {
    router.post("/signup", adapRoute(makeSignUpController()))
}