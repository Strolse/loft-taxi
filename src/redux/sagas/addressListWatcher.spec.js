import { addressListWorker } from "./addressListWatcher";
import { loadAdressesAction } from "../actions";
import { recordSaga } from "./recordSaga";
import { serverAddressList } from "../../asyncActions/api.js";

jest.mock("../../asyncActions/api.js");


describe("addressListWatcher", () => {

    describe("addressListWorker", () => {
        it("gets addresses through api", async () => {

            serverAddressList.mockImplementation(() => ["address1", "address1"]);

            const dispatched = await recordSaga(addressListWorker, loadAdressesAction());
            expect(serverAddressList).toBeCalled();
            expect(dispatched).toEqual(
                [{type: "ADDRESS_LIST",
                    payload: ["address1", "address1"]}])
        })
    })
})