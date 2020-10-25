const dev = {
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'dev-solution-infra-s3-uploads4f6eb0fd-1jl2ovddllpbp'
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://ziplxlq5fe.execute-api.us-east-1.amazonaws.com/dev/graphql'
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_L7tylxxRD',
    APP_CLIENT_ID: '4ohqsronaf6qov1k1lcun2jb4m',
    IDENTITY_POOL_ID: 'us-east-1:9169afb6-589f-4d49-a666-21722df6cf38'
  },
  STRIPE_KEY: ''
};
const prod = {
  s3: {
    REGION: '',
    BUCKET: ''
  },
  apiGateway: {
    REGION: '',
    URL: ''
  },
  cognito: {
    REGION: '',
    USER_POOL_ID: '',
    APP_CLIENT_ID: '',
    IDENTITY_POOL_ID: ''
  },
  STRIPE_KEY: ''
};

const config = (process.env.REACT_APP_STAGE === 'prod') ? prod : dev;

export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};