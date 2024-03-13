import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View ,Image, SafeAreaView} from 'react-native';


interface Props {
  id: string;
  nome: string;
  cpf:string
  data_nascimento:string
  genero:string
  olhos:string
  altura_estimada:string
  peso_estimado:string
  cabelo:string
  caracteristicas_fisicas:string
  vestimentas:string
  residente_em:string
  foto:string
  data_desaparecimento:string
  local_desaparecimento:string
  detalhes_desaparecimento:string
  contato:string
}

export default function App() {
  const [user, setUser] = useState<Props[]>([]);

  const fetchData = async () => {
    try {
      const url = 'http://192.168.100.51:3000/pessoas';
      const res = await axios.get(url);
      console.log(res.data)
      setUser(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <View style={styles.container}>
      <FlatList
        data={user}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            
            <Image  
              style={{height:150,width:'100%'}}
              source={{ uri: 'https://pixabay.com/get/gc4a03e171165e70c5903aca2b26a5fe6100f774bb1e466c5c744e7ffe70c722d74092a3f60913935cd1f16b294969c1b_1280.jpg' }}
            />

            <Text>Nome: {item.nome ? item.nome : "N/A"}</Text>
            <Text>CPF: {item.cpf ? item.cpf : "N/A"}</Text>
            <Text>Data Nascimento:  {item.data_nascimento ? item.data_nascimento : "N/A"}</Text>
            <Text>Genero: {item.genero ? item.genero : "N/A"}</Text>
            <Text>Olhos: {item.olhos ? item.olhos : "N/A"}</Text>
            <Text>altura_estimada: {item.altura_estimada ? item.altura_estimada : "N/A"}</Text>
            <Text>peso_estimado: {item.peso_estimado ? item.peso_estimado : "N/A"}</Text>
            <Text>cabelo: {item.cabelo ? item.cabelo : "N/A"}</Text>
            <Text>caracteristicas_fisicas: {item.caracteristicas_fisicas ? item.caracteristicas_fisicas : "N/A"}</Text>
            <Text>vestimentas: {item.vestimentas ? item.vestimentas : "N/A"}</Text>
            <Text>residente_em: {item.residente_em ? item.residente_em : "N/A"}</Text>
            <Text>data_desaparecimento: {item.data_desaparecimento ? item.data_desaparecimento : "N/A"}</Text>
            <Text>local_desaparecimento: {item.local_desaparecimento ? item.local_desaparecimento : "N/A"}</Text>
            <Text>detalhes_desaparecimento: {item.detalhes_desaparecimento ? item.detalhes_desaparecimento : "N/A"}</Text>
            <Text>contato: {item.contato ? item.contato : "N/A"}</Text>
        

          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },card:{
    flex:1,
    marginBottom:25,
    borderWidth:1,
    padding:15
  }
});
