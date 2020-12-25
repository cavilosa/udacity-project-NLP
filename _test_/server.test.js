const fetch = require("node-fetch");
//jest.setTimeout(30000);
const request = require('supertest')

//const express = require("express")
const app = require("../src/server/index")


describe ("test server route", () => {
    test("GET method test", async () => {
        const res = await request(app)
            .get("/text")
            //.expect("Content-Type", /application\/json/);
            //.expect(404);
            .expect('Content-Type', /text/)
            //.expect(200)
            //done();
        //expect(res.statusCode).toBe(201)
        //expect(res.body).toHaveProperty("post")
    });
});
