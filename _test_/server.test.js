const fetch = require("node-fetch");
const request = require('supertest');
const app = require("../src/server/index");

/*
describe ("test server route", () => {
    test("GET method test", async (done) => {
        const res = await request(app)
            .get("/text")
            .expect("Content-Type", /text/)
            done();
        expect(res.body).not.toHaveProperty("post")
        expect(res.body.length).toBeGreaterThen(1)
    });
});*/

describe ("test the api rout", () => {
    test("get testing", async (done) => {
        const req = await request(app)
            .get("/data")
            .expect(200)
            .expect("Content-Type", /json/)
            done();
        expect(req.body).toHaveProperty("post")
    });
});
