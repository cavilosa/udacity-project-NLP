import { updateUI } from "../src/client/js/getData.js"

describe("update UI", () => {
    test("call the update UI function", ()=>{
        expect(updateUI()).toBeDefined;
    });

});
