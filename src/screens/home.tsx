import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React from "react";
import  { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Card, Divider, Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export interface User {
  id: string;
  nome: string;
  cpf: string;
  data_nascimento: string;
  genero: string;
  olhos: string;
  altura_estimada: string;
  peso_estimado: string;
  cabelo: string;
  caracteristicas_fisicas: string;
  vestimentas: string;
  residente_em: string;
  foto: string;
  data_desaparecimento: string;
  local_desaparecimento: string;
  detalhes_desaparecimento: string;
  contato: string;
}

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchData = async () => {
    try {
      const url = "http://192.168.100.51:3000/pessoas";
      const res = await axios.get(url);
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (text: string) => {
    setSearchTerm(text);
  };

  const filteredUsers = users.filter((user) =>
    user.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navigation = useNavigation<any>();

  const goToDetailsScreen = (user: User) => {
    navigation.navigate("Detalhes",user);
  };

  return (
    <SafeAreaView style={styles.container}>
    
        <Searchbar
          style={{ marginBottom: 10, width: "90%" }}
          placeholder="Procurar"
          onChangeText={handleSearch}
          value={searchTerm}
        />
        <FlatList
          data={filteredUsers}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => goToDetailsScreen(item)}>
           
            <View style={styles.card}>
              <Image 
                style={{height:200,width:200}}
                source={require("../../assets/SemFoto.png")}
              />
              <View style={{backgroundColor:'#E5E7EB',width:'100%',height:40,justifyContent:'center'}}>
              <Text style={{textTransform:'capitalize',textAlign:'center',color:'black',fontSize:24,fontWeight:'bold'}}>{item.nome ? item.nome : "N/A"}</Text>
              </View>
             
            <View style={{width:350}}>
             
              <Text style={{padding:8,fontSize:20}}>Nascimento:{" "}{item.data_nascimento ? item.data_nascimento.split("-").reverse().join("/") : "N/A"} </Text>
              <Divider style={{backgroundColor:'red',borderWidth:.7,width:'100%'}} />

              <Text style={{textTransform:'capitalize',padding:8,fontSize:20}}>
                Data Desaparecimento:{" "}
                {item.data_desaparecimento ? item.data_desaparecimento.split("-").reverse().join("/") : "N/A"}
              </Text>
              <Divider style={{backgroundColor:'red',borderWidth:.7,width:'100%'}} />
              
              <Text style={{padding:8,fontSize:20}}>Local:{" "}{item.local_desaparecimento ? item.local_desaparecimento : "N/A"} </Text>
              </View>
            </View>
            </TouchableOpacity>
          )}
         
          keyExtractor={(item) => item.id.toString()}
        />
        <StatusBar style="dark" />
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'#252525'
  },
  card:{
    backgroundColor:'#fff',
    marginVertical:15,
    width:350,
    alignItems:'center',
    borderRadius:20
  }
});

export default Home;
