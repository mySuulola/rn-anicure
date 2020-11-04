import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Dialog, Portal, Title} from 'react-native-paper';
import FormInput from '../components/FormInput';
import {connect} from 'react-redux';
import {updateNextOfKin} from '../store/actions/userAction';

const UpdateNextOfKin = ({
  isNextOfKinVisible,
  setIsNextOfKin,
  nextOfKin,
  updateNextOfKin,
}) => {
  const [fullName, setFullName] = useState('homeAddress.value');
  const [address, setAddress] = useState('Lagos');
  const [email, setEmail] = useState('osdaf@fad.com');
  const [phoneNumber, setPhoneNumber] = useState('823932478932798');
  const [relationship, setRelationship] = useState('Spouse');



  const handleNextOfKinUpdate = async () => {
 //   updateNextOfKin({label: 'Home address', value: address});
    return setIsNextOfKin(false);
  };

  return (
    <Portal>
      <Dialog
        visible={isNextOfKinVisible}
        onDismiss={() => setIsNextOfKin(false)}>
        <Dialog.Content>
          <Title>Next-of-Kin Details</Title>
          <FormInput
            labelName="Full Name"
            value={fullName}
            autoCapitalize="words"
            mode="outlined"
            onChangeText={text => setFullName(text)}
          />
          <FormInput
            labelName="Address"
            value={address}
            autoCapitalize="words"
            mode="outlined"
            multiline={true}
            numberOfLines={2}
            onChangeText={text => setAddress(text)}
          />
          <FormInput
            labelName="Email"
            keyboardType="email-address"
            value={email}
            mode="outlined"
            autoCapitalize="none"
            onChangeText={text => setEmail(text)}
          />
          <FormInput
            labelName="Phone"
            keyboardType="numeric"
            value={phoneNumber}
            mode="outlined"
            onChangeText={text => setPhoneNumber(text)}
          />
          <FormInput
            labelName="Relationship"
            keyboardType="email-address"
            value={relationship}
            mode="outlined"
            onChangeText={text => setRelationship(text)}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => setIsNextOfKin(false)}>Cancel</Button>
          <Button onPress={() => handleNextOfKinUpdate()}>Save</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const mapStateToProps = state => ({
  nextOfKin: state.user
});

export default connect(
  mapStateToProps,
  {updateNextOfKin},
)(UpdateNextOfKin);

const styles = StyleSheet.create({});
