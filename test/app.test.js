const app = require('../app.js');
const supertest = require('supertest');
const {expect} = require('chai');

describe('GET /apps', () => {
    it('should return an array of Google apps', () => {
        return supertest(app)
            .get('/apps')
            .expect(200)
            .expect('Content-Type', /json/)
            .then(res => {
                expect(res.body).to.be.an('array');
            })
    })
});

describe('GET /apps', () => {
    it('Genre of Arcade should include Subway Surfers', () => {
        return supertest(app)
            .get('/apps')
            .query({sort: 'App'})
            .query({genre: 'Arcade'})
            .expect(200)
            .expect('Content-Type', /json/)
            .then(res => {
                expect(res.body).to.be.an('array');
                const app = res.body[0];
                expect(app).to.include.keys('App');
            })
    })
})