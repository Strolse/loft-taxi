import { paymentWorker } from "./paymentWatcher";
import { saveCardAction } from "../actions";
import { recordSaga } from "./recordSaga";
import { serverSendCard } from "../../asyncActions/api.js";

jest.mock("../../asyncActions/api.js");



describe("paymentWatcher", () => {

    describe("paymentWorker", () => {
        it("saves dataCard through api", async () => {

            serverSendCard.mockImplementation(() => true);
            const cardNumber = "test";
            const expiryDate = "test";
            const cardName = "test";
            const cvc = "test";
            const token = "test";

            const dispatched = await recordSaga(paymentWorker, saveCardAction(
                cardNumber, expiryDate, cardName, cvc, token
                ));
            expect(serverSendCard).toBeCalledWith(
                cardNumber, expiryDate, cardName, cvc, token);
            expect(dispatched).toEqual(
                [{ type: "DATA_CARD",
                    payload: {cardNumber, expiryDate, cardName, cvc, token}
                }])
        })
    })
})