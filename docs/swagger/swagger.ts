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
      url: '/',
    },
    {
      url: 'http://localhost:{port}',
      variables: {
        port: {
          default: '5000',
        },
      },
    },
    s,
  ],
  tags: [
    {
      name: 'sample',
      description: 'Endpoints for sample requests',
    },
    {
      name: 'Movies',
      description: 'Endpoints for fetching and getting movies',
    },
    {
      name: 'MovieList',
      description: 'Endpoints for fetching and getting movies',
    },
    {
      name: 'Authentication',
      description: 'Endpoints for fetching and getting movies',
    },
    {
      name: 'User',
      description: 'Endpoints for fetching and getting movies',
    },
  ],
  paths: {
    '/auth/login': {
      post: {
        tags: ['Authentication'],
        summary: 'Endpoint for logging in',
        operationId: 'login',
        requestBody: {},
        responses: {
          '201': {
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
    '/movies': {
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
    // '/movies': {
    //   get: {
    //     tags: ['Movies'],
    //     summary: 'Endpoint for getting all the users',
    //     operationId: 'get-movie',
    //     securityShemes: {},
    //     responses: {
    //       '200': {
    //         description: 'Fetching movies was successfully',
    //       },
    //       '404': {
    //         description: 'Endpoint is not found',
    //       },
    //     },
    //   },
    // },
  },
  components: {
    schemas: {
      user: {
        required: ['email', 'password', 'name'],
        type: 'object',
        properties: {
          email: {
            type: 'string',
          },
          password: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
        },
        example: {
          name: 'John Doe',
          email: 'johndoe@example.com',
          password: 'testing',
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
