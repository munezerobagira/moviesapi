export const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'MyTop100Movies',
    description: 'Just documentation an API that which lets users set their top 100 movies.',
    contact: {
      email: 'munezerobagira@gmail.com',
    },
    version: '1.0.0',
  },
  servers: [
    {
      url: 'http://localhost:{port}',
      variables: {
        port: {
          default: '5000',
        },
      },
    },
    {
      url: '/',
    },
  ],
  tags: [
    {
      name: 'sample',
      description: 'Endpoints for sample requests',
    },
  ],
  paths: {
    '/sample': {
      get: {
        tags: ['sample'],
        summary: 'endpoint to test if server is up',
        operationId: 'sample-get',
        responses: {
          '200': {
            description: 'Server is up',
          },
        },
      },
      post: {
        tags: ['sample'],
        summary: 'endpoint to test if server is up',
        operationId: 'sample-post',
        responses: {
          '201': {
            description: 'Server is up',
          },
        },
      },
      put: {
        tags: ['sample'],
        summary: 'endpoint to test if server is up',
        operationId: 'sample-put',
        responses: {
          '200': {
            description: 'Server is up',
          },
        },
      },
      patch: {
        tags: ['sample'],
        summary: 'endpoint to test if server is up',
        operationId: 'sample-patch',
        responses: {
          '200': {
            description: 'Server is up',
          },
        },
      },
      delete: {
        tags: ['sample'],
        summary: 'endpoint to test if server is up',
        operationId: 'sample-delete',
        responses: {
          '200': {
            description: 'Server is up',
          },
        },
      },
    },
    '/users': {
      get: {
        tags: ['Users'],
        summary: 'Endpoint for getting all the users',
        operationId: 'get-users',
        securityShemes: {},
        responses: {
          '200': {
            description: 'User were fetched successfully',
          },
          '404': {
            description: 'Endpoint is not found',
          },
        },
      },
      post: {
        tags: ['sample'],
        summary: 'endpoint to test if server is up',
        operationId: 'signup-user',
        requestBody: {},
        responses: {
          '201': {
            description: 'Server is up',
          },
        },
      },
      put: {
        tags: ['sample'],
        summary: 'endpoint to test if server is up',
        operationId: 'sample-put',
        responses: {
          '200': {
            description: 'Server is up',
          },
        },
      },
      patch: {
        tags: ['sample'],
        summary: 'endpoint to test if server is up',
        operationId: 'sample-patch',
        responses: {
          '200': {
            description: 'Server is up',
          },
        },
      },
      delete: {
        tags: ['sample'],
        summary: 'endpoint to test if server is up',
        operationId: 'sample-delete',
        responses: {
          '200': {
            description: 'Server is up',
          },
        },
      },
    },
  },
  components: {
    schemas: {
      userMessage: {
        required: ['email', 'message', 'name'],
        type: 'object',
        properties: {
          email: {
            type: 'string',
          },
          subject: {
            type: 'string',
          },
          message: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
        },
        example: {
          name: 'John Doe',
          subject: 'A sending you a wonderful email',
          email: 'johndoe@example.com',
          message: 'I just wanted you to see this email',
        },
      },
    },
    securitySchemes: {
      bearerToken: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
    },
  },
};
