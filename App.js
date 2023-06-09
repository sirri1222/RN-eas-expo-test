import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import About from './components/About';
import Home from './components/Home';
import Toast from 'react-native-toast-message';
import Login from './components/Login';

  const Stack = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>     
		<Stack.Navigator initialRouteName="LoginView">
        	<Stack.Screen
                    		name="home"
                    		component={Home}
                    		options={{headerShown: false}}
             		/>	
                	<Stack.Screen
                    		name="login"
                    		component={Login}
                    		options={{headerShown: false}}
             		/>
       		</Stack.Navigator>
           <Toast ref={(ref) => Toast.setRef(ref)} />
	</NavigationContainer>
   
  );
}

