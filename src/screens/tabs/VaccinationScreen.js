import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import {List, FAB, Title, Appbar} from 'react-native-paper';
import {connect} from 'react-redux';
import dayjs from 'dayjs';

const VaccinationScreen = ({navigation, vaccines}) => {
  const VaccinationItem = ({item}) => {
    const {schedule} = item;
    const ab = schedule.find(
      (vacc) => new Date(vacc.nextVaccinationDate).toDateString() >= new Date().toDateString(),
    );
    // console.log(ab)
    // console.log(schedule[0].nextVaccinationDate)
    // console.log(new Date(schedule[0].nextVaccinationDate).toDateString() >= new Date().toDateString())
    let nextDate = ab
      ? dayjs(ab.nextVaccinationDate).add(1, 'day').format('dddd DD/MM/YYYY')
      : ''; //;
    let nextVaccinationType = ab
      ? ab.nextVaccinationType
      : 'Vaccination Completed.';
    let backgroundColor =
      ab === undefined
        ? 'rgba(247, 165, 165, 0.7)'
        : new Date(dayjs(schedule[0].nextVaccinationDate).add(1, 'day')) <=
          new Date()
        ? 'rgba(34, 139, 34, 0.7);'
        : 'rgba(24, 14, 210, 0.7);';
    let status =
      ab === undefined
        ? 'Plan Completed'
        : new Date(dayjs(schedule[0].nextVaccinationDate).add(1, 'day')) <= new Date()
        ? 'Started'
        : 'Pending';

    return (
      <List.Item
        title={item.planName}
        description={nextVaccinationType}
        left={(props) => <List.Icon {...props} icon="folder" color="#fff" />}
        right={() => (
          <Text
            style={{
              color: 'white',
            }}>
            {status + '\n' + nextDate}
          </Text>
        )}
        titleStyle={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20,
        }}
        descriptionStyle={{
          color: 'white',
        }}
        style={{
          minHeight: 100,
          paddingRight: 12,
          flex: 1,
          justifyContent: 'center',
          backgroundColor: backgroundColor,
          elevation: 7,
          margin: 10,
          borderRadius: 10,
        }}
        onPress={() =>
          navigation.navigate('VDetail', {
            detail: item,
            backgroundColor,
            status,
            nextVaccinationType,
            nextDate,
            isMedication: ab ? ab.isMedication : false,
          })
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <Appbar.Header
        style={{
          backgroundColor: '#228b22',
        }}>
        <Appbar.Content title="Vaccination Plans" />
      </Appbar.Header>

      {vaccines.length === 0 && (
        <View
          style={{
            marginTop: 20,
            alignItems: 'center',
          }}>
          <Title
            style={{
              fontSize: 15,
            }}>
            You have no Vaccination/Medication Plan yet
          </Title>
        </View>
      )}
      <FlatList
        data={vaccines}
        renderItem={({item}) => <VaccinationItem item={item} />}
        keyExtractor={(item, i) => `${item.planName}${i}`}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.push('VCreate')}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    vaccines: state.vaccine.allVaccines,
  };
};
export default connect(mapStateToProps, null)(VaccinationScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    backgroundColor: '#228b22',
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
