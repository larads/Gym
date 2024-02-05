import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';

import { Home } from '@screens/Home'
import { History } from '@screens/History'
import { Profile } from '@screens/Profile'
import { Exercise } from '@screens/Exercise'
import { useTheme } from 'native-base';
import { Platform } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
    const { sizes, colors} = useTheme()
    return(
        <Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: colors.green[500],
            tabBarInactiveTintColor: colors.gray[600],
            tabBarStyle: {
                backgroundColor: colors.gray[500],
                borderTopWidth: 0,
            }
        }}>
            <Screen
                name='home'
                component={Home}
                options={{
                    tabBarIcon: ({ color, size, focused  }) => (
                        <AntDesign name="home" size={24} color={focused ? 'green' : 'black'} />
                    ),
                }}
            />

            <Screen
                name='history'
                component={History}
                options={{
                    tabBarIcon: ({ color, size, focused  }) => (
                        <MaterialIcons name="history" size={24} color={focused ? 'green' : 'black'} />
                    ),
                }}
            />

            <Screen 
                name='exercise' 
                component={Exercise}
                options={{
                    tabBarIcon: ({ color, size, focused  }) => (
                        <MaterialIcons name="fitness-center" size={24} color={focused ? 'green' : 'black'} />
                    ),
                }}
            />

            <Screen
                name='profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name="person-outline" size={24} color={focused ? 'green' : 'black'} />
                    ),
                }}
            />
        </Navigator>
    )
}