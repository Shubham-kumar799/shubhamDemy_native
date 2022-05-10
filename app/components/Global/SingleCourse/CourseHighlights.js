//utils
import React from 'react';

//components
import { StyleSheet, View, ScrollView } from 'react-native';
import { List } from 'react-native-paper';

const CourseHighlights = props => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <List.Section>
          <List.Subheader>COURSE HIGHLIGHTS</List.Subheader>
          <List.Item
            title="56 hours on-demand video"
            left={() => <List.Icon icon="youtube-tv" />}
          />
          <List.Item
            title="543 articles"
            left={() => <List.Icon icon="text-box-outline" />}
          />
          <List.Item
            title="231 downloadable resources"
            left={() => <List.Icon icon="download-circle" />}
          />
          <List.Item
            title="23 exercises"
            left={() => <List.Icon icon="text-box-check" />}
          />
          <List.Item
            title="Full lifetime access"
            left={() => <List.Icon icon="infinity" />}
          />
          <List.Item
            title="Access on mobile and TV"
            left={() => <List.Icon icon="television" />}
          />
          <List.Item
            title="Assignments"
            left={() => <List.Icon icon="clipboard-text" />}
          />
          <List.Item
            title="Certificate of completion"
            left={() => <List.Icon icon="trophy-award" />}
          />
        </List.Section>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CourseHighlights;
