import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
  View,
  Image,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Title } from 'react-native-paper';

const {height, width} = Dimensions.get('screen');

const slides = [
  {
    key: 'Speak to a Vet doctor',
    title: 'Speak to a Vet doctor',
    text: `Consult a vet doctor online with at very affordable service charge. We give your livestock the best primary veterinary care`,
    image: require('../../assets/img/questions.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'Vaccination tracker',
    title: 'Vaccination tracker',
    text: `Our vaccination tracker helps you administer vaccines to your birds safely and effectively`,
    image: require('../../assets/img/nature.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'Access health tips',
    title: 'Automated Vaccination Reminder',
    text: `Get free useful health tips to protect your farms against diseases.`,
    image: require('../../assets/img/reminder.png'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 'Order for vaccination',
    title: 'Order for vaccination',
    text: `Get on-farm delivery of vaccination to your livestock with just a click.`,
    image: require('../../assets/img/order.png'),
    backgroundColor: '#22bcb5',
  },
];

const AppIntro = ({navigation}) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    navigation.navigate("Login")
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.slide}>
          <Text style={styles.title}>{item.title}</Text>
          <Image style={styles.image} source={item.image} />
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const renderDoneButton = () => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
      }}>
      <TouchableOpacity
        onPress={onDone}
        style={{
          paddingHorizontal: 20,
          marginTop: 20,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 17,
          }}>
          Done
        </Text>
      </TouchableOpacity>
    </View>
  );

  if (showRealApp) {
    return <View><Text>hi</Text></View>

  } else {
    return (
      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        renderDoneButton={renderDoneButton}
        showSkipButton={true}
        onSkip={() => navigation.navigate("Login")}
        renderSkipButton={() => <View>
          <Title style={{
            color: 'red',
            fontWeight: '900',
          }} >Skip</Title>
        </View>}
        renderNextButton={() => <View>
          <Title style={{
            color: 'black',
            fontWeight: 'bold'
          }} >Next</Title>
        </View>}
      />
    );
  }
};

export default AppIntro;

const styles = StyleSheet.create({
  slide: {
    minHeight: height,
    padding: 20,
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 27,
    marginVertical: 20,
    textAlign: 'center',
    paddingHorizontal: 20

  },
  image: {
    marginBottom: 20,
    width: width - 50,
    height: height / 2,
  },
  text: {
    marginVertical: 20,
    textAlign: 'center',
  },
});
