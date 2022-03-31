import ProdConfig from './ProdConfig'
import UatConfig from './UatConfig'

const isProductionEnvironment = false
// const isUatEnvironment = false

export default isProductionEnvironment
  ? ProdConfig
  : UatConfig
