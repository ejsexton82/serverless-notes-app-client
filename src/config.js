export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "ejsexton82-notes-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://wemmbowi89.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_nDg0EqiVN",
    APP_CLIENT_ID: "3h81gvlqmld687si08ns4cqs1q",
    IDENTITY_POOL_ID: "us-east-1:241cc1b3-fcae-4794-85e3-7bde5ac1fee2"
  }
};
