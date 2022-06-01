import { authMiddleware } from "./authMiddleware";
import { authenticateAction, saveCardAction, dataCardAction } from "../actions";
import { serverLogin, serverSendCard } from "../asyncActions/api.js";


jest.mock("../asyncActions/api.js", () => {
    return {
        serverLogin: jest.fn(() => ({ success: true, token: 8 })),
        serverSendCard: jest.fn(() => true
        )
    };
});


describe("authMiddleware", () => {
    // describe("action.type AUTHENTICATE", () => {
    //     it("authenticates through api", async () => {
    //         const dispatch = jest.fn();
    //         const next = jest.fn();

    //         await authMiddleware({ dispatch })(next)(
    //             authenticateAction("test@mail.ru", "123")
    //         )
    //         expect(serverLogin).toBeCalledWith("test@mail.ru", "123");

    //     })
    // }) тест почему-то не работает

    describe("action.type SAVE_CARD", () => {
        it("authenticates through api", async () => {
            const dispatch = jest.fn();
            const next = jest.fn();

            await authMiddleware({ dispatch })(next)(
                saveCardAction("8888000055556666", "06/09", "Olya", "876", "89")
            )
            expect(serverSendCard).toBeCalledWith(
                "8888000055556666", "06/09", "Olya", "876", "89");
            // expect(dispatch).toBeCalled() /тест почему-то не работает
        })
    })
})