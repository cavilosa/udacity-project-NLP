const fetch = require("node-fetch");
//jest.setTimeout(30000);
const request = require('supertest')

//const express = require("express")
const app = require("../src/server/index")


describe ("test server route", () => {
    test("GET method test", async (done) => {
        const res = await request(app)
            .get("/text")
            .expect("Content-Type", /text/);
            done();
        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty("get")
    });
/*
    test("get from foreign api", async (done) => {
        const res = await request(app)
            .get("/data")
            .expect("Content-Type", /json/)
            done();
        expect(res.statusCode).not.toBe(200)
    });*/
});
