//utils
import React from 'react';

//components
import { StyleSheet, View } from 'react-native';
import Header from './Header';
import CategoryScroller from '../CategoryScroller';
import TopTabs from './TopTabs';

const SingleCourseView = ({ course }) => {
  const {
    title,
    price,
    paid,
    description,
    lessons,
    category,
    image,
    createdAt,
    instructor,
    updatedAt,
  } = course;

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Header image={image} />
        <CategoryScroller data={category} />
      </View>
      <TopTabs
        title={title}
        description={description}
        createdAt={createdAt}
        updatedAt={updatedAt}
        instructor={instructor}
        price={price}
        paid={paid}
        lessons={lessons}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 0,
  },
});

export default SingleCourseView;
