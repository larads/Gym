import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "@screens/SingIn";
import { SingUp } from "@screens/SinUp";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator>
            <Screen 
                name="SignIn"
                component={SignIn}
            />
            <Screen 
                name="SingUp"
                component={SingUp}
            />
        </Navigator>
    )
}
