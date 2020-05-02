import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MealsScreen from "./src/screens/Meals";
import Modal from "./src/screens/Modal";
import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register';
import AuthLoading from './src/screens/AuthLoading';

const OnBoardingNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
  },
  {
    initialRouteName: "Login",
  }
);
 
const AppNavigator = createStackNavigator(
  {
    Meals: {
      screen: MealsScreen,
    },
  },
  {
    initialRouteName: "Meals",
  }
);

const RootStack = createStackNavigator(
  {
    Main: AppNavigator,
    Modal: Modal,
  },
  {
    mode: "modal",
    headerMode: "none",
  }
);

const BaseStack = createSwitchNavigator({
  AuthLoading: AuthLoading,
  OnBoarding: OnBoardingNavigator,
  Root: RootStack,
}, {
  initialRouteName: 'AuthLoading',
})

export default createAppContainer(BaseStack);
