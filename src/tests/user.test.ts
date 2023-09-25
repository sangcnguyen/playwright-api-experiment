import { test, expect } from '@playwright/test';
import { userCreationSchema, userSchema } from '../schema/userSchema';
import { APIRoutes } from '../constants/routes';
import { randomNumber } from '../utils/faker';

test.describe(`Endpoint: /${APIRoutes.Users}`, () => {
  let userId;

  test('GET - List users', async ({ request }) => {
    const resp = await request.get(`users`);
    expect(resp).toMatchSchema(userSchema);
    expect(resp.status()).toBe(200);
  });

  test('POST - Create a user', async ({ request }) => {
    const resp = await request.post(APIRoutes.Users, {
      data: {
        name: 'Tenali Ramakrishna',
        gender: 'male',
        email: `test${randomNumber()}@test.com`,
        status: 'active'
      }
    });
    expect(resp.status()).toBe(201);
    expect(resp).toMatchSchema(userCreationSchema);
    const body = await resp.json();
    userId = body.id;
  });

  test('GET - Get a user', async ({ request }) => {
    const resp = await request.patch(`${APIRoutes.Users}/${userId}`);
    expect(resp.status()).toBe(200);
    expect(resp).toMatchSchema(userCreationSchema);
  });

  test('PATCH - Update a user', async ({ request }) => {
    const resp = await request.patch(`${APIRoutes.Users}/${userId}`, {
      data: {
        name: 'Tenali Ramakrishna',
        gender: 'male',
        email: `test${randomNumber()}@test.com`,
        status: 'active'
      }
    });
    expect(resp.status()).toBe(200);
    expect(resp).toMatchSchema(userCreationSchema);
  });

  test('DELETE - Delete a user', async ({ request }) => {
    const resp = await request.delete(`${APIRoutes.Users}/${userId}`);
    expect(resp.status()).toBe(204);
  });
});
