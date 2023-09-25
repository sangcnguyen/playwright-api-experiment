import test, { expect } from '@playwright/test';
import { APIRoutes } from '../constants/routes';
import { commentSchema } from '../schema/commentSchema';

test.describe(`Endpoint: /${APIRoutes.Comments}`, () => {
  let commentId;

  test('POST - Create a comment', async ({ request }) => {
    const respPost = await request.post(`${APIRoutes.Users}/628104/${APIRoutes.Posts}`, {
      data: {
        title: 'Sample title',
        body: 'Sample body'
      }
    });
    const postBody = await respPost.json();
    const resp = await request.post(`${APIRoutes.Posts}/${postBody.id}/${APIRoutes.Comments}`, {
      data: {
        name: 'Trilochana Joshi DC',
        email: 'joshi_trilochana_dc@wolff.example',
        body: 'Perspiciatis veniam et.'
      }
    });
    expect(resp.status()).toBe(201);
    expect(resp).toMatchSchema(commentSchema);
    const body = await resp.json();
    commentId = body.id;
  });

  test('GET - Get a comment', async ({ request }) => {
    const resp = await request.patch(`${APIRoutes.Comments}/${commentId}`);
    expect(resp.status()).toBe(200);
    expect(resp).toMatchSchema(commentSchema);
  });

  test('PATCH - Update a comment', async ({ request }) => {
    const resp = await request.patch(`${APIRoutes.Comments}/${commentId}`, {
      data: {
        title: 'Sample updated title',
        body: 'Sample updated body'
      }
    });
    expect(resp.status()).toBe(200);
    expect(resp).toMatchSchema(commentSchema);
  });

  test('DELETE - Delete a comment', async ({ request }) => {
    const resp = await request.delete(`${APIRoutes.Comments}/${commentId}`);
    expect(resp.status()).toBe(204);
  });
});
