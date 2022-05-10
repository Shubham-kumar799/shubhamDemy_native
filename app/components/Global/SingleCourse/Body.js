//utils
import React from 'react';
import { currencyFormatter } from '../../../utils/helpers';
import { staticTheme } from '../../../config/theme';

//components
import { StyleSheet, View, ScrollView } from 'react-native';
import {
  Title,
  Subheading,
  Divider,
  Text,
  withTheme,
} from 'react-native-paper';
import Markdown from 'react-native-simple-markdown';

const Body = ({
  title,
  price,
  paid,
  instructor,
  description,
  createdAt,
  updatedAt,
  theme,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Title>{title}</Title>
          <View style={styles.subContainer}>
            <Text>Instructor: </Text>
            <Subheading style={styles.instructorName}>
              {instructor.username}
            </Subheading>
          </View>
          <View style={styles.subContainer}>
            <Text>CreatedAt: </Text>
            <Subheading style={styles.fieldValue}>
              {new Date(createdAt).toDateString()}
            </Subheading>
          </View>
          <View style={styles.subContainer}>
            <Text>Last UpdatedAt: </Text>
            <Subheading style={styles.fieldValue}>
              {new Date(updatedAt).toDateString()}
            </Subheading>
          </View>
          {paid ? (
            <View style={styles.subContainer}>
              <Text>Price: </Text>
              <Subheading style={styles.priceValue}>
                Rs.{' '}
                {currencyFormatter({
                  amount: price,
                  currency: 'inr',
                })}
              </Subheading>
            </View>
          ) : (
            <Title style={{ color: theme.colors.accent }}>FREE</Title>
          )}

          <Title style={styles.learn}>What You Will Learn</Title>
          <Divider />
          <Markdown>{description}</Markdown>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: staticTheme.sizes['2xs'],
    flex: 1,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  instructorName: {
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    fontWeight: staticTheme.fontWeights.bold,
    color: staticTheme.colors.primary,
  },
  learn: {
    alignSelf: 'center',
  },
  fieldValue: {
    fontWeight: staticTheme.fontWeights.bold,
  },
  priceValue: {
    fontWeight: staticTheme.fontWeights.bold,
    textDecorationLine: 'underline',
  },
});

export default withTheme(Body);
