import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default function App() {
  const randomWidth = useSharedValue(300);
  const rounded = useSharedValue(0);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
      borderRadius: withTiming(rounded.value, config),
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Animated.View
        style={[
          {
            width: 100,
            height: 300,
            backgroundColor: 'black',
            margin: 30,
            borderRadius: 50,
          },
          style,
        ]}
      />
      <Button
        title='Mude!'
        onPress={() => {
          randomWidth.value = Math.random() * 300;
          rounded.value = Math.random() * 300;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
