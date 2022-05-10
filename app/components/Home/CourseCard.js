//utils
import React from 'react';
import { staticTheme } from '../../config/theme';
import { currencyFormatter } from '../../utils/helpers';
import { useNavigation } from '@react-navigation/native';

//components
import {
  Button,
  Card,
  Paragraph,
  Chip,
  Text,
  withTheme,
} from 'react-native-paper';
import { StyleSheet, View, ScrollView } from 'react-native';
import { CategoryScroller } from '../Global';

const Price = ({ price, paid, theme, ...rest }) => {
  return (
    <View style={styles.priceContainer} {...rest}>
      {paid ? (
        <Paragraph style={styles.price}>
          Rs.{' '}
          {currencyFormatter({
            amount: price,
            currency: 'inr',
          })}
        </Paragraph>
      ) : (
        <Text style={{ color: theme.colors.accent, ...styles.price }}>
          FREE
        </Text>
      )}
    </View>
  );
};

const CourseCard = ({ course, theme }) => {
  const {
    image,
    title,
    price,
    paid,
    category,
    instructor: { username },
  } = course;
  const navigation = useNavigation();

  return (
    <Card style={styles.container}>
      <Card.Title
        title={title}
        subtitle={
          <Text>
            Instructor: <Text style={styles.instructorName}>{username}</Text>
          </Text>
        }
      />
      <Card.Content>
        <Price price={price} paid={paid} theme={theme} />
        <CategoryScroller data={category} />
      </Card.Content>
      <Card.Cover
        resizeMode="stretch"
        style={styles.image}
        source={{ uri: image?.Location }}
      />
      <Card.Actions style={styles.action}>
        <Button
          onPress={() =>
            navigation.navigate('SingleCourseScreen', { slug: course.slug })
          }
        >
          Go To Course
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  action: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  instructorName: {
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  container: {
    margin: staticTheme.sizes.xs,
    elevation: 5,
  },
  image: {
    resizeMode: 'contain',
  },
  priceContainer: {
    flexDirection: 'row',
    fontWeight: 'bold',
  },
  price: {
    fontWeight: staticTheme.fontWeights.bold,
  },
});
export default withTheme(CourseCard);
