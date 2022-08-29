import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/navigator/Tabs'


const App = () => {
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  )
}

export default App






















// rafce snnipet antiguo
    //Snippets utiles
    // rnfes con stylesheet
    // rnfe (arrow functional component)

    //⁡⁣⁢⁢​‌‍‌⁡⁣⁣⁢𝗖𝗿𝗲𝗮𝗿 𝗣𝗿𝗼𝘆𝗲𝗰𝘁𝗼 𝗲 𝗶𝗻𝗶𝗰𝗶𝗮𝗿𝗹𝗼⁡⁡​
    // ⁡⁣⁢⁣npx react-native init nompreProyecto --template react-native-template-typescript⁡ 
    // ⁡⁣⁢⁣npx react-native run-android⁡

    //  ⁡⁣𝗗𝗼𝗰𝘂𝗺𝗲𝗻𝘁𝗮𝗰𝗶𝗼𝗻⁡: ⁡⁣⁢⁣⁡⁢⁢⁢https://reactnavigation.org/docs/getting-started⁡⁡

    // ⁡⁢⁣⁣𝗦𝘁𝗮𝗰𝗸 𝗡𝗮𝘃𝗶𝗴𝗮𝘁𝗶𝗼𝗻:⁡  utilizamos navigation.navigate y es trabaja poniendo una vista encima de la otra,
    //     todas las pantallas se mantienen activas. 
    //     ⁡⁣⁢⁣𝗻𝗮𝘃𝗶𝗴𝗮𝘁𝗶𝗼𝗻.𝗽𝗼𝗽⁡⁡ destruye la vista mas proxima al usuario.
    //     ⁡⁣⁢⁣𝗻𝗮𝘃𝗶𝗴𝗮𝘁𝗶𝗼𝗻.𝗽𝗼𝗽𝗧𝗼𝗧𝗼𝗽⁡ vuelve a la primer vista.
    //     ⁡⁣⁢⁣𝗻𝗮𝘃𝗶𝗴𝗮𝘁𝗶𝗼𝗻.𝗴𝗼𝗕𝗮𝗰𝗸 ⁡vuelve a la anterior

    // ⁡⁣⁣⁢𝗥𝗲𝗾𝘂𝗲𝗿𝗶𝗱𝗼⁡
    // ⁡⁢⁣⁣𝗜𝗻𝘀𝘁𝗮𝗹𝗮𝗿⁡: npm install @react-navigation/native
    //          npm install react-native-screens react-native-safe-area-context

    //  Para ios se necesita una instalacion mas, revisar la documentacion en getStarted
    
    // ⁡⁣⁣⁢𝗥𝗲𝗾𝘂𝗲𝗿𝗶𝗱𝗼⁡
    // react-native-screens package requires one additional configuration step to properly work on Android 
    // devices. Edit MainActivity.java file which is located in android/app/src/main/java/<your package name>/
    // MainActivity.java.

    // Add the following code to the body of MainActivity class:
    
    // @Override
    // protected void onCreate(Bundle savedInstanceState) {
    //   super.onCreate(null);
    // }
    // import android.os.Bundle;
    // ⁡⁣⁣⁢​‌‍‌Importante no olvidar:​⁡  npm install react-native-gesture-handler sino no funciona el stack navigator
    // ⁡⁢⁢⁣⁡⁣⁣⁢𝗟𝗲𝘃𝗮𝗻𝘁𝗮𝗿 𝗹𝗮 𝗮𝗽𝗽 𝗻𝘂𝗲𝘃𝗮𝗺𝗲𝗻𝘁𝗲⁡
    // ⁡⁣⁣⁢𝗨𝗹𝘁𝗶𝗺𝗮 𝗜𝗻𝘀𝘁𝗮𝗹𝗮𝗰𝗶𝗼𝗻⁡    npm install @react-navigation/stack
    // ⁡⁢
    //  ⁣⁣⁡⁢⁣⁣𝘂𝘀𝗲𝗡𝗮𝘃𝗶𝗴𝗮𝘁𝗶𝗼𝗻()⁡ ⁡ solucion al problema con typescript: const navigator = useNavigation<any>()
    //  esta segunda opcion sirve sin usar el any de useNavigation de la linea de arriba
    //  onPress={() => navigation.navigate('Detail' as never)}
      
    // <Button
    //   title='Ir a detalle'
    //   onPress={() => navigation.navigate('DetailScreen' as never)}
    // /> 
    
    //  ⁡⁢⁣⁣𝗗𝗿𝗮𝘄𝗲𝗿 𝗡𝗮𝘃𝗶𝗴𝗮𝘁𝗶𝗼𝗻:⁡  //Menu lateral
    //  npm remove react-native-reanimated
    //  npm add react-native-reanimated@2.2.4 esta es la version actual que funciona 
    
    //  en archivo babel.config.js
    // module.exports = {
    //   presets: ["module:metro-react-native-babel-preset"],
    //   plugins: [
    //     "react-native-reanimated/plugin",
    //   ],
    // };
    //
    // Eliminar advertencia al usar drawer - pegar en el
    // ⁡⁣⁣⁢𝗶𝗺𝗽𝗼𝗿𝘁 ⁡⁡⁣⁣⁢{𝗟𝗼𝗴𝗕𝗼𝘅 } 𝗳𝗿𝗼𝗺 '𝗿𝗲𝗮𝗰𝘁-𝗻𝗮𝘁𝗶𝘃𝗲'⁡;
    // ⁡⁣⁣⁢LogBox.ignoreLogs(['Reanimated 2'])⁡;

    // para IOS arreglar el header 
    // const insets = useSafeAreaInsets()
    // <View style={{marginTop: insets.top}}>
    // </View> 

    // ⁡⁣⁣⁢𝗕𝗼𝘁𝘁𝗼𝗺𝗧𝗮𝗯𝗡𝗮𝘃𝗶𝗴𝗮𝘁𝗶𝗼𝗻⁡ 
    // npm install @react-navigation/bottom-tabs⁡
    
    // import { View, Text } from 'react-native'
    // import React from 'react'
    // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
    // import Navigator from './Navigator';
    // import SearchScreen from '../screens/SearchScreen';

    // const Tab = createBottomTabNavigator();

    // const Tabs = () => {
    //   return (
    //     <Tab.Navigator>
    //       <Tab.Screen name="HomeScreen" component={Navigator} />
    //       <Tab.Screen name="SearchScreen" component={SearchScreen} />
    //     </Tab.Navigator>
    //   )
    // }

    // export default Tabs

    // ⁡⁣⁣⁢𝗧𝗼𝗽𝗧𝗮𝗯𝗡𝗮𝘃𝗶𝗴𝗮𝘁𝗶𝗼𝗻⁡ 
    // 3 Instalaciones necesarias
    // ⁡⁣⁢⁣npm install @react-navigation/material-top-tabs react-native-tab-view⁡
    // npm install @react-navigation/material-top-tabs react-native-tab-view
    // npm install react-native-pager-view


    // ⁡⁣⁣⁢𝗔𝗹 𝘂𝘁𝗶𝗹𝗶𝘇𝗮𝗿 𝗔𝘅𝗶𝗼𝘀 ⁡
    // 1. Asegurarse de que el emulador tenga internet. Ej. lanzar Chrome en el emulador y navegar un sitio cualquiera
    // 2. Asegurarse de que la fecha y hora estén correctos. Tenia desconfigurada la zona horaria y por ende la fecha/hora y esto hizo que Axios devuelva Network Error

    // ⁡⁣⁣⁢𝗣𝗮𝘀𝗮𝗿 𝗲𝗹 ⁡⁣⁢⁣𝗞𝗲𝘆𝗦𝘁𝗿𝗮𝗰𝘁𝗼𝗿⁡ ⁡⁣⁣⁢𝗲𝗻 𝗲𝗹⁡ ⁡⁣⁢⁣𝗙𝗹𝗮𝘁𝗟𝗶𝘀𝘁⁡ ⁡⁣⁣⁢𝗰𝗼𝗺𝗼 𝗽𝗿𝗶𝗺𝗲𝗿 𝗮𝗿𝗴𝘂𝗺𝗲𝗻𝘁𝗼 𝗽𝗮𝗿𝗮 𝗾𝘂𝗲 𝗳𝘂𝗻𝗰𝗶𝗼𝗻𝗲⁡


    // ⁡⁣⁣⁢Iconos⁡ ⁡⁣⁢⁣𝗵𝘁𝘁𝗽𝘀://𝗴𝗶𝘁𝗵𝘂𝗯.𝗰𝗼𝗺/𝗼𝗯𝗹𝗮𝗱𝗼𝗿/𝗿𝗲𝗮𝗰𝘁-𝗻𝗮𝘁𝗶𝘃𝗲-𝘃𝗲𝗰𝘁𝗼𝗿-𝗶𝗰𝗼𝗻𝘀⁡

    //npm install --save react-native-vector-icons
    
    // Para tener todos los 7000 iconos
    //apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

    //Para tener solo los de Ionicons
    //project.ext.vectoricons = [
    // iconFontNames: [ 'Ionicons.ttf'] // Name of the font files you want to copy
    // ]