import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Link, Stack, Tabs} from 'expo-router';
import {Pressable, useColorScheme} from 'react-native';

import Colors from '../../../constants/Colors';
import {Entypo, Fontisto, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Futures from "./(_tabs)/Futures";
import CFDs from "./(_tabs)/CFDs";
import AllSymbol from "./(_tabs)/AllSymbol";
import Equity from "./(_tabs)/Equity";
import Forex from "./(_tabs)/Forex";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{ tabBarScrollEnabled: true}}>
            <Tab.Screen name="AllSymbol" options={{
                tabBarLabel: 'All Symbol',
            }} component={AllSymbol} />
            <Tab.Screen name="Equity" component={Equity} />
            <Tab.Screen name="Forex" component={Forex} />
            <Tab.Screen name="Future" component={Futures} />
            <Tab.Screen name="CFDs" component={CFDs} />
        </Tab.Navigator>
    );
}
