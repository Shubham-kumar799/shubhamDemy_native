import React, { useState } from 'react';

//components
import { StyleSheet, View } from 'react-native';
import { Avatar, Text, IconButton, Title } from 'react-native-paper';

//utils
import { staticTheme } from '../../config/theme';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userSlice';
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import { manipulateAsync } from 'expo-image-manipulator';
import { uploadImage, uploadProfile } from '../../utils/helpers';

// icons
import { FontAwesome5 } from '@expo/vector-icons';

const UserProfileScreen = () => {
  const user = useSelector(selectUser);
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
      const base64Data = await manipulateAsync(result.uri, [], {
        base64: true,
        format: 'png',
      });
      uploadImage(base64Data.base64)
        .then(
          async result =>
            await uploadProfile({
              body: { userimage: result.payload },
              headers: {
                AUTH_TOKEN: user.token,
              },
            })
        )
        .catch(err => {
          console.log('error from secreen', err);
        });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <IconButton
          style={styles.userRole}
          icon={({ color, size }) => (
            <FontAwesome5 name="chalkboard-teacher" size={size} color={color} />
          )}
          color={staticTheme.colors.primary}
          size={20}
        />
        <Avatar.Image
          size={200}
          source={{
            uri: 'https://shubhamdemy-bucket.s3.us-east-2.amazonaws.com/IW9ZkkqTg3BHJGKFQzGuN.png',
          }}
        />

        <IconButton
          style={styles.imageUpload}
          icon="camera"
          color={staticTheme.colors.error}
          size={20}
          onPress={() => pickImage()}
        />
      </View>

      <View style={styles.secondContainer}>
        <Text style={styles.email}>{user.email}</Text>
        <View style={styles.aboutContainer}>
          <Title>About Me</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            dicta minima, magnam corrupti atque libero, possimus consectetur
            architecto doloribus aperiam accusantium, alias repellendus
            reprehenderit excepturi animi iste blanditiis commodi officiis?
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: staticTheme.sizes['xl'],
  },
  imageUpload: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  email: {
    alignSelf: 'center',
    fontSize: staticTheme.sizes['xl'],
  },
  aboutContainer: {
    marginTop: staticTheme.sizes['xl'],
    padding: staticTheme.sizes['sm'],
  },
  secondContainer: {
    marginTop: staticTheme.sizes['xl'],
  },
  userRole: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

export default UserProfileScreen;
