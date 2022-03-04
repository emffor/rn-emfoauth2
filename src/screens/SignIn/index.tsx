import React from 'react';
import { View } from 'react-native';
import * as AuthSession from 'expo-auth-session';  
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { SignInContent } from '../../components/SignInContent';

import { styles } from './styles';

// type AuthResponse = {
//   type: string;
//   params: {
//     access_token: string;
//   }
// }

export function SignIn() {
  const navigation = useNavigation();

  async function handleSignIn() {
    //params
    const CLIENT_ID = '662328926738-h03s3ieamggdr7s98qmhe8s34tfrn2pl.apps.googleusercontent.com';
    const REDIRECT_URI = 'https://auth.expo.io/@eloanmf/rn-emfoauth2';
    const RESPONSE_TYPE = 'token';
    const SCOPE = encodeURI('profile email'); //encodeURI - recurso envolve a string - substitui o espaço entre os dois. 

    //Url de autenticação
    //Colocado ? no final, porque precisa inserir algumas informações. params
    //?client_id
    
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

    const response = await AuthSession.startAsync({ authUrl });
    console.log(response);

    navigation.navigate('Profile');
  }

  return (
    <View style={styles.container}>
      <SignInContent />
        
        <Button
          title="Login with Google"
          icon="google"
          onPress={handleSignIn}
        />

    </View>
  );
}