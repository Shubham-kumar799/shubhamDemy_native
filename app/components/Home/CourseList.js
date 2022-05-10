import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CourseCard from './CourseCard';

const CourseList = ({ courses, API, loading }) => {
  return (
    <FlatList
      onRefresh={() => API({})}
      refreshing={loading}
      data={courses}
      renderItem={({ item }) => <CourseCard course={item} />}
      keyExtractor={item => item._id}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CourseList;
