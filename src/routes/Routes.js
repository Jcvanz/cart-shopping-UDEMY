import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Pages/Home/Home";
import Cart from "../components/Pages/Cart/Cart";

export default function Routes() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                    headerTitle: 'Meu carrinho'
                }}
            />
        </Stack.Navigator>
    );
}