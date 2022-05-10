//utils
import React from 'react';

//components
import { StyleSheet, View } from 'react-native';
import Body from './Body';

const SingleCourseViewDescription = ({ route }) => {
  const { title, description, createdAt, updatedAt, instructor, price, paid } =
    route.params;
  return (
    <View style={styles.container}>
      <Body
        title={title}
        description={description}
        createdAt={createdAt}
        updatedAt={updatedAt}
        instructor={instructor}
        price={price}
        paid={paid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SingleCourseViewDescription;
