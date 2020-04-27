import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MealsScreen from "./src/screens/Meals";
import Modal from "./src/screens/Modal";

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

export default createAppContainer(RootStack);
