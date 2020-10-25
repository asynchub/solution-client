const dev = {
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