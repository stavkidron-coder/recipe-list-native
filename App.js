import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Recipes from './screens/ColorPalette';
import MasterList from './screens/MasterList';
import TabBar from './components/TabBar';

const Stack = createStackNavigator();
const MainStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Master List"
          component={MasterList}
          options={{ title: 'Master List' }}
        />
        <Stack.Screen
          name="Recipes"
          component={Recipes}
          options={({ route }) => ({ title: route.params.paletteName })}
        />
      </Stack.Navigator> */}
      <Tab.Navigator
        tabBar={(props) => <TabBar {...props} key={props.state.index} />}
      >
        <Tab.Screen name="Master List" component={MasterList} />
        <Tab.Screen name="Recipes" component={Recipes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
