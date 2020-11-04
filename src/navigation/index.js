import React from 'react';
import Routes from './Routes';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import UserTab from './UserTab';
import {connect} from 'react-redux';

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'Roboto',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'Roboto',
      fontWeight: '500',
    },
    light: {
      fontFamily: 'Roboto',
      fontWeight: '300',
    },
    thin: {
      fontFamily: 'Roboto',
      fontWeight: '100',
    },
  },
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
};

const Providers = ({isLoggedIn}) => {
  return (
    <PaperProvider theme={theme}>
      {isLoggedIn ? <UserTab /> : <Routes />}
    </PaperProvider>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.user.loggedIn,
});

export default connect(
  mapStateToProps,
  null,
)(Providers);
