import React, {useState} from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export const Countnumber = () => {
    const [number, setNumber] = useState(0)

  return (
    <View>
    <Text style={styles.text}>{number}</Text>
    <View>
      <Button title="Tambah" onPress={() => setNumber( number + 1 )} />
    </View>
    <View>
      <Button title="Reset" onPress={() => setNumber( 0 )} color="red" />
    </View>
  </View>
 )
 
}

export default Countnumber

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    button: {
      margin: 10,
    },
    text: {
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 40,
    }
   })
   