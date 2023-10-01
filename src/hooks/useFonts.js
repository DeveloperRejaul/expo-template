import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { customFonts } from '../constant/fonts';

SplashScreen.preventAutoHideAsync();

export default () => {
  const [isLoaded] = useFonts(customFonts);

  const handleLayout = useCallback(() => {
    if (isLoaded)SplashScreen.hideAsync();
  }, [isLoaded]);

  return { isLoaded, handleLayout };
};
