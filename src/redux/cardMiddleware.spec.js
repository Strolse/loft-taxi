import { cardMiddleware } from "./cardMiddleware";
import { saveCardAction } from "./actions";
import { serverSendCard } from "../asyncActions/api.js";

jest.mock("../asyncActions/api.js"); 

describe("cardMiddleware", () => {

    describe("action.type SAVE_CARD", () => {
        it("authenticates through api", async () => {
            const dispatch = jest.fn();
            const next = jest.fn();
            serverSendCard.mockImplementation(() => true);

            await cardMiddleware({ dispatch })(next)(
                saveCardAction("8888000055556666", "06/09", "Olya", "876", "89")
            )
            expect(serverSendCard).toBeCalledWith(
                "8888000055556666", "06/09", "Olya", "876", "89");
            expect(dispatch).toBeCalled() 
        })
    })
})