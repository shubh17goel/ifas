import { AppEnvironmentEnum } from '../constants/Enum'

const UatConfig = {
  environment: AppEnvironmentEnum.PRODUCTION,
  apis: {
    apiBaseUrl: 'https://dev.ifas.com/',
    webBaseUrl: 'https://dev.ifas.com/'
  }
}

export default UatConfig
