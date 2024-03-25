import { SafeAreaView } from "react-native-safe-area-context";
import { User } from "./home";
import React from "react";
import {Text,Image, View} from "react-native"
import { Divider } from "react-native-paper";

const Detalhes = ({route}:any) => {

    const user: User = route.params;
    return(

<SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#252525'}}>
            <View style={{borderWidth:1,alignItems:'center',borderRadius:15,backgroundColor:'#fff',width:300}}>
                <Image 
                style={{height:200,width:200}}
                source={require("../../assets/SemFoto.png")}
                />  

                <View style={{width:300}}>  

                <View style={{backgroundColor:'#E5E7EB',width:'100%',height:40,justifyContent:'center'}}>
              <Text style={{textTransform:'capitalize',textAlign:'center',color:'black',fontSize:24,fontWeight:'bold'}}>{user.nome ? user.nome : "N/A"}</Text>
              </View>
               
               
                <Text style={{paddingVertical:7,paddingHorizontal:5,fontSize:17}}>CPF: {user.cpf ? user.cpf : "N/A"}</Text>
                <Divider style={{backgroundColor:'red',borderWidth:.7,width:'100%'}} />
                <Text style={{textTransform:'capitalize',paddingVertical:5,paddingHorizontal:5,fontSize:17}} >Data Nascimento:  {user.data_nascimento ? user.data_nascimento : "N/A"}</Text>
                <Divider style={{backgroundColor:'red',borderWidth:.7,width:'100%'}} />
                <Text style={{textTransform:'capitalize',paddingVertical:5,paddingHorizontal:5,fontSize:17}} >Genero: {user.genero ? user.genero : "N/A"}</Text>
                <Divider style={{backgroundColor:'red',borderWidth:.7,width:'100%'}} />
                <Text style={{textTransform:'capitalize',paddingVertical:4,paddingHorizontal:5,fontSize:17}} >Olhos: {user.olhos ? user.olhos : "N/A"}</Text>
                <Divider style={{backgroundColor:'red',borderWidth:.7,width:'100%'}} />
                <Text style={{textTransform:'capitalize',paddingVertical:5,paddingHorizontal:5,fontSize:17}} >Altura: {user.altura_estimada ? user.altura_estimada : "N/A"}</Text>
                <Divider style={{backgroundColor:'red',borderWidth:.7,width:'100%'}} />
                <Text style={{textTransform:'capitalize',paddingVertical:5,paddingHorizontal:5,fontSize:17}} >Peso: {user.peso_estimado ? user.peso_estimado : "N/A"}</Text>
                <Divider style={{backgroundColor:'red',borderWidth:.7,width:'100%'}} />
                <Text style={{textTransform:'capitalize',paddingVertical:5,paddingHorizontal:5,fontSize:17}} >Cabelo: {user.cabelo ? user.cabelo : "N/A"}</Text>
                <Divider style={{backgroundColor:'red',borderWidth:.7,width:'100%'}} />
                <Text style={{textTransform:'capitalize',paddingVertical:5,paddingHorizontal:5,fontSize:17}} >Caracteristicas Fisicas: {user.caracteristicas_fisicas ? user.caracteristicas_fisicas : "N/A"}</Text>
                <Divider style={{backgroundColor:'red',borderWidth:.7,width:'100%'}} />
                <Text style={{textTransform:'capitalize',paddingVertical:5,paddingHorizontal:5,fontSize:17}} >Vestimentas: {user.vestimentas ? user.vestimentas : "N/A"}</Text>
                <Divider style={{backgroundColor:'red',borderWidth:.7,width:'100%'}} />
                <Text style={{textTransform:'capitalize',paddingVertical:5,paddingHorizontal:5,fontSize:17}} >Residente: {user.residente_em ? user.residente_em : "N/A"}</Text>
                <Divider style={{backgroundColor:'red',borderWidth:.7,width:'100%'}} />
                <Text style={{textTransform:'capitalize',paddingVertical:5,paddingHorizontal:5,fontSize:17}} >Data Desaparecimento: {user.data_desaparecimento ? user.data_desaparecimento : "N/A"}</Text>
                <Divider style={{backgroundColor:'red',borderWidth:.7,width:'100%'}} />
                <Text style={{textTransform:'capitalize',paddingVertical:5,paddingHorizontal:5,fontSize:17}} >Local Desaparecimento: {user.local_desaparecimento ? user.local_desaparecimento : "N/A"}</Text>
                <Divider style={{backgroundColor:'red',borderWidth:.7,width:'100%'}} />
                <Text style={{textTransform:'capitalize',paddingVertical:5,paddingHorizontal:5,fontSize:17}} >Detalhes Desaparecimento: {user.detalhes_desaparecimento ? user.detalhes_desaparecimento : "N/A"}</Text>
                <Divider style={{backgroundColor:'red',borderWidth:.7,width:'100%'}} />
                <Text style={{textTransform:'capitalize',paddingVertical:5,paddingHorizontal:5,fontSize:17}} >Contato: {user.contato ? user.contato : "N/A"}</Text>
                </View>
            </View>
</SafeAreaView>

    )
}

export default Detalhes