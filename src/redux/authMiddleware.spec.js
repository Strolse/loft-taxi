import { authMiddleware } from "./authMiddleware";
import { authenticateAction, saveCardAction, dataCardAction } from "./actions";
import { serverLogin, serverSendCard } from "../asyncActions/api.js";


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

    describe("action.type SAVE_CARD", () => {
        it("authenticates through api", async () => {
            const dispatch = jest.fn();
            const next = jest.fn();
            serverSendCard.mockImplementation(() => true);

            await authMiddleware({ dispatch })(next)(
                saveCardAction("8888000055556666", "06/09", "Olya", "876", "89")
            )
            expect(serverSendCard).toBeCalledWith(
                "8888000055556666", "06/09", "Olya", "876", "89");
            expect(dispatch).toBeCalled() 
        })
    })
})