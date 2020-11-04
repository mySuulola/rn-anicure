import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {Appbar, Avatar, Card, Button, Paragraph} from 'react-native-paper';
import {connect} from 'react-redux';
import DashboardItem from '../../components/DashboardItem';
import {deleteVaccine} from '../../store/actions/vaccineAction';
const {height, width} = Dimensions.get('window');

const VaccinationDetailScreen = ({route, navigation, deleteVaccine}) => {
  let {
    detail,
    backgroundColor,
    status,
    nextVaccinationType,
    nextDate,
    isMedication,
  } = route.params;

  console.log(detail.schedule[0]);
  return (
    <View style={styles.container}>
      <Appbar.Header
        dark={true}
        style={{
          backgroundColor,
          marginVertical: 5,
        }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content
          title={detail.planName.toUpperCase()}
          subtitle={'Status: ' + status}
        />
      </Appbar.Header>
      <View style={{padding: 10}}>
        <Card
          style={{
            height: 240,
          }}>
          <ImageBackground
            style={{
              height: '100%',
            }}
            imageStyle={{borderRadius: 20}}
            source={require('../../assets/img/bird.jpeg')}>
            <Card.Title
              subtitleStyle={styles.textWhite}
              titleStyle={styles.textWhite}
              title={'Plan Name: ' + detail.planName}
              subtitle={detail.animalType}
              left={(props) => (
                <Avatar.Icon {...props} icon="alpha-p-circle-outline" />
              )}
            />
            <Card.Content>
              <Paragraph style={styles.textWhite}>
                Age Started: {detail.initialAgeOfBird}
              </Paragraph>
              <Paragraph style={styles.textWhite}>
                Next {isMedication ? ' Medication' : ' Vaccination'}:{' '}
                {nextVaccinationType}
              </Paragraph>
              <Paragraph style={styles.textWhite}>
                Next {isMedication ? ' Medication' : ' Vaccination'} Date:{' '}
                {nextDate}
              </Paragraph>
              <Paragraph style={styles.textWhite}>
                Plan Name: {detail.planName}
              </Paragraph>
              <Paragraph style={styles.textWhite}>
                Alarm Set: {detail.vaccinationReminder.alarm ? 'True' : 'False'}
              </Paragraph>
              <Paragraph style={styles.textWhite}>
                SMS Set: {detail.vaccinationReminder.sms ? 'True' : 'False'}
              </Paragraph>
            </Card.Content>
          </ImageBackground>
          {/* <View
            style={{
              ...StyleSheet.absoluteFillObject,
              borderRadius: 20,
              backgroundColor: 'rgba(69,85,117,0.2)',
            }}></View> */}
        </Card>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {detail.schedule.map((item) => (
          <DashboardItem
            key={item.day}
            backgroundColor={backgroundColor}
            time={`Day ${item.day}`}
            text={item.nextVaccinationType}
            onPress={() => navigation.navigate('Feedback', {
              detail: item,
            })}
            icon="book"
          />
        ))}
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          top: height - 115,
          bottom: 0,
          right: 0,
          left: 0,
        }}>
        <Card>
          <Card.Actions
            style={{
              justifyContent: 'space-between',
            }}>
            <Button
              onPress={() => {
                navigation.navigate('Schedule', {
                  detail: detail.schedule,
                });
              }}>
              View Full Schedule
            </Button>
            <Button
              onPress={() => {
                deleteVaccine(detail.id);
                navigation.goBack();
              }}>
              Delete Plan
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </View>
  );
};

export default connect(null, {deleteVaccine})(VaccinationDetailScreen);

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    minHeight: height - 125,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  textWhite: {
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: '#e3e3e3',
    textShadowRadius: 3,
    // fontSize: 1
  },
});
