export const commentSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer'
    },
    post_id: {
      type: 'integer'
    },
    name: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    body: {
      type: 'string'
    }
  },
  required: ['id', 'post_id', 'name', 'email', 'body']
};
