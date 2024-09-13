import React, { useState, useRef, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

function Index() {
  const [val, setVal] = useState(1);
  const upperLimit = 50;
  const lowerLimit = 0;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const increment = () => {
    if (val < upperLimit) {
      setVal(val + 1);
    } else {
      alert("You have reached the upper limit");
    }
  };

  const decrement = () => {
    if (val > lowerLimit) {
      setVal(val - 1);
    } else {
      alert("You have reached the lower limit");
    }
  };

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        <View style={styles.navContainer}>
          <TouchableOpacity style={styles.link}>
            <Link href="/signin">
              <Text style={styles.linkText}>Login</Text>
            </Link>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
            <Link href="/signup">
              <Text style={styles.linkText}>Signup</Text>
            </Link>
          </TouchableOpacity>
        </View>

        <View style={styles.counterContainer}>
          <TouchableOpacity
            style={[styles.button, val <= lowerLimit && styles.disabledButton]}
            onPress={decrement}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>

          <View style={styles.valueContainer}>
            <Text style={styles.valueText}>{val}</Text>
          </View>

          <TouchableOpacity
            style={[styles.button, val >= upperLimit && styles.disabledButton]}
            onPress={increment}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 50,
  },
  link: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    width: 100,
    alignItems: 'center',
  },
  linkText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 30,
    padding: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  disabledButton: {
    backgroundColor: 'rgba(76, 175, 80, 0.5)',
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  valueContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    marginHorizontal: 20,
    minWidth: 100,
    alignItems: 'center',
  },
  valueText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
    padding: 10,
  },
});

export default Index;