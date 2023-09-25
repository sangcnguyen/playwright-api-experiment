export const todoSchema = {
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
    due_on: {
      type: 'null'
    },
    status: {
      type: 'string'
    }
  },
  required: ['id', 'user_id', 'title', 'due_on', 'status']
};
