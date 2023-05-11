/**
 * @deprecated
 */
export const amplifyConfig = {
  aws_project_region: process.env.REACT_APP_AWS_PROJECT_REGION,
  aws_cognito_identity_pool_id: process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID,
  aws_cognito_region: process.env.REACT_APP_AWS_COGNITO_REGION,
  aws_user_pools_id: process.env.REACT_APP_AWS_USER_POOLS_ID,
  aws_user_pools_web_client_id: process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID,
};

/**
 * @deprecated
 */
export const auth0Config = {
  client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
};

/**
 * @deprecated
 */
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
};

export const gtmConfig = {
  containerId: process.env.REACT_APP_GTM_CONTAINER_ID,
};

export const datadogRumConfig = {
  datadogRumAppId: process.env.REACT_APP_DATADOG_RUM_APP_ID,
  datadogRumClientToken: process.env.REACT_APP_DATADOG_RUM_CLIENT_TOKEN,
  datadogRumVersion: process.env.REACT_APP_DATADOG_VERSION,
};

/**
 * 앱 환경 변수 설정 모음
 */
export interface AppEnvironment {
  /**
   * 운영 환경 여부
   */
  isProduction: boolean;
  /**
   * 스테이지 서버 여부
   */
  isStage: boolean;
  /**
   * 카나리 서버 여부
   */
  isCanary: boolean;
  /**
   * 개발 서버 여부 (로컬 동일)
   */
  isDevelopment: boolean;
  /**
   * 로컬 환경 여부
   */
  isLocally: boolean;
  /**
   * 개발 환경 이름 (=== appEnv)
   */
  environmentName: string | undefined;
}

const nodeEnv = process.env.NODE_ENV;
const appEnv = process.env.REACT_APP_ENV;
const locally = process.env.REACT_APP_BUILD_ENV;
const isNodeEnvProduction = nodeEnv === 'production';

export const apiConfig = {
  apiManagerBaseUrl: process.env.REACT_APP_MANAGER_API_URL,
  apiPartnerBaseUrl: process.env.REACT_APP_PARTNER_API_URL,
};

export const pathConfig = {
  cdnUrl: process.env.REACT_APP_CDN_URL,
  serviceUrl: process.env.REACT_APP_SERVICE_URL,
  operationOfficeUrl: process.env.REACT_APP_OPERATION_OFFICE_URL,
  partnerDataUrl: process.env.REACT_APP_PARTNER_DATA_URL,
};

export const env: AppEnvironment = {
  environmentName: appEnv,
  isCanary: appEnv === 'canary' && isNodeEnvProduction,
  isDevelopment: appEnv === 'development' || !isNodeEnvProduction,
  isProduction: appEnv === 'production' && isNodeEnvProduction,
  isStage: appEnv === 'dev' && isNodeEnvProduction,
  isLocally: locally === 'local',
};
