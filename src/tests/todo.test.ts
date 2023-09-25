import test, { expect } from '@playwright/test';
import { APIRoutes } from '../constants/routes';
import { todoSchema } from '../schema/todoSchema';

test.describe(`Endpoint: /${APIRoutes.Todos}`, () => {
  let todoId;

  test('POST - Create a todo', async ({ request }) => {
    const resp = await request.post(`${APIRoutes.Users}/628104/${APIRoutes.Todos}`, {
      data: {
        title: 'Sample title',
        status: 'pending'
      }
    });
    expect(resp.status()).toBe(201);
    expect(resp).toMatchSchema(todoSchema);
    const body = await resp.json();
    todoId = body.id;
  });

  test('GET - Get a todo', async ({ request }) => {
    const resp = await request.patch(`${APIRoutes.Todos}/${todoId}`);
    expect(resp.status()).toBe(200);
    expect(resp).toMatchSchema(todoSchema);
  });

  test('PATCH - Update a todo', async ({ request }) => {
    const resp = await request.patch(`${APIRoutes.Todos}/${todoId}`, {
      data: {
        title: 'Sample title',
        status: 'completed'
      }
    });
    expect(resp.status()).toBe(200);
    expect(resp).toMatchSchema(todoSchema);
  });

  test('DELETE - Delete a todo', async ({ request }) => {
    const resp = await request.delete(`${APIRoutes.Todos}/${todoId}`);
    expect(resp.status()).toBe(204);
  });
});
