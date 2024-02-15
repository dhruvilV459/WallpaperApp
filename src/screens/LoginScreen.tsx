import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const handleLogin = () => {
   
    if (!username || !password) {
        setError('Please enter both username and password.');
        return;
      }
  
    console.log('Login pressed with:', username, password);

    setError(null);

    };

  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Wallpaper App</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, error && styles.errorInput]}
          placeholderTextColor={'black'}
          placeholder="Enter Username"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
           style={[styles.input, error && styles.errorInput]}
          placeholderTextColor={'black'}
          placeholder="Enter Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <Button mode="contained" style={styles.loginButton} onPress={handleLogin}>
        Log In
      </Button>

      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity onPress={navigateToSignUp}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fafafa',
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
    color: '#333', // Text color
  },
  errorInput: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#3897f1',
    padding: 10,
    borderRadius: 5,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginVertical: 10,
  },
  forgotPasswordText: {
    color: '#003569',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupText: {
    color: '#555',
  },
  signupLink: {
    color: '#003569',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
