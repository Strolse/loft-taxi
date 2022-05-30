import { authMiddleware } from "./authMiddleware";
import { authenticateAction } from "../actions";
import { serverLogin } from "../asyncActions/api";


jest.mock("../asyncActions/api",()=>{
    return {
        serverLogin: jest.fn(()=>({success:true, token: 7}))
    }
});



describe("authMiddleware", ()=>{
    describe("action.type AUTHENTICATE", ()=>{
        it("authenticates through api", async ()=>{
            const dispatch = jest.fn(); 
 
            await authMiddleware({dispatch})()(
                authenticateAction("test@mail.ru", "123")
            )
            expect(serverLogin).toBeCalledWith("test@mail.ru", "123");

        })
    })
})