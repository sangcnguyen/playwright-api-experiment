import test, { expect } from '@playwright/test';
import { APIRoutes } from '../constants/routes';
import { postSchema } from '../schema/postSchema';

test.describe(`Endpoint: /${APIRoutes.Posts}`, () => {
  let postId;

  test('POST - Create a post', async ({ request }) => {
    const resp = await request.post(`${APIRoutes.Users}/628104/${APIRoutes.Posts}`, {
      data: {
        title: 'Sample title',
        body: 'Sample body'
      }
    });
    expect(resp.status()).toBe(201);
    expect(resp).toMatchSchema(postSchema);
    const body = await resp.json();
    postId = body.id;
  });

  test('GET - Get a post', async ({ request }) => {
    const resp = await request.get(`${APIRoutes.Posts}/${postId}`);
    expect(resp.status()).toBe(200);
    expect(resp).toMatchSchema(postSchema);
  });

  test('PATCH - Update a post', async ({ request }) => {
    const resp = await request.patch(`${APIRoutes.Posts}/${postId}`, {
      data: {
        title: 'Sample updated title',
        body: 'Sample updated body'
      }
    });
    expect(resp.status()).toBe(200);
    expect(resp).toMatchSchema(postSchema);
  });

  test('DELETE - Delete a post', async ({ request }) => {
    const resp = await request.delete(`${APIRoutes.Posts}/${postId}`);
    expect(resp.status()).toBe(204);
  });
});
