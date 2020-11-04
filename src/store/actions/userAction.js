import {
  USER_AUTHENTICATION,
  AUTH_ERROR_CLEAR,
  USER_LOGOUT,
  REGISTER_USER,
  AUTH_ERROR,
  UPDATE_USER_PLAN,
} from '../constant';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const usersCollection = firestore().collection('users');

export const clearError = () => (dispatch) => {
  dispatch({
    type: AUTH_ERROR_CLEAR,
  });
};
export const userLogin = (credentials) => async (dispatch) => {
  try {
    console.log('cred ', credentials);
    const request = await auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password,
    );
    console.log(request, 'request');
    const user = await usersCollection.doc(request.user.uid).get();
    dispatch({
      type: USER_AUTHENTICATION,
      payload: {...user._data, uid: request.user.uid},
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error,
    });
  }
};

export const updateUser = (uid, plan) => async (dispatch) => {
  console.log(uid, plan)
  try {
    await firestore().collection('users').doc(uid).update({
      plan: plan,
    });
    dispatch({
      type: UPDATE_USER_PLAN,
      payload: {plan: plan},
    });
  } catch (error) {
    console.log(error, '********');
  }
};

export const userRegister = (newUser) => (dispatch) => {
  auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then(async (resp) => {
      await firestore().collection('users').doc(resp.user.uid).set({
        fullName: newUser.fullName,
        phoneNumber: newUser.phoneNumber,
        address: newUser.address,
        email: newUser.email,
        plan: 'basic',
        registrationDate: new Date().toDateString(),
      });
      return dispatch({
        type: REGISTER_USER,
        payload: {...newUser, uid: resp.user.uid, plan: 'basic'},
      });
    })
    .catch((err) => {
      dispatch({
        type: AUTH_ERROR,
        payload: err,
      });
    });
};

export const userLogout = () => (dispatch) => {
  auth()
    .signOut()
    .then(() => {
      dispatch({type: USER_LOGOUT});
    });
};
