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
        summary: 'Endpoint for searching movies by keywords',
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
        summary: 'Endpoint for getting movie by id',
        operationId: 'get-users',
        parameters: [
          {
            name: 'movieId',
            in: 'path',
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
    '/lists/': {
      post: {
        tags: ['MovieList'],
        summary: 'Endpoint for creating movie lisst',
        operationId: 'Create list',
        requestBody: {
          description: 'Login credentials',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/list',
              },
            },
          },
          required: true,
        },
        security: [
          {
            bearerToken: [],
          },
        ],
        responses: {
          '200': {
            description: 'Movie list created successfuly',
          },
          '400': {
            description: 'Invalid data were given',
          },
          '404': {
            description: 'Endpoint is not found',
          },
        },
      },
      get: {
        tags: ['MovieList'],
        summary: 'Endpoint for getting movie lists',
        operationId: 'get list',
        requestBody: {},
        security: [
          {
            bearerToken: [],
          },
        ],
        responses: {
          '200': {
            description: 'Movie list created successfuly',
          },
          '404': {
            description: 'Endpoint is not found',
          },
        },
      },
    },
    '/lists/{listId}': {
      post: {
        tags: ['MovieList'],
        summary: 'Endpoint for adding movie to list ',
        operationId: 'Add movie to a list',
        parameters: [
          {
            name: 'listId',
            in: 'path',
            description: 'List id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          description: 'Login credentials',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/movie',
              },
            },
          },
          required: true,
        },
        security: [
          {
            bearerToken: [],
          },
        ],
        responses: {
          '200': {
            description: 'Movie list created successfuly',
          },
          '400': {
            description: 'Invalid data were given',
          },
          '404': {
            description: 'Endpoint is not found',
          },
        },
      },
      get: {
        tags: ['MovieList'],
        summary: 'Endpoint for getting movie lists',
        operationId: 'get list',
        requestBody: {},
        parameters: [
          {
            name: 'listId',
            in: 'path',
            description: 'List id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        security: [
          {
            bearerToken: [],
          },
        ],
        responses: {
          '200': {
            description: 'Movie list created successfuly',
          },
          '404': {
            description: 'Endpoint is not found',
          },
        },
      },
    },
    '/lists/{listId}/{movieId}': {
      patch: {
        tags: ['MovieList'],
        summary: 'Endpoint updating movie rank ',
        operationId: 'Update movie rank',
        parameters: [
          {
            name: 'listId',
            in: 'path',
            description: 'List id',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'movieId',
            in: 'path',
            description: 'Movie id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          description: 'Login credentials',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/movieRank',
              },
            },
          },
          required: true,
        },
        security: [
          {
            bearerToken: [],
          },
        ],
        responses: {
          '200': {
            description: 'Movie rank updated successfully',
          },
          '400': {
            description: 'Invalid data were given',
          },
          '404': {
            description: 'Endpoint is not found',
          },
        },
      },
      delete: {
        tags: ['MovieList'],
        summary: 'Endpoint for removing movie lists',
        operationId: 'remove movie from list',
        requestBody: {},
        security: [
          {
            bearerToken: [],
          },
        ],
        parameters: [
          {
            name: 'listId',
            in: 'path',
            description: 'List id',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'movieId',
            in: 'path',
            description: 'Movie id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Movie deleted successfuly',
          },
          '404': {
            description: 'Endpoint is not found',
          },
        },
      },
    },
    '/sample': {
      get: {
        tags: ['Sample'],
        summary: 'endpoint to test if server is up',
        operationId: 'sample-get',
        responses: {
          '200': {
            description: 'Server is up',
          },
        },
      },
      post: {
        tags: ['Sample'],
        summary: 'endpoint to test if server is up',
        operationId: 'sample-post',
        responses: {
          '201': {
            description: 'Server is up',
          },
        },
      },
      put: {
        tags: ['Sample'],
        summary: 'endpoint to test if server is up',
        operationId: 'sample-put',
        responses: {
          '200': {
            description: 'Server is up',
          },
        },
      },
      patch: {
        tags: ['Sample'],
        summary: 'endpoint to test if server is up',
        operationId: 'sample-patch',
        responses: {
          '200': {
            description: 'Server is up',
          },
        },
      },
      delete: {
        tags: ['Sample'],
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
      list: {
        required: ['name'],
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
        },
        example: {
          name: 'My Top 100 Horror movie',
        },
      },
      movie: {
        required: ['movieId'],
        type: 'object',
        properties: {
          movieId: {
            type: 'number',
          },
        },
        example: {
          movieId: 646389,
        },
      },
      movieRank: {
        required: ['rank'],
        type: 'object',
        properties: {
          rank: {
            type: 'number',
          },
        },
        example: {
          rank: 1,
        },
      },
    },
    securitySchemes: {
      bearerToken: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
};
