import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { ProfileHeader } from '../../components/ProfileHeader';
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';

import { styles } from './styles';
import { theme } from '../../styles/theme';

type Params = {
  token: string;
}

type Profile = {
  email: string;
  name: string;
  family_name: string;
  given_name: string;
  locale: string;
  picture: string;
}

// useEffect buscar os dados do usuário quando for carregado.
// useState para armazenar os dados de um usuário em um estado para poder compartilhar.

export function Profile() {
  
  // useState para armazenar os dados de um usuário em um estado para poder compartilhar.
  //usar o type Profile no estado.
  //Vou falar que ele é um objeto vazio do type profile
  const [profile, setProfile] = useState({} as Profile);


  //useRoute está dentro do @react-navigation/native //com ele acessa informações do token passado.
  const navigation = useNavigation();
  const route = useRoute();

  //Acessar dentro de route.params tem que tipar, token: string; 
  //route.params é conforme esse tipo (as Params);
  const { token } = route.params as Params;
  //precisa do token para buscar informações do usuário.
  console.log('Token tela Profile: ' + token);
  

  async function handleLogout() {
    navigation.navigate('SignIn');
  }

  //roda da etapa 3 do Google Developers Request URI
  //tem que colocar o token depois de ? 
  async function loadProfile(){
    const response = fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`);
    //em cima vai devolver uma resposta
    const userInfo = await (await response).json();
    setProfile(userInfo);
    console.log("### USUARIO ###");
    console.log(userInfo ); 
  }

  // useEffect buscar os dados do usuário quando for carregado.
  useEffect(() => {
    loadProfile();
  },[])

  return (
    <View style={styles.container}>
      <ProfileHeader />

      <View style={styles.content}>
        <View style={styles.profile}>
          <Avatar
            source={{ uri: profile.picture }}
          />

          <Text style={styles.name}>
            {profile.name}
          </Text>

          <View style={styles.email}>
            <Feather name="mail" color={theme.colors.secondary} size={18} />
            <Text style={styles.emailText}>
                {profile.email}
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
              {profile.given_name}
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
              {profile.family_name}
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
            User profile location: {profile.locale}
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