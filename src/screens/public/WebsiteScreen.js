import React, {useState} from 'react';
import {StyleSheet, ActivityIndicator, View, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import { Title } from 'react-native-paper';

const WebsiteScreen = () => {

  const [error, setError] = useState(false);

  return (
    <View style={styles.container}>
    { error ? <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Title>Network Error</Title>
      <Text>Something went wrong. Please try again later</Text>
      
    </View> :   <WebView
          source={{
            uri: 'https://evetafrica.com/',
          }}
          renderLoading={() =>  {return <ActivityIndicator 
            size="large" 
            style = {{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              alignItems: 'center',
              justifyContent: 'center'}}
            color="red" />}}
            onError={(err) => setError(true)}
          startInLoadingState           
        />}
    </View>
  );
};

export default WebsiteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
