import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import Navigation from './src/navigation/Navigation';
import { store } from './src/redux/app/store';
import AppContext from './src/context/AppContext';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar />
      <AppContext>
        <Navigation />
      </AppContext>
    </Provider>
  );
}
