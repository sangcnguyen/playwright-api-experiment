export const userSchema = {
  type: 'array',
  items: [
    {
      type: 'object',
      properties: {
        id: {
          type: 'integer'
        },
        name: {
          type: 'string'
        },
        email: {
          type: 'string'
        },
        gender: {
          type: 'string'
        },
        status: {
          type: 'string'
        }
      },
      required: ['id', 'name', 'email', 'gender', 'status']
    }
  ]
};

export const userCreationSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer'
    },
    name: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    gender: {
      type: 'string'
    },
    status: {
      type: 'string'
    }
  },
  required: ['id', 'name', 'email', 'gender', 'status']
};
