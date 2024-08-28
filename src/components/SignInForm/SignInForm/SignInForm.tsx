import React from 'react';
import {Formik, FormikProps} from 'formik';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {useAuth} from '../../../context/AuthContext';

type FormValues = {
  email: string;
  password: string;
};

export const SignInForm = () => {
  const {login} = useAuth();

  const handleSubmit = async (values: FormValues) => {
    console.log(values);
    if (values.email === 'dev@wajahat.io' && values.password === 'admin@123') {
      try {
        await login('dummy-token');
      } catch (error) {
        console.error('Login failed:', error);
      }
    } else {
      console.log('Check Credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Formik initialValues={{email: '', password: ''}} onSubmit={handleSubmit}>
        {({handleChange, handleBlur, values}: FormikProps<FormValues>) => (
          <View style={styles.formContainer}>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={styles.textInput}
              placeholder="Email"
              autoCapitalize="none"
            />
            <TextInput
              secureTextEntry={true}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              style={styles.textInput}
              placeholder="Password"
              autoCapitalize="none"
            />
            <View style={styles.button}>
              <Button
                title="Login"
                color={'#fff'}
                onPress={() => handleSubmit(values)}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 20,
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#f9a602',
    borderRadius: 5,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
  },
  button: {
    width: 150,
    height: 40,
    paddingHorizontal: 20,
    backgroundColor: '#f9a602',
    borderRadius: 10,
  },
});
