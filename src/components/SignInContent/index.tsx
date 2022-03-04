import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import LogoSvg from '../../assets/logo.svg';

export function SignInContent() {
  return (
    <View style={styles.container}>
      <LogoSvg height={300} width={300} />

      <View style={styles.content}>
        <Text style={styles.title}>
          OAuth2
        </Text>

        <Text style={styles.subtitle}>
          Login with google account {'\n'}
          easily and quickly.
        </Text>

        <Text style={styles.description}>
        Implementation concepts with OAuth2, login with a google social 
          account using the OAuth2 pattern.
        </Text>
      </View>
    </View>
  );
}