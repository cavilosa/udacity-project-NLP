import { postText } from "../src/client/js/getAPI.js";

describe("testing the submit functionality", () => {

    test("Check for data", () => {
        expect(postText).toBeDefined();
    })
});
