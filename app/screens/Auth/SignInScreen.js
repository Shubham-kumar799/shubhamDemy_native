import React, { useState } from 'react';

//components
import { StyleSheet, View } from 'react-native';
import { Text, Title, TextInput, Button } from 'react-native-paper';
import { Formik } from 'formik';
import { ErrorText, AppModal, AppError } from '../../components/Global';

//utils
import { signInValidationSchema } from '../../utils/validationSchema';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../../../firebase';
import { staticTheme } from '../../config/theme';

const SignInScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState();

  const signInUser = async values => {
    try {
      setError();
      setVisible(true);
      const { email, password } = values;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      setVisible(false);
      navigation.navigate('Home');
    } catch (err) {
      setError(err);
      console.log('error in signInUser', err);
      console.log(err?.message);
      setVisible(false);
    }
  };

  if (error)
    return (
      <AppError
        text="Try Again"
        refresh={() => setError()}
        errorText={'Some unknown error occured'}
      />
    );

  return (
    <View style={styles.container}>
      <AppModal visible={visible} />
      <View style={styles.titleContainer}>
        <Title style={styles.title}>Welcome back!</Title>
      </View>
      <View style={styles.formContainer}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={signInValidationSchema}
          onSubmit={values => signInUser(values)}
        >
          {({
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            values,
          }) => (
            <View>
              <TextInput
                label="email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                mode="outlined"
                style={styles.inputField}
              />
              {errors.email && touched.email && (
                <ErrorText errorText={errors.email} />
              )}
              <TextInput
                label="password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                mode="outlined"
                style={styles.inputField}
              />
              {errors.password && touched.password && (
                <ErrorText errorText={errors.password} />
              )}
              <Button
                style={styles.submitButton}
                mode="contained"
                onPress={handleSubmit}
              >
                Sign In
              </Button>
            </View>
          )}
        </Formik>
      </View>
      <View style={styles.signUpFooter}>
        <Text>Don't have an account? </Text>
        <Text
          onPress={() => navigation.navigate('signUpScreen')}
          style={styles.signUp}
        >
          Sign Up
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: staticTheme.statusBarHeight,
    justifyContent: 'space-evenly',
    height: '100%',
    padding: staticTheme.sizes['xl'],
  },
  signUp: {
    color: staticTheme.colors.link,
    fontWeight: staticTheme.fontWeights.bold,
  },
  signUpFooter: {
    marginTop: staticTheme.sizes['xl'],
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  formContainer: {},
  submitButton: {
    marginTop: staticTheme.sizes['xl'],
  },
  inputField: {
    marginTop: staticTheme.sizes['md'],
  },
  titleContainer: {},
});

export default SignInScreen;
