import { Dimensions } from 'react-native'

export const trueDeviceWidth = Dimensions.get('window').width

export const isMobile = trueDeviceWidth < 500 ? true : false

export const deviceWidth = isMobile ? trueDeviceWidth : 500