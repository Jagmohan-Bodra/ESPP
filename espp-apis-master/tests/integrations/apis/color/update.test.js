/**
 * @jest-environment ./tests/integrations/global/TestEnvironment.js
 */
import _ from 'lodash';
import mongoose from 'mongoose';
import { getToken } from '../util';

const request = require('supertest');

const db = global.db;
const server = global.server;

describe('PUT: //v1/colors/:id', () => {
  let token;
  let validId;
  let notExistsValidId = mongoose.Types.ObjectId();
  const fakeData = {
    name: 'Green',
    code: 'GREEN',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAmQAH+QyJAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC',
    description: 'color description 1',
    status: 'ENABLED',
  };

  beforeAll(async () => {
    token = await getToken(request(server), db);
    const { insertedId } = await db.collection('colors').insertOne(fakeData);
    validId = insertedId.toHexString();
  });

  afterAll(async () => {
    await db.dropDatabase();
  });

  describe('Test Happy case (200)', () => {
    it('Should Update success when input is valid', async () => {
      const updateData = {
        name: `name 1`,
        status: 'ENABLED',
      };
      const res = await request(server)
        .put(`/v1/colors/${validId}`)
        .set('Authorization', 'Bearer ' + token)
        .send(updateData);

      expect(res.status).toBe(200);
      expect(res.body.data).toMatchObject(_.omit(updateData, ['_id']));
    });
  });

  describe('Test Authentication handler (401)', () => {
    it('Should create failed when token is not set', async () => {
      const res = await request(server).put(`/v1/colors/${validId}`);

      expect(res.status).toBe(401);
    });
  });

  describe('Test Resource Not found handler (404)', () => {
    it('Should response BadRequest when "id" is not exist', async () => {
      const res = await request(server)
        .put(`/v1/colors/${notExistsValidId}`)
        .set('Authorization', 'Bearer ' + token);

      expect(res.status).toBe(404);
    });
  });
});
