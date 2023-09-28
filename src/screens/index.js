import { Text } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Home from './home/Home';
import Login from './login/login';
import Setting from './setting/Setting';
import SignIn from './SignIn/SignIn';
import About from './About/About';

export const navString = {
  login: 'login', signin: 'signin', home: 'home', setting: 'setting', about: 'about',
};

export const screens = {
  auth: {
    name: ['login', 'signin'],
    component: [Login, SignIn],
  },
  main: {
    name: [],
    component: [],
  },
  tab: {
    name: ['home', 'setting'],
    component: [
      {
        com: Home,
        icon: ({ focused }) => <AntDesign name='home' size={24} color={focused ? 'red' : 'black'} />,
        label: ({ focused }) => <Text style={{ color: focused ? 'red' : 'black' }}>Home</Text>,
      },
      {
        com: Setting,
        icon: ({ focused }) => <AntDesign name='setting' size={24} color={focused ? 'red' : 'black'} />,
        label: ({ focused }) => <Text style={{ color: focused ? 'red' : 'black' }}>Setting</Text>,
      }],
  },
  drawer: {
    activeBg: '#ff00004d',
    inActiveBg: '#00000022',
    activeIcon: '',
    inActiveIcon: '',
    mainIcon: ({ focused }) => <AntDesign name='home' size={24} color={focused ? 'red' : 'black'} />,
    mainLabel: ({ focused }) => <Text style={{ color: focused ? 'red' : 'black' }}>Home</Text>,
    name: ['About'],
    component: [
      {
        com: About,
        icon: ({ focused }) => <Ionicons name='person-outline' size={24} color={focused ? 'red' : 'black'} />,
        label: ({ focused }) => <Text style={{ color: focused ? 'red' : 'black' }}>About</Text>,
        activeGg: 'red',
        inActiveBg: 'black',
      },
    ],
  },
};
