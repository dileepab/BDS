import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import AllSymbol from "../../screens/watchlist/AllSymbol";
import Equity from "../../screens/watchlist/Equity";
import Forex from "../../screens/watchlist/Forex";
import Futures from "../../screens/watchlist/Futures";
import CFDs from "../../screens/watchlist/CFDs";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();
export default function TabWatchList() {
  return (
      <Tab.Navigator
          screenOptions={{ tabBarScrollEnabled: true, }}
          initialRouteName={"AllSymbol"}
      >
        <Tab.Screen name="AllSymbol" options={{
          tabBarLabel: 'All Symbol',
          tabBarStyle: {paddingHorizontal: 0, fontSize: 50 }
        }} component={AllSymbol} />
        <Tab.Screen name="Equity" component={Equity} />
        <Tab.Screen name="Forex" component={Forex} />
        <Tab.Screen name="Future" component={Futures} />
        <Tab.Screen name="CFDs" component={CFDs} />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
