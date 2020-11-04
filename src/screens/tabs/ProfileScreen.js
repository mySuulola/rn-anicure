/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, ScrollView, Image, View, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Card, Title, Button, Menu, Appbar, Paragraph, Divider} from 'react-native-paper';
import {userLogout} from '../../store/actions/userAction';
import {connect} from 'react-redux';

const ProfileScreen = ({ userLogout, user}) => {
  console.log(user, '******8888')
  const [dropDownVisibility, setDropDownVisibility] = useState(false);
  return (
    <View style={styles.container}>
      <Appbar.Header
        style={{
          backgroundColor: '#228b22',
        }}>
        <Appbar.Content title={user.fullName} />
        <Menu
          visible={dropDownVisibility}
          onDismiss={() => setDropDownVisibility(false)}
          anchor={
            <Appbar.Action
              icon="dots-vertical"
              color="white"
              onPress={() => setDropDownVisibility(true)}
            />
          }>
          <Menu.Item onPress={() => userLogout()} title="Logout" />
        </Menu>
      </Appbar.Header>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 30,
          }}>
          {/* <Icon
            name="account"
            style={{
              backgroundColor: '#d0d0d0',
              padding: 10,
              borderRadius: 50,
            }}
            size={50}
            color="black"
          /> */}
           <Image
          style={styles.image}
          source={require('../../assets/img/notification.png')}
        />
        </View>
        <View style={styles.card}>
          <Title style={styles.cardTitle}>Full Name</Title>
          <Divider />
          <Paragraph style={styles.cardText}>{user.fullName}</Paragraph>
        </View>
        <View style={styles.card}>
          <Title style={styles.cardTitle}>Email Address</Title>
          <Divider />
          <Paragraph style={styles.cardText}>{user.email}</Paragraph>
        </View>
        <View style={styles.card}>
          <Title style={styles.cardTitle}>Phone Number</Title>
          <Divider />
          <Paragraph style={styles.cardText}>{user.phoneNumber}</Paragraph>
        </View>
        <View style={styles.card}>
          <Title style={styles.cardTitle}>Address</Title>
          <Divider />
          <Paragraph style={styles.cardText}>{user.address}</Paragraph>
        </View>
        <View style={styles.card}>
          <Title style={styles.cardTitle}>Plan</Title>
          <Divider />
          <Paragraph style={styles.cardText}>{user.plan}</Paragraph>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.userDetail.userDetail,
});

export default connect(mapStateToProps, {userLogout})(ProfileScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e3e3',
  },
  card: {
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 10,
    paddingVertical: 10,
  },
  cardTitle: {
    color: '#7e7e7e',
  },
  cardText: {
    // color: "#c2c2c2",
    marginTop: 10,
    fontSize: 17,
    textTransform: 'uppercase'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100
  }
});
