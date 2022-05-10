//utils
import React, { useEffect, useState } from 'react';
import { useApi } from '../../hooks';
import { staticTheme } from '../../config/theme';

//components
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Header, CourseList } from '../../components/Home';
import { Loader, AppError } from '../../components/Global';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [res, API, controller] = useApi({
    url: '/courses',
    method: 'get',
  });

  const fetchData = () => {
    setError();
    API({})
      .then(responseData => {
        setData(responseData);
      })
      .catch(err => {
        console.log('error in fetch badge data', err);
        setError(err);
      });
  };

  useEffect(() => {
    fetchData();

    return () => controller.abort();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.searchbarContainer}>
        <Searchbar
          placeholder="Search"
          onChangeText={query => setSearchQuery(query)}
          value={searchQuery}
        />
      </View>
      <View style={{ flex: 1 }}>
        {error ? (
          <AppError refresh={() => fetchData()} />
        ) : data ? (
          <CourseList courses={data} API={API} loading={res.loading} />
        ) : (
          <Loader />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: staticTheme.statusBarHeight,
    flex: 1,
  },
  searchbarContainer: {
    margin: staticTheme.sizes['2xs'],
  },
});

export default HomeScreen;
