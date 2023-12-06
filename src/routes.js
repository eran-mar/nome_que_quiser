import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./pages/home";
import { Passwords } from "./pages/paswords";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function Routes() {
    return(
        <Tab.Navigator>
           <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({focusesd, size, color}) =>{
                        if(focusesd){
                            return <Ionicons size={size} color={color} name="home"/>
                        }

                        return <Ionicons size={size} color={color} name="home-outline"/>
                    }
                }}
           />

            <Tab.Screen
                name="Passwords"
                component={Passwords}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({focusesd, size, color}) =>{
                        if(focusesd){
                            return <Ionicons size={size} color={color} name="lock-closed"/>
                        }

                        return <Ionicons size={size} color={color} name="lock-closed-outline"/>
                    }
                }}
           />

        </Tab.Navigator>
    )    
}