import React, {useState} from 'react';
import {
  Alert,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Formik} from 'formik';
import style from '../Styles/CounterStyle';
import * as Yup from 'yup';

//  regular expression for phoneNumber and password Validation
let phoneReg = /^[0-9]+$/;
let passwordReg =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

// form SignUP Schema
const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .matches(
      passwordReg,
      'must contain 1 uppercase letter, 1 number and minimum 8 characters and 1 special character(@,!,#,$,etc.)',
    )
    .min(8, 'Too short')
    .max(50, 'Too big')
    .required('Enter your password'),
  mobileNumber: Yup.string()
    .matches(phoneReg, 'must be only digits')
    .min(10, 'Enter 10 digits number')
    .max(10, 'Only 10 digits are required')
    .required('Please Enter your mobile number'),
});

function MyReactNativeForm(props) {
  // is form submitted or not using usestate
  const [isSubmitted, setIsSubmitted] = useState('false');

  return (
    <Formik
      initialValues={{fullName: '', email: '', password: '', mobileNumber: ''}}
      validationSchema={SignupSchema}
      onSubmit={(values, {resetForm}) => {
        console.log(JSON.stringify(values));
        resetForm({values: ''});
        props.navigation.navigate('Home');
      }}>
      {/* formik props */}
      {({
        errors,
        touched,
        setFieldTouched,
        isValid,
        handleChange,
        handleBlur,
        handleSubmit,
        values,
      }) => (
        // mainContainer

        <ImageBackground
          source={require('../Images/logingBg.jpg')}
          style={style.mainLoginContainer}>
          <View style={style.loginContainer}>
            <Text style={style.loginHeading}>Sign up</Text>
            <View style={style.loginInputWrapper}>
              <TextInput
                onChangeText={handleChange('fullName')}
                onBlur={() => setFieldTouched('fullName')}
                placeholder="Enter your full name"
                value={values.fullName}
                style={style.loginInputField}
              />
              {touched.fullName && errors.fullName && (
                <Text style={style.errorMsg}>{errors.fullName}</Text>
              )}
            </View>

            {/* email */}

            <View style={style.loginInputWrapper}>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                placeholder="Enter Email"
                value={values.email}
                style={style.loginInputField}
              />
              {touched.email && errors.email && (
                <Text style={style.errorMsg}>{errors.email}</Text>
              )}
            </View>

            {/* password */}

            <View style={style.loginInputWrapper}>
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                placeholder="Enter Password"
                value={values.password}
                secureTextEntry={true}
                style={style.loginInputField}
              />
              {touched.password && errors.password && (
                <Text style={style.errorMsg}>{errors.password}</Text>
              )}
            </View>

            {/* mobile Number */}

            <View style={style.loginInputWrapper}>
              <TextInput
                onChangeText={handleChange('mobileNumber')}
                onBlur={() => setFieldTouched('mobileNumber')}
                placeholder="Enter mobile Number"
                value={values.mobileNumber}
                keyboardType="phone-pad"
                style={style.loginInputField}
              />
              {touched.mobileNumber && errors.mobileNumber && (
                <Text style={style.errorMsg}>{errors.mobileNumber}</Text>
              )}
            </View>

            {/* submit */}

            <TouchableOpacity style={style.loginButton}>
              <Text
                style={[
                  style.loginButtonText,
                  {backgroundColor: isValid ? 'blue' : 'grey'},
                ]}
                onPress={handleSubmit}
                disabled={!isValid}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      )}
    </Formik>
  );
}

export default MyReactNativeForm;
