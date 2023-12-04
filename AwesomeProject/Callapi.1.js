import React from 'react';
import {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Linking} from 'react-native';
import {styles} from './Getdatatoya';

export function Callapi() {
  const jsonUrl =
    'https://script.google.com/macros/s/AKfycbzzjtgpIJZiBqUth7B9Kysm1YCuKEuwkxlcUGJ5ePMl0quOxBmYFLWIgGX_u3B86roIlQ/exec';
  const [isLoading, setLoading] = useState(true);
  const [dataUser, setDataUser] = useState({});
  const [refresh, setRefresh] = useState(false);
  //difungsikan untuk memanggil API
  useEffect(() => {
    //fetch untuk mengambil data dari API/tertentu dengan metode fetch
    fetch(jsonUrl)
      //then untuk mengubah data menjadi json
      .then(response => response.json())
      .then(json => {
        //console log
        console.log(json);
        setDataUser(json);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function refreshPage() {
    fetch(jsonUrl)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }
  // function deleteData(id) {
  //     //ketika menghapus berdasarkan id datanya
  //     fetch(jsonUrl + '/' + id, {
  //         method: 'DELETE',
  //     })
  //         .then((response) => response.json())
  //         .then((json) => {
  //             console.log(json);
  //             alert('Data terhapus');
  //             refreshPage();
  //         })
  // }
  return (
    <SafeAreaView>
      {isLoading ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <View>
          <FlatList
            data={dataUser}
            onRefresh={() => {
              refreshPage();
            }}
            refreshing={refresh}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity
                  accessibilityRole="button"
                  onPress={() => {
                    Linking.openURL(google.navigation);
                  }}
                />
                :q=${item.latitude}, ${item.longitude}) }} style=
                {styles.linkContainer}>
                <View style={styles.card}>
                  <View style={styles.avatar}>
                    <FontAwesome5
                      name={item.icon}
                      size={50}
                      color={item.color}
                    />
                  </View>
                  <View>
                    <Text style={styles.cardtitle}>{item.nama}</Text>
                    <Text style={styles.wrappedText}>
                      Deskripsi:{item.deskripsi}
                    </Text>
                    <Text>X:{item.latitude}</Text>
                    <Text>Y:{item.longitude}</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                    }}
                  >
                    <FontAwesome5 name="chevron-right" size={20} color="blue" />
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
      />
    </View>
  );
}
