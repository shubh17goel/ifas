import { AppEnvironmentEnum } from '../constants/Enum'

const ProdConfig = {
  environment: AppEnvironmentEnum.PRODUCTION,
  apis: {
    apiBaseUrl: 'https://ifas.com/',
    webBaseUrl: 'https://ifas.com/'
  }
}

export default ProdConfig
