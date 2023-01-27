import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client';
import {MutationSignUpArgs, SignUpMutation, SignUpMutationVariables } from "../../gql/graphql"


const SIGN_UP = gql`
  mutation SignUp($firstName: String!, $lastName: String!, $nickname: String!, $email: String!, $city: String!, $country: String!, $password: String!) {
    signUp(firstName: $firstName, lastName: $lastName, nickname: $nickname, email: $email, city: $city, country: $country, password: $password) {
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

const Signup = () => {
    const [firstName, setFirstName] = useState<string>("")   
    const [lastName, setLastName] = useState<string>("")   
    const [nickname, setNickName] = useState<string>("")   
    const [city, setCityName] = useState<string>("")   
    const [country, setCountryName] = useState<string>("")   
    const [email, setEmail] = useState<string>("")   
    const [password, setPassword] = useState<string>("")   
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>("")
    
    const [signupFunction, {data, error, loading}] = useMutation<SignUpMutation, SignUpMutationVariables>  (SIGN_UP)

    const handleSubmit = async () => {
        try {
            await signupFunction({variables:{
                firstName, lastName, nickname, email, city, country, password
            }})
        }
        catch (error) {
            alert(error)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>S'inscrire</Text>        
            </View>

            <View style={styles.inputContainer}>
                <Text> Prénom </Text>
                <TextInput  onChangeText={(text) => setFirstName(text) }  style={styles.input} placeholder='John'/>
            </View>
            <View style={styles.inputContainer}>
                <Text> Nom </Text>
                <TextInput  onChangeText={(text) => setLastName(text) }  style={styles.input} placeholder='Doe'/>
            </View>
            <View style={styles.inputContainer}>
                <Text> Pseudo </Text>
                <TextInput  onChangeText={(text) => setNickName(text) }  style={styles.input} placeholder='Doe'/>
            </View>
            <View style={styles.inputContainer}>
                <Text> Ville </Text>
                <TextInput  onChangeText={(text) => setCityName(text) }  style={styles.input} placeholder='Clichy'/>
            </View>
            <View style={styles.inputContainer}>
                <Text> Pays </Text>
                <TextInput  onChangeText={(text) => setCountryName(text) }  style={styles.input} placeholder='France'/>
            </View>
            <View style={styles.inputContainer}>
                <Text> Email </Text>
                <TextInput  onChangeText={(text) => setEmail(text) }  style={styles.input} autoComplete='email' placeholder='john.doe@gmail.fr'/>
            </View>
            <View style={styles.inputContainer}>
                <Text> Mot de passe </Text>
                <TextInput  onChangeText={(text) => setPassword(text) }  style={styles.input} placeholder='password'/>
            </View>
            <View style={styles.inputContainer}>
                <Text> Confirmer votre mot de passe </Text>
                <TextInput style={styles.input} placeholder='password'/>
            </View>

            <Pressable onPress={handleSubmit} style={styles.confirmButton}><Text>S'inscrire</Text></Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        margin:8,
        padding:16,
        borderWidth:2,
        borderColor:"#3B8574",
        borderRadius:16,
        justifyContent:'center',
        alignItems:"center",
        overflow:"scroll",
        textAlign:"center",
        width:"85%"

    },
    titleContainer:{
        padding:8,
        width:150,
        borderWidth:2,
        borderColor:"#3B8574",
        borderRadius:8,
        transform:[{skewY:"-2deg"}],
        marginTop:-36
    },
    title:{
        color:"#3B8574",
        textAlign:"center",
        fontWeight:"bold",
        transform:[{skewY:"2deg"}]
    
    },
    inputContainer: {
        width:"80%",
        margin:12
        
    },
    input: {
        padding:8,
        borderRadius:8,
        backgroundColor:"#F5F5F5",
    },
    confirmButton: {
        backgroundColor:"#3B8574",
        borderRadius:5,
        padding:8,
    },
    textButton: {
        textAlign:"center",
        color:"white",
        textTransform:"uppercase"
    }
})

export default Signup