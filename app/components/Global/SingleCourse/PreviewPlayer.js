//utils
import React, { useState, useRef } from 'react';
import { staticTheme } from '../../../config/theme';

//components
import { StyleSheet, View } from 'react-native';
import { Text, ActivityIndicator } from 'react-native-paper';
import { Video } from 'expo-av';

const PreviewPlayer = ({ preview, title }) => {
  const videoRef = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {(!status || !status.isLoaded) && (
        <ActivityIndicator style={styles.activityIndicator} />
      )}
      <Video
        ref={videoRef}
        style={styles.video}
        source={{
          uri: preview.Location,
        }}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  video: {
    height: 300,
    width: '100%',
  },
  title: {
    fontWeight: staticTheme.fontWeights.bold,
  },
  activityIndicator: {
    position: 'absolute',
    bottom: '40%',
    zIndex: 10,
  },
});

export default PreviewPlayer;
