const request = require("supertest");
const app = require("../src/server/index.js");

describe("API testing", async () => {
    const text = "the sun";
    test("update text", (done) => {
        request(app)
        .post("/text")
        .expect(200)
        .end((err, res) =>{
            expect(res.body).toEqual(text)
            done();
        })
    })
});
