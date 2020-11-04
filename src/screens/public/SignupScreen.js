import React, {useState} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Text,
  View,
  Dimensions,
} from 'react-native';
import {Title, Snackbar} from 'react-native-paper';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import TextButton from '../../components/TextButton';
import {connect} from 'react-redux';
import {userRegister} from '../../store/actions/userAction';

const {height} = Dimensions.get('screen');

const SignupScreen = ({navigation, userRegister}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const [errorMessage, setErrorMessage] = useState('');
  const [visible, setVisible] = React.useState(false);
  const onDismissSnackBar = () => setVisible(false);

  const handleRegister = async () => {
    if (password === '' || email == '' || fullName == '' || phoneNumber == '') {
      setErrorMessage('All fields are required');
      setVisible(!visible);
      return;
    }

    var filter = /\S+@\S+\.\S+/;
    if (!filter.test(email)) {
      setErrorMessage('Please input a valid email address!');
      setVisible(!visible);
      return;
    }

    if (phoneNumber.length !== 11) {
      setErrorMessage('Enter a valid 11 digit mobile number');
      setVisible(!visible);
      return;
    }

    if (password.length !== 6) {
      setErrorMessage('PIN must be 6 digits');
      setVisible(!visible);
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('PIN do not match');
      setVisible(!visible);
      return;
    }

    await setIsLoading(true);
    console.log('okay...');
    const newUser = {
      email,
      password,
      fullName,
      address,
      phoneNumber,
    };
    const resp = await userRegister(newUser);
    console.log(resp, '**********??????????????');
    setIsLoading(false);
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* <Image style={styles.image} source={require('../assets/img/login.png')} /> */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            // alignItems:"center"
          }}>
          <Title style={styles.titleText}>Create Account</Title>
          <Text
            style={{
              fontSize: 15,
              color: 'rgba(170, 170, 170, 0.9)',
            }}>
            Sign up to get started!
          </Text>
          <FormInput
            labelName="Full Name"
            value={fullName}
            autoCapitalize="words"
            onChangeText={(userFullName) => setFullName(userFullName)}
          />
          <FormInput
            labelName="Email"
            value={email}
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={(userEmail) => setEmail(userEmail)}
          />
          <FormInput
            labelName="Phone number"
            value={phoneNumber}
            maxLength={11}
            autoCapitalize="none"
            keyboardType="numeric"
            onChangeText={(phone) => setPhoneNumber(phone)}
          />
          <FormInput
            labelName="Address"
            value={address}
            autoCapitalize="none"
            onChangeText={(place) => setAddress(place)}
          />
          <FormInput
            labelName="Enter 6 Digit PIN"
            value={password}
            maxLength={6}
            secureTextEntry={true}
            keyboardType="numeric"
            onChangeText={(userPassword) => setPassword(userPassword)}
          />
          <FormInput
            labelName="Confirm PIN"
            value={confirmPassword}
            maxLength={6}
            secureTextEntry={true}
            keyboardType="numeric"
            onChangeText={(confirmUserPass) =>
              setConfirmPassword(confirmUserPass)
            }
          />
          {isLoading === true ? (
            <ActivityIndicator color="#228b22" size="large" />
          ) : (
            <FormButton
              title="Register"
              modeValue="contained"
              labelStyle={styles.loginButtonLabel}
              onPress={handleRegister}
            />
          )}
        </View>

        <View style={{flex: 1, alignItems: 'center'}}>
          <FormButton
            title="Login instead.."
            modeValue="text"
            uppercase={false}
            labelStyle={styles.navButtonText}
            onPress={() => navigation.goBack()}
          />
          <TextButton
            onPress={() => navigation.navigate('Tips')}
            text="Click here to get Helpful Tips to protect your birds.."
          />
          {/* <FormButton
        title=""
        modeValue="text"
        uppercase={false}
        labelStyle={styles.navButtonText}
        onPress={() => navigation.goBack()}
      /> */}
        </View>
      </ScrollView>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Close',
          onPress: () => {
            // Do something
          },
        }}>
        {errorMessage}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  scrollView: {
    //flex: 1,
    minHeight: height - 90,
    alignItems: 'center',
    justifyContent: 'space-between',
    //    borderWidth: 1,
    //  borderColor: 'red'
  },
  image: {
    width: 170,
    height: 170,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '900',
  },
  loginButtonLabel: {
    fontSize: 22,
  },
  navButtonText: {
    fontSize: 16,
  },
});

export default connect(null, {userRegister})(SignupScreen);
