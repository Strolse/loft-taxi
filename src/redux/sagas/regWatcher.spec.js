import { regWorker } from "./regWatcher";
import { registerAction } from "../actions";
import { recordSaga } from "./recordSaga";
import { serverRegister } from "../../asyncActions/api.js";

jest.mock("../../asyncActions/api.js");



describe("regWatcher", () => {

    describe("regWorker", () => {
        it("registers an user through api", async () => {

            serverRegister.mockImplementation(() => ({ success: true, token: 5 }));
            const email = "test";
            const password = "test";
            const name = "test";
            const surname = "test";

            const dispatched = await recordSaga(regWorker, registerAction(
                email, password, name, surname
            ));
            expect(serverRegister).toBeCalledWith(
                email, password, name, surname);
            expect(dispatched).toEqual(
                [{ type: "LOG_IN", payload: 5 }])
        })
    })
})