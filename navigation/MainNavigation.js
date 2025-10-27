import { createStackNavigator } from "@react-navigation/stack";
import Routes from "./Routes";

import Splash1 from "../screens/Splash/Splash1";
import Onboarding from "../screens/Onboarding/Onboarding";
import Welcome from "../screens/Welcome/Welcome";
import CreateAccount from "../screens/CreateAccount/CreateAccount";
import Login from "../screens/Login/Login";
import ForgotPassword from "../screens/ForgotPassword/ForgotPassword";
import OTPScreen from "../screens/ForgotPassword/OPTScreen";
import ResetPassword from "../screens/ForgotPassword/ResetScreen";
import TabNavigation from "./TabNavigation";
import Categories from "../screens/Categories/Categories";
import Cart from "../screens/Cart/Cart";
import Hello from "../screens/Hello/Hello";
import Rough from "../screens/rough/Rough"
import Favorites from "../screens/Favorites/Favorites";
import ProductCard from "../src/Component/ProductCard/ProductCard";
import ProductDetail from "../screens/ProductDetail/ProductDetail";
import SecondScreen from "../screens/SecondScreen/SecondScreen";
import RoughDetail from "../screens/RoughDetail/RoughDetail";
import MyProducts from "../screens/MyProducts/MyProducts";

const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName={Routes.ForgotPassword}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={Routes.Splash1} component={Splash1} />
            <Stack.Screen name={Routes.Onboarding} component={Onboarding} />
            <Stack.Screen name={Routes.Welcome} component={Welcome} />
            <Stack.Screen name={Routes.CreateAccount} component={CreateAccount} />
            <Stack.Screen name={Routes.Login} component={Login} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="OTP" component={OTPScreen} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Rough" component={Rough} />
            {/* <Stack.Screen name="Hello" component={Hello} /> */}
            <Stack.Screen name="favourites" component={Favorites} />
            <Stack.Screen name="SecondScreen" component={TabNavigation} />
            <Stack.Screen name="RoughDetail" component={RoughDetail} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
            <Stack.Screen name={Routes.Home} component={TabNavigation} />
            <Stack.Screen name="MyProducts" component={MyProducts} />
            <Stack.Screen name={Routes.LikedScreen} component={TabNavigation} />

        </Stack.Navigator>
    );
};

export default MainNavigation;
