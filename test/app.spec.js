import  { expect } from "chai";
import supertest from "supertest";
import app from '../src/app.js';

describe('App', () => {
  it('GET / responds with a 200 containing "Hello, Boilerplate"', () => supertest(app)
    .get('/')
    .expect(200, 'Hello, Boilerplate')
  )
})