export const postSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer'
    },
    user_id: {
      type: 'integer'
    },
    title: {
      type: 'string'
    },
    body: {
      type: 'string'
    }
  },
  required: ['id', 'user_id', 'title', 'body']
};
