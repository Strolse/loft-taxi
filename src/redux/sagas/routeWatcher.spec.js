import { routeWorker } from "./routeWatcher";
import { getRouteAction } from "../actions";
import { recordSaga } from "./recordSaga";
import { serverRoute } from "../../asyncActions/api.js";

jest.mock("../../asyncActions/api.js");



describe("routeWatcher", () => {

    describe("routeWorker", () => {
        it("gets an coords of route through api", async () => {

            serverRoute.mockImplementation(() => ["coords1", "coord2"]);

            const dispatched = await recordSaga(routeWorker, getRouteAction(
                "testaddress1", "testaddress2"
            ));
            expect(serverRoute).toBeCalledWith(
                "testaddress1", "testaddress2");
            expect(dispatched).toEqual(
                [{ type: "COORDS", payload: ["coords1", "coord2"] }])
        })
    })
})