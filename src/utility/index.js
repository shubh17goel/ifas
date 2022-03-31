import moment from 'moment'
import { Dimensions, Platform } from 'react-native'
import { headerType } from '../constants/Enum'

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height
export const isAndroid = () => {
  return Platform.OS === 'android'
}

export const isIOS = () => {
  return Platform.OS === 'ios'
}

export const dimensions = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width
}
export const dateFormatter = (dateValue, format) => {
  return moment(dateValue).format(format)
}
export const getHeaderConfig = (props, callback) => {
  const headerConfig = {
    goBack: () => props?.navigation.goBack(),
    type: headerType.DRAWER,
    callback: callback,
    data: { name: props?.route?.name },
    navigation: props?.navigation

  }
  return headerConfig
}
