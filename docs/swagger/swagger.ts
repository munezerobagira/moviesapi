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
  ],
  tags: [
    {
      name: 'Sample',
      description: 'Endpoints for sample requests',
    },
    {
      name: 'Movies',
      description: 'Endpoints for fetching and getting movies',
    },
    {
      name: 'MovieList',
      description: 'Endpoints for fetching and getting movies list',
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
        requestBody: {
          description: 'Login credentials',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/login',
              },
            },
          },
          required: true,
        },
        responses: {
          '201': {
            description: 'Server is up',
          },
        },
      },
    },
    '/auth/signup': {
      post: {
        tags: ['Authentication'],
        summary: 'Endpoint for Sign up',
        operationId: 'signup',
        requestBody: {
          description: 'Login credentials',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/signup',
              },
            },
          },
          required: true,
        },
        responses: {
          '201': {
            description: 'Signed up successfully',
          },
        },
      },
    },

    '/movies': {
      get: {
        tags: ['Movies'],
        summary: 'Endpoint for getting all movies',
        operationId: 'get-movies',
        securityShemes: {},
        responses: {
          '200': {
            description: 'Fetching movies successfully',
          },
          '404': {
            description: 'Endpoint is not found',
          },
        },
      },
    },
    '/movies/search': {
      get: {
        tags: ['Movies'],
        summary: 'Endpoint for getting all the users',
        operationId: 'search-movies',
        parameters: [
          {
            name: 'keywords',
            in: 'query',
            description: 'Search keywords',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
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
    },
    '/movies/{movieId}': {
      get: {
        tags: ['Movies'],
        summary: 'Endpoint for getting all the users',
        operationId: 'get-users',
        parameters: [
          {
            name: 'movieId',
            in: 'paramater',
            description: 'Movie id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
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
      login: {
        required: ['email', 'password'],
        type: 'object',
        properties: {
          email: {
            type: 'string',
          },
          password: {
            type: 'string',
          },
        },
        example: {
          email: 'johndoe@example.com',
          password: 'password',
        },
      },

      signup: {
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
          email: 'johndoe@example.com',
          password: 'password',
          name: 'John doe',
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
