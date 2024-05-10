import {Formik, FormikHelpers, FormikProps} from 'formik';
import {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

type FormValues = {
  email: string;
  password: string;
};

type SignInFormProps = {
  onSignIn: () => void;
};

export const SignInForm: React.FC<SignInFormProps> = ({onSignIn}) => {
  const [signInSuccess, setSignInSuccess] = useState(false);
  const handleSubmit = (
    values: FormValues,
    {setSubmitting}: FormikHelpers<FormValues>,
  ) => {
    if (values.email === 'dev@wajahat.io' && values.password === 'admin@123') {
      console.log(values);
      onSignIn();
      setSubmitting(false);
      setSignInSuccess(true);
    } else {
      console.log('Check Credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Formik initialValues={{email: '', password: ''}} onSubmit={handleSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
        }: FormikProps<FormValues>) => (
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
                onPress={(e: any) => handleSubmit(e)}
                title="Submit"
                color={'#fff'}
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
    height: '100%',
    width: '80%',
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
    borderRadius: 15,
    width: 200,
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
