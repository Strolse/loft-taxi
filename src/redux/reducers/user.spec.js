import userReducer from "./user";
import { dataCardAction } from "../actions"


describe("userReducer", () => {
    it("changes dataCard correctly", () => {
        const initialState = {
            dataCard: {
                cardNumber: "", expiryDate: '', cardName: '', cvc: ''
            }
        };

        const changedState = {
            dataCard: {
                cardNumber: "8888000088880000", expiryDate: '05/22', cardName: 'Name', cvc: '900'
            }
        }
        expect(userReducer(initialState, dataCardAction(
            '8888000088880000',
            '05/22',
            'Name',
            '900'))).toEqual(changedState);
    })
})