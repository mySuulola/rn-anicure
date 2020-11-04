import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Button, Dialog, Portal} from 'react-native-paper';
import FormInput from '../components/FormInput';
import {updateName} from '../store/actions/userAction';
import {connect} from 'react-redux';

const UpdateName = ({isNameVisible, setIsNameVisible, firstName, updateName}) => {
  const [name, setName] = useState(firstName.value);
  

  const handleNameUpdate = () => {
    updateName({label: 'First Name', value: name});
    return setIsNameVisible(false);
  };
  return (
    <Portal>
      <Dialog visible={isNameVisible} onDismiss={() => setIsNameVisible(false)}>
        <Dialog.Content>
          <FormInput
            labelName="First Name"
            value={name}
            autoCapitalize="words"
            mode="outlined"
            onChangeText={text => setName(text)}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => setIsNameVisible(false)}>Cancel</Button>
          <Button onPress={() => handleNameUpdate()}>Save</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const mapStateToProps = state =>{ 
  console.log(state.user.userDetail);
  console.log('state.user.userDetail');
  return ({
  firstName: state.user.userDetail[0],
})};

export default connect(
  mapStateToProps,
  {updateName},
)(UpdateName);

const styles = StyleSheet.create({});
