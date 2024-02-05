import { NativeBaseProvider } from 'native-base';
import { Text, View, StatusBar } from 'react-native';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold});

  return (
    <NativeBaseProvider>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
        />
      {fontsLoaded ? <View /> : <View />}
    </NativeBaseProvider>
  );
}

