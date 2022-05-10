//utils
import React from 'react';
import { staticTheme } from '../../config/theme';

//components
import { StyleSheet, ScrollView } from 'react-native';
import { Chip } from 'react-native-paper';

const CategoryScroller = ({ data }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {data.map(c => (
        <Chip style={styles.categoryChip} mode={'outlined'} key={c}>
          {c}
        </Chip>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryChip: {
    margin: staticTheme.sizes['3xs'],
  },
});

export default CategoryScroller;
