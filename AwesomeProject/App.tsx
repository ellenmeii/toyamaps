import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const PageProfile = () => {
  const openLinkedInProfile = () => {
    Linking.openURL('https://www.linkedin.com/in/ellen-meiliandini');
  };

  const openGitHubProfile = () => {
    Linking.openURL('https://github.com/ellenmeii');
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://i.ibb.co/LrDgVhF/backgroundd.png' }}
        style={styles.backgroundImage}
      />

      <View style={styles.contentContainer}>
        <View style={styles.profileContainer}>
          <Image
    source={require('./assets/img/Ellen.png')}             style={styles.profileImage}
          />
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>Ellen Meiliandini</Text>
            <Text style={styles.jobTitle}>College Student</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.summaryText}>
          Greets! I am a fifth-semester student who enjoys learning new things and has a keen interest in Geographic Information Systems. I hope the Toyamaps application can be beneficial for the academic community of Gadjah Mada University.          </Text>
        </View>


        <View style={styles.socialMediaContainer}>
        <TouchableOpacity style={styles.socialMediaItem} onPress={openLinkedInProfile}>
          <Icon name="linkedin" size={30} color="#0077b5" />
          <Text style={styles.socialMediaText}>LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialMediaItem} onPress={openGitHubProfile}>
          <Icon name="github" size={30} color="#333" />
          <Text style={styles.socialMediaText}>GitHub</Text>
        </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f9f9f9',
  },
  backgroundImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#fff',
    marginTop: -50,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  profileTextContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 5,
    borderColor: '#fff',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  jobTitle: {
    fontSize: 18,
    color: '#555',
  },
  card: {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#eee',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  summaryText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'justify',
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  socialMediaItem: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },
  socialMediaText: {
    marginTop: 5,
    color: '#555',
  },
});

export default PageProfile;
