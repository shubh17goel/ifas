import { StyleSheet } from 'react-native'
import { Color } from './Color'
export const GlobalStyle = StyleSheet.create({
  cardShadow: {
    shadowRadius: 10,
    shadowOpacity: 0.3,
    shadowColor: Color.darkLight,
    shadowOffset: {
      width: 0,
      height: 10
    },
    elevation: 3
  }
})
