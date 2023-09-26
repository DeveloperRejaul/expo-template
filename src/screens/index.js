import Home from './home/Home';
import Login from './login/login';
import Setting from './setting/Setting';
import SignIn from './SignIn/SignIn';

export const navString = {
  login: 'login', signin: 'signin', home: 'home', setting: 'setting',
};

export const screens = {
  auth: {
    name: ['login', 'signin'],
    component: [Login, SignIn],
  },
  main: {
    name: ['home', 'setting'],
    component: [Home, Setting],
  },
  tab: {
    name: ['home', 'setting'],
    component: [Home, Setting],
  },
  drawer: {
    name: ['home', 'setting'],
    component: [Home, Setting],
  },
};
