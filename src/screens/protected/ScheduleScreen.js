import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, View, Dimensions} from 'react-native';
import {DataTable, Appbar, Paragraph} from 'react-native-paper';
import dayjs from 'dayjs';

const {height, width} = Dimensions.get('screen');

const ScheduleScreen = ({route, navigation}) => {
  const {detail} = route.params;

  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    setSchedule(detail);
  }, []);

  console.log(schedule);
  return (
    <View style={styles.container}>
      <Appbar.Header
        style={{
          backgroundColor: '#228b22',
        }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Complete Schedule" />
      </Appbar.Header>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Vaccination Detail</DataTable.Title>
        </DataTable.Header>
      </DataTable>

      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: 20,
          marginTop: 10,
          marginBottom: 50,
          textAlign: 'justify',
        }}>
        {schedule.map((item, i) => (
          <View
            style={{
              borderBottomWidth: 1,
              flexDirection: 'row',
              paddingVertical: 15,
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
            key={`${i}`}>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Paragraph
                  style={{
                    fontWeight: 'bold',
                  }}>
                  Time: {''}
                </Paragraph>
                <Paragraph>Day {item.day}</Paragraph>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Paragraph
                  style={{
                    fontWeight: 'bold',
                  }}>
                  {item.isMedication ? 'Medication' : 'Vaccination'}: {''}
                </Paragraph>
                <Paragraph>{item.nextVaccinationType}</Paragraph>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Paragraph
                  style={{
                    fontWeight: 'bold',
                  }}>
                  {item.isMedication ? 'Medication' : 'Vaccination'} Date: {''}
                </Paragraph>
                <Paragraph>
                  {dayjs(item.nextVaccinationDate)
                    .add(1, 'day')
                    .format('dddd DD/MM/YYYY')}
                </Paragraph>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Paragraph
                  style={{
                    fontWeight: 'bold',
                  }}>
                  Route: {''}
                </Paragraph>
                <Paragraph>{item.routeOfAdministration}</Paragraph>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                minWidth: 200,
              }}></View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ScheduleScreen;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    minHeight: height - 90,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  icon: {
    padding: 3,
  },
});
