import { handleSubmit } from "../src/client/js/app.js";
import { postText } from "../src/client/js/app.js";

describe("handleSubmit", () => {
    test("call the postText function", ()=>{
        expect(postText()).toBeDefined;
    });

    test("not to be null", () => {
        expect(postText()).not.toBeNull();
    });
});
