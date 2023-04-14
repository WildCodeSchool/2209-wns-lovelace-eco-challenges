import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/icons/maison.png')} style={styles.homeIcon} />
      <View style={styles.profileContainer}>
        <Image source={require('../../../assets/icons/visagehomme.png')} style={styles.profilePic} />
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileButtonText}>Modifier le profil</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.firstName}>John</Text>
        <Text style={styles.lastName}>Doe</Text>
      </View>
      <View style={styles.notificationsContainer}>
        <Text style={styles.notificationsText}>Notifications</Text>
        <View style={styles.notificationContainer}>
          <Image source={require('../../../assets/icons/createChallenge.png')} style={styles.notificationIcon} />
          <Text style={styles.notificationMessage}>Nouveau challenge créé</Text>
        </View>
        <View style={styles.notificationContainer}>
          <Image source={require('../../../assets/icons/exclamation.png')} style={styles.notificationIcon} />
          <Text style={styles.notificationMessage}>Nouvelle invitation d'ami</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#3B8574',
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  homeIcon: {
    width: 24,
    height: 24,
    tintColor: '#3B8574',
    alignSelf: 'flex-end',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 16,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  editProfileButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  editProfileButtonText: {
    color: '#3B8574',
    fontSize: 14,
    fontWeight: 'bold',
  },
  nameContainer: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  firstName: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 8,
  },
  lastName: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  notificationsContainer: {
    flex: 1,
  },
  notificationsText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  notificationIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
    color: 'black',
  },
  notificationMessage: {
    color: 'black',
    fontSize: 14,
  },
});

export default ProfilePage;
