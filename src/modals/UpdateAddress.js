import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Dialog, Portal} from 'react-native-paper';
import FormInput from '../components/FormInput';
import {connect} from 'react-redux';
import {updateHomeAddress} from '../store/actions/userAction';

const UpdateAddress = ({
  isAddressVisible,
  setIsAddressVisible,
  homeAddress,
  updateHomeAddress,
}) => {
  const [address, setAddress] = useState(homeAddress.value);
  const [city, setCity] = useState('Lagos');



  const handleAddressUpdate = async () => {
    updateHomeAddress({label: 'Home address', value: address});
    return setIsAddressVisible(false);
  };

  return (
    <Portal>
      <Dialog
        visible={isAddressVisible}
        onDismiss={() => setIsAddressVisible(false)}>
        <Dialog.Content>
          <FormInput
            labelName="Home Address"
            value={address}
            autoCapitalize="words"
            mode="outlined"
            onChangeText={text => setAddress(text)}
          />
          <FormInput
            labelName="Town/City"
            value={city}
            mode="outlined"
            autoCapitalize="words"
            onChangeText={text => setCity(text)}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => setIsAddressVisible(false)}>Cancel</Button>
          <Button onPress={() => handleAddressUpdate()}>Save</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const mapStateToProps = state => ({
  homeAddress: state.user.userDetail[6],
});

export default connect(
  mapStateToProps,
  {updateHomeAddress},
)(UpdateAddress);

const styles = StyleSheet.create({});
