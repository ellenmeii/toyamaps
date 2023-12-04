import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Button,
  Alert,
  Linking,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {SafeAreaView} from 'react-native-safe-area-context';

function Callapi() {
  const jsonUrl =
    'https://script.google.com/macros/s/AKfycbzzjtgpIJZiBqUth7B9Kysm1YCuKEuwkxlcUGJ5ePMl0quOxBmYFLWIgGX_u3B86roIlQ/exec';
  const [isLoading, setLoading] = useState(true);
  const [dataUser, setDataUser] = useState({});
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(jsonUrl)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  const refreshPage = () => {
    fetchData();
    setRefresh(false);
  };

  return (
    <SafeAreaView style={styles.bekgron}>
      {isLoading ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <View>
          <View style={[styles.header, {backgroundColor: '#FEFEFA'}]}>
            <Text style={[styles.headerText, {fontFamily: 'PoppinsSemiBold'}]}>
              ToyaMaps
            </Text>
          </View>
          <FlatList
            data={dataUser}
            onRefresh={refreshPage}
            refreshing={refresh}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <TouchableOpacity
                accessibilityRole="button"
                onPress={() => {
                  Linking.openURL(
                    `google.navigation:q=${item.latitude},${item.longitude}`,
                  );
                }}
                style={styles.linkContainer}
              >
                <View style={styles.card}>
                  <View style={styles.avatar}>
                    <FontAwesome5 name="tint" size={50} color="#2391d9" />
                  </View>
                  <View
                    style={{flex: 1, flexDirection: 'column', marginLeft: 10}}
                  >
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={[
                          styles.cardtitle,
                          {marginBottom: 8, flex: 1, maxWidth: 200},
                        ]}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                      >
                        {item.nama}
                      </Text>
                      <FontAwesome5
                        name="directions"
                        size={20}
                        color="#6ab0dd"
                      />
                    </View>
                    <Text style={styles.deskripsi}>Jenis: {item.jenis}</Text>
                    <Text style={styles.deskripsi}>
                      Koordinat X:{item.latitude}
                    </Text>
                    <Text style={styles.deskripsi}>
                      Koordinat Y:{item.longitude}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

export default Callapi;
const styles = StyleSheet.create({
  header: {
    paddingVertical: 12,
    backgroundColor: '#97d2e5',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(10px)', // Glassmorphism blur effect
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2391d9',
  },
  bekgron: {
    backgroundColor: '#e0e0e0',
    backdropFilter: 'blur(10px)', // Glassmorphism blur effect
  },
  title: {
    paddingVertical: 15,
    backgroundColor: '#97d2e5',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  avatar: {
    borderRadius: 100,
    width: 80,
    marginLeft: 10,
    marginTop: 10,
  },
  cardtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f0f0f0',
  },
  deskripsi: {
    fontSize: 14,
    color: '#f0f0f0',
  },
  card: {
    flexDirection: 'row',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#1f1f1f',
    shadowColor: '#2391d9',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginHorizontal: 20,
    marginVertical: 7,
    backdropFilter: 'blur(10px)', // Glassmorphism blur effect
  },
  button: {
    marginVertical: 10,
  },
});
