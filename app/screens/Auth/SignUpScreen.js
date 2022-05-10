import React, { useState } from 'react';

//components
import { StyleSheet, View } from 'react-native';
import { Text, Title, TextInput, Button } from 'react-native-paper';
import { Formik } from 'formik';
import { ErrorText, AppModal } from '../../components/Global';

//utils
import { signUpValidationSchema } from '../../utils/validationSchema';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../../../firebase';
import { staticTheme } from '../../config/theme';

const SignUpScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  const signUpUser = async values => {
    try {
      setVisible(true);
      const { email, password } = values;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      setVisible(false);
      navigation.navigate('Home');
    } catch (err) {
      console.log('error in signUpUser', err);
      console.log(err?.message);
      setVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <AppModal visible={visible} />
      <View>
        <Title style={styles.title}>Get started here...</Title>
      </View>
      <View>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={signUpValidationSchema}
          onSubmit={values => signUpUser(values)}
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
                Sign Up
              </Button>
            </View>
          )}
        </Formik>
      </View>
      <View style={styles.signUpFooter}>
        <Text>Aleady a user? </Text>
        <Text
          onPress={() => navigation.navigate('signInScreen')}
          style={styles.signUp}
        >
          Sign In
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
  submitButton: {
    marginTop: staticTheme.sizes['xl'],
  },
  inputField: {
    marginTop: staticTheme.sizes['md'],
  },
});

export default SignUpScreen;
