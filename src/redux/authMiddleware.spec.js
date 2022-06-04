import { authMiddleware } from "./authMiddleware";
import { authenticateAction } from "./actions";
import { serverLogin } from "../asyncActions/api.js";

jest.mock("../asyncActions/api.js");
 


describe("authMiddleware", () => {
    describe("action.type AUTHENTICATE", () => {
        it("authenticates through api", async () => {
            const dispatch = jest.fn();
            const next = jest.fn(); 
            serverLogin.mockImplementation(() => ({ success: true, token: 8 }));

            await authMiddleware({ dispatch })(next)(
                authenticateAction("test@mail.ru", "123")
            )
            expect(serverLogin).toBeCalledWith("test@mail.ru", "123");
            expect(dispatch).toBeCalledWith({type: "LOG_IN", payload: 8})

        })
    }) 

})