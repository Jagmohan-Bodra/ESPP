/**
 * @jest-environment ./tests/integrations/global/TestEnvironment.js
 */
import _ from 'lodash';
import mongoose from 'mongoose';
import { getToken } from '../util';

const request = require('supertest');

const db = global.db;
const server = global.server;

describe('Test GET //v1/product-categories/:id', () => {
  let token;
  let validId;
  let notExistsValidId = mongoose.Types.ObjectId();
  const fakeData = {
    name: 'production categories 1',
    code: 'CATEGORIES_1',
    image:
      'https://kiemtienbaobao.com/wp-content/uploads/2019/02/Category-l%C3%A0-g%C3%AC-2-728x400.jpg',
    description: 'Description 01',
    status: 'ENABLED',
  };

  beforeAll(async () => {
    token = await getToken(request(server), db);
    const { insertedId } = await db
      .collection('product_categories')
      .insertOne(fakeData);
    validId = insertedId.toHexString();
  });

  afterAll(async () => {
    await db.dropDatabase();
  });

  describe('Return status 200', () => {
    it('Should be successful when "id" is exist', async () => {
      const res = await request(server)
        .get(`/v1/product-categories/${validId}`)
        .set('Authorization', 'Bearer ' + token);

      expect(res.status).toBe(200);
      expect(res.body.data).toMatchObject(_.omit(fakeData, ['_id']));
    });
  });

  describe('Return status 404', () => {
    it('Should failed when "id" is not exist', async () => {
      const res = await request(server)
        .get(`/v1/product-categories/${notExistsValidId}`)
        .set('Authorization', 'Bearer ' + token);

      expect(res.status).toBe(404);
    });
  });

  describe('Should return 401', () => {
    it('Should be failed when token is not set', async () => {
      const res = await request(server).get(
        `/v1/product-categories/${validId}`,
      );

      expect(res.status).toBe(401);
    });
  });
});
