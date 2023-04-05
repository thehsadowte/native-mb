import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Button,
  ActivityIndicator,
} from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';

//import {getItemFromAsyncStorage, mergeItemInAsyncStorage, deleteItemFromAsyncStorage} from './AsyncStorageMethods'

export default function Homepage({ userData, setUserData }) {
  const navigation = useNavigation();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch('https://moduleblocks.net/testing/Users.json')
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>Name: {item.name}</Text>
      <Text>Email: {item.email}</Text>
      <Text>Phone: {item.phone}</Text>
      <Text>Website: {item.website}</Text>
    </View>
  );

  const renderFooter = () => {
    if (!loading) return null;

    return (
      <View style={{ paddingVertical: 20 }}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  const getItemLayout = (data, index) => ({
    length: 100,
    offset: 100 * index,
    index,
  });

  const filteredUsers = users.slice(0, page * 8);

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <View style={styles.homeView}>
          <FlatList
            style={styles.text}
            data={filteredUsers}
            renderItem={renderItem}
            keyExtractor={(item) => item._id.toString()}
            ListFooterComponent={renderFooter}
            getItemLayout={getItemLayout}
          />
          {filteredUsers.length < users.length && (
            <Button
              style={styles.loadMoreBtn}
              title="Load more"
              onPress={handleLoadMore}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    padding: 0,
    paddingTop: 44,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeView: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'left',
  },
  text: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 28,
  },
  loadMoreBtn: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
  },
});
