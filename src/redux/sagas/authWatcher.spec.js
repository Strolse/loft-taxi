import { authWorker } from "./authWatcher";
import { authenticateAction } from "../actions";
import { recordSaga } from "./recordSaga";
import { serverLogin, serverGetCard } from "../../asyncActions/api.js";

jest.mock("../../asyncActions/api.js");



describe("authWatcher", () => {

    describe("authWorker", () => {
        it("authenticates through api", async () => {

            serverLogin.mockImplementation(() => ({ success: true, token: 8 }));
            serverGetCard.mockImplementation(() => (
                { cardNumber: "test", expiryDate: "test", cardName: "test", cvc: "test", id: "test" }
            ));

            const dispatched = await recordSaga(authWorker, authenticateAction("test@mail.ru", "testpassword"));
            expect(serverLogin).toBeCalledWith("test@mail.ru", "testpassword");
            expect(dispatched).toEqual(
                [{ type: "LOG_IN", payload: 8 }, {
                    type: "DATA_CARD",
                    payload: { cardName: "test", cardNumber: "test", expiryDate: "test", cvc: "test", token: "test" }
                }])
        })
    })
})