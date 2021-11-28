import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={[{ flexDirection: 'row' }, styles.fullBar]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            activeOpacity={1}
            style={[
              styles.bar,
              { backgroundColor: isFocused ? '#4B8320' : 'white' },
            ]}
          >
            <Text
              style={[
                styles.text,
                {
                  fontWeight: isFocused ? 'bold' : 'normal',
                  color: isFocused ? 'white' : 'black',
                },
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    height: 60,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4B8320',
    // borderWidth: 1,
    // borderBottomWidth: 0,
    // borderTopWidth: 0,
    // borderColor: 'white',
  },
  text: {
    fontSize: 18,
  },
  fullBar: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
});

export default TabBar;
