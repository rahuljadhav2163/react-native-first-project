import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Animated, Alert } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function Signup() {
    const [animation] = useState(new Animated.Value(0));

   

    React.useEffect(() => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, []);

  

    return (
        <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.gradient}
        >
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <Animated.View style={[
                    styles.content,
                    {
                        opacity: animation,
                        transform: [{
                            translateY: animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: [50, 0],
                            }),
                        }],
                    }
                ]}>
                    <Text style={styles.title}>Welcome</Text>
                    
                    <View style={styles.formContainer}>
                        <Text style={styles.formTitle}>Sign Up</Text>
                        
                        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            placeholderTextColor="#a0a0a0"
                           
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="#a0a0a0"
                            keyboardType="email-address"
                           
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="#a0a0a0"
                            secureTextEntry
                         
                        />

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Get Started</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.linksContainer}>
                        <Link href="/signin" style={styles.link}>
                            Login
                        </Link>
                        <Link href="/" style={styles.link}>
                            Home
                        </Link>
                    </View>
                </Animated.View>
            </KeyboardAvoidingView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    content: {
        width: '100%',
        maxWidth: 340,
    },
    title: {
        fontSize: 42,
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: 30,
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    formContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    formTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#4c669f',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 15,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#333',
    },
    button: {
        backgroundColor: '#4c669f',
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    linksContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
    },
    link: {
        color: '#ffffff',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});
