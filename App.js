import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.text}>Hallo,Nama Saya Najwa Risya</Text>

      {/* Kontainer untuk kotak dengan FlexBox */}
      <View style={styles.boxContainer}>
        <View style={[styles.box, { backgroundColor: 'pink' }]} />
        <View style={[styles.box, { backgroundColor: 'purple' }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3', // Latar belakang abu-abu terang
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 200, // Jarak antara teks dan kotak
  },
  boxContainer: {
    flexDirection: 'row', // Tata letak horizontal
    justifyContent: 'space-between', // Jarak merata antara kotak
    width: '80%', // Lebar kontainer kotak
  },
  box: {
    width: 100,
    height: 100,
  },
});
