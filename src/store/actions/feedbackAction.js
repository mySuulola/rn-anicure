import firestore from '@react-native-firebase/firestore';
const firestoreRef = firestore().collection('feedback');

export const submitFeedback = (feedback, email) => async (dispatch) => {
  try {
    console.log(email, feedback, '|||||||||||||||||||||')
 await  firestoreRef.doc(email).update({
      feedback: firestore.FieldValue.arrayUnion(feedback),
    });
    return;
  } catch (error) {
  try {
  await  firestoreRef.doc(email).set({
      feedback: firestore.FieldValue.arrayUnion(feedback),
    });
  } catch (error) {
    console.log(error, 'error second')
  }
    console.log('error first', error);
  }
};
