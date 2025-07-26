import { MissingParamError } from "../erros/missing-param-error";
import { SignUpController } from "./signup"

describe("SignUp Controller ", () => {
  test("Should return 400 if no name is provided", () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        email: "geovana.horodeski06@gmail.com",
        password: "1234",
        passwordConfirmation: "1234"
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError("name"))
  })
  
  test("Should return 400 if no email is provided", () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        name: "geovana",
        password: "1234",
        passwordConfirmation: "1234"
      }
    }
    
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError("email"))
  })
})