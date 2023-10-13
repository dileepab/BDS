import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Link, Tabs} from 'expo-router';
import {Pressable, useColorScheme} from 'react-native';

import Colors from '../../constants/Colors';
import {Entypo, Fontisto, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{marginBottom: -3}} {...props} />;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            initialRouteName={"chart"}
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Tab One',
                    tabBarIcon: ({color}) => <MaterialCommunityIcons name="calendar-star" size={24} color={color}/>,
                    tabBarLabel: 'Watchlist',
                    headerRight: () => (
                        <Link href="/modal" asChild>
                            <Pressable>
                                {({ pressed }) => (
                                    <FontAwesome
                                        name="info-circle"
                                        size={25}
                                        color={Colors[colorScheme ?? 'light'].text}
                                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                                    />
                                )}
                            </Pressable>
                        </Link>
                    ),
                }}
            />
            <Tabs.Screen
                name="chart"
                options={{
                    title: 'Chart',
                    tabBarIcon: ({color}) => <Ionicons name="stats-chart" size={24} color={color}/>,
                    tabBarLabel: 'Chart',
                }}
            />
            <Tabs.Screen
                name="insight"
                options={{
                    title: 'Insight',
                    tabBarIcon: ({color}) => <Fontisto name="lightbulb" size={24} color={color} />,
                    tabBarLabel: 'Insight',
                }}
            />
            <Tabs.Screen
                name="menu"
                options={{
                    title: 'Menu',
                    tabBarIcon: ({color}) => <Entypo name="menu" size={24} color={color} />,
                    tabBarLabel: 'Menu',
                }}
            />
        </Tabs>
    );
}
