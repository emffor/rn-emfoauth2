import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { ProfileHeader } from '../../components/ProfileHeader';
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';

import { styles } from './styles';
import { theme } from '../../styles/theme';

export function Profile() {
  const navigation = useNavigation();

  async function handleLogout() {
    navigation.navigate('SignIn');
  }

  return (
    <View style={styles.container}>
      <ProfileHeader />

      <View style={styles.content}>
        <View style={styles.profile}>
          <Avatar
            source={{ uri: 'https://github.com/emffor.png' }}
          />

          <Text style={styles.name}>
            Eloan Ferreira
          </Text>

          <View style={styles.email}>
            <Feather name="mail" color={theme.colors.secondary} size={18} />
            <Text style={styles.emailText}>
                emfeloan@gmail.com
            </Text>
          </View>
        </View>

        <View style={styles.about}>
          <View style={styles.info}>
            <Feather
              name="user"
              size={34}
              color={theme.colors.note}
            />
            <Text style={styles.label}>
              First name
            </Text>
            <Text style={styles.text}>
              Eloan
            </Text>
          </View>

          <View style={styles.info}>
            <Feather
              name="aperture"
              size={34}
              color={theme.colors.note}
            />
            <Text style={styles.label}>
              Last name
            </Text>
            <Text style={styles.text}>
              Ferreira
            </Text>
          </View>
        </View>

        <View style={styles.locale}>
          <Feather
            name="map"
            size={18}
            color={theme.colors.note}
          />

          <Text style={styles.localeText}>
            User profile location: Brazil
          </Text>
        </View>

        <Button
          title="Logout App"
          icon="poweroff"
          onPress={handleLogout}
        />
      </View>
    </View>
  );
}