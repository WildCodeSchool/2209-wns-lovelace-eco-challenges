import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Shared/Header/Header'
import { gql, useMutation } from '@apollo/client';
import { SignInMutation, SignInMutationVariables } from '../../gql/graphql';
import * as Facebook from "expo-facebook"
import MainContainer from '../../Shared/GeneralContainer';
import Continuebutton from '../../assets/Continue';
import FacebookIcon from '../../assets/FacebookIcon';
import GmailIcon from '../../assets/GmailIcon';
import AppleIcon from '../../assets/Apple';

const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
      email
      firstName
      lastName
      nickname
      score
      disabled
      city
      country
    }
  }
`;


const Signin = () => {
    const [email, setEmailName] = useState<string>("")   
    const [password, setPassword] = useState<string>("") 

    const [login, {data, error}] = useMutation<SignInMutation, SignInMutationVariables>(SIGN_IN)

    const handleSubmit = async () => {
        console.log(login({
            variables:{
                email, password
            }
        }))
    }

    return (
        <MainContainer>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}> Se connecter </Text>        
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}> Email </Text>
                    <TextInput style={styles.input} onChangeText={(e)=> setEmailName(e)} autoComplete='email' placeholder='john.doe@gmail.fr'/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}> Mot de passe </Text>
                    <TextInput onChangeText={(e) => setPassword(e)} style={styles.input} placeholder='password'/>
                    <Text> Mot de passe oublié ? </Text>
                </View>

                <View style={styles.socialConnect}>
                    <Pressable onPress={() => alert("Connexion avec Facebook")}>
                        <FacebookIcon/>
                    </Pressable>
                    
                    <Pressable onPress={() => alert("Connexion avec Google")}>
                        <GmailIcon/>
                    </Pressable>
                    
                    <Pressable onPress={() => alert("Connexion avec Apple")}>
                        <AppleIcon/>
                    </Pressable>
                </View>

                <View>
                    <Text style={{color:"#3B8574"}}>Restez connecté</Text>
                </View>

                <TouchableOpacity style={{margin:8}} onPress={handleSubmit} ><Continuebutton/></TouchableOpacity>
            </View>
            <View style={{margin:8}}>    
                <Text style={{fontWeight:"bold", textAlign:"center"}}> Pas encore inscrit ? </Text>
                <Pressable style={styles.confirmButton}><Text style={styles.textButton}>Créer un compte</Text></Pressable>
            </View>
        </MainContainer>
    )
}


const styles = StyleSheet.create({
    container:{
        padding:16,
        borderWidth:2,
        borderColor:"#3B8574",
        borderRadius:16,
        justifyContent:'center',
        alignItems:"center",
        textAlign:"center",
        width:"85%",
        zIndex:0
    },
    titleContainer:{
        padding:8,
        width:150,
        borderWidth:2,
        borderColor:"#3B8574",
        borderRadius:8,
        transform:[{skewY:"-2deg"}],
        marginTop:-36,
        zIndex:2,
        backgroundColor:"white"
    },
    title:{
        color:"#3B8574",
        textAlign:"center",
        fontWeight:"bold",
        borderRadius:8,
        transform:[{skewY:"2deg"}]
    
    },
    inputContainer: {
        width:"80%",
        margin:12
        
    },
    input: {
        padding:8,
        borderRadius:16,
        backgroundColor:"#F5F5F5",
    },
    confirmButton: {
        backgroundColor:"#3B8574",
        borderRadius:5,
        padding:10,
        minWidth:"50%",
        margin:8
    },
    textButton: {
        color:"white",
        fontWeight:"bold",
        textAlign:"center"
    },
    socialConnect: {
        width:"80%",
        marginVertical:8,
        flexDirection:"row", 
        justifyContent:"space-around"
    },
    label: {
        fontWeight:"bold"
    }
})

export default Signin