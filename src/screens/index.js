import { Text } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Home from './home/Home';
import Login from './login/login';
import Setting from './setting/Setting';
import SignIn from './SignIn/SignIn';
import About from './About/About';
import { NAV_STR } from '../constant/navigationString';
import { COLORS } from '../constant/colors';

export const screens = {
  auth: {
    name: [NAV_STR.LOGIN, NAV_STR.SIGN_IN],
    component: [Login, SignIn],
  },
  main: {
    name: [],
    component: [],
  },
  tab: {
    name: [NAV_STR.HOME, NAV_STR.SETTING],
    component: [
      {
        com: Home,
        icon: ({ focused }) => <AntDesign name='home' size={24} color={focused ? COLORS.blue_500 : COLORS.gray_500} />,
        label: ({ focused }) => <Text style={{ color: focused ? COLORS.blue_500 : COLORS.gray_500 }}>Home</Text>,
      },
      {
        com: Setting,
        icon: ({ focused }) => <AntDesign name='setting' size={24} color={focused ? COLORS.blue_500 : COLORS.gray_500} />,
        label: ({ focused }) => <Text style={{ color: focused ? COLORS.blue_500 : COLORS.gray_500 }}>Setting</Text>,
      }],
  },
  drawer: {
    activeBg: COLORS.blue_100,
    inActiveBg: COLORS.gray_100,
    // activeIcon: '',
    // inActiveIcon: '',
    mainIcon: ({ focused }) => <AntDesign name='home' size={24} color={focused ? COLORS.blue_500 : COLORS.gray_500} />,
    mainLabel: ({ focused }) => <Text style={{ color: focused ? COLORS.blue_500 : COLORS.gray_500 }}>Home</Text>,
    name: [NAV_STR.ABOUT],
    component: [
      {
        com: About,
        icon: ({ focused }) => <Ionicons name='person-outline' size={24} color={focused ? COLORS.blue_500 : COLORS.gray_500} />,
        label: ({ focused }) => <Text style={{ color: focused ? COLORS.blue_500 : COLORS.gray_500 }}>About</Text>,
        // activeGg: 'red',
        // inActiveBg: 'black',
      },
    ],
  },
};
