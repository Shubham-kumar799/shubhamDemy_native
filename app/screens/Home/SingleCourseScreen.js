import React, { useEffect, useState } from 'react';

//utils
import { useApi } from '../../hooks';

//components
import { StyleSheet, View } from 'react-native';
import { Loader, NoDataError, SingleCourseView } from '../../components/Global';

const SingleCourseScreen = ({ route }) => {
  const { slug } = route.params;
  const [data, setData] = useState();
  const [res, API, controller] = useApi({
    url: `/course/${slug}`,
    method: 'get',
  });

  const fetchData = () => {
    API({})
      .then(responseData => {
        setData(responseData);
      })
      .catch(err => {
        console.log('error in fetch badge data', err);
      });
  };

  useEffect(() => {
    fetchData();

    return () => controller.abort();
  }, [slug]);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        {data ? (
          <SingleCourseView course={data} />
        ) : res.error ? (
          <NoDataError />
        ) : (
          <Loader />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SingleCourseScreen;
