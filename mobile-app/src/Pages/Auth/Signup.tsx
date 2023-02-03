import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, Pressable, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { gql, useMutation } from '@apollo/client';
import {MutationSignUpArgs, SignUpMutation, SignUpMutationVariables } from "../../gql/graphql"
import { getErrorMessage } from '../../utils';
import MainContainer from '../../Shared/GeneralContainer';
/* import ContinueButton from '../../assets/Continue';
 */

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
    const [passwordValid, setPasswordValid] = useState<boolean>(false)
    
    const [signupFunction, {data, error, loading}] = useMutation<SignUpMutation, SignUpMutationVariables>  (SIGN_UP)

    const ref_lastName = useRef<TextInput>(null)
    const ref_nickname = useRef<TextInput>(null)
    const ref_city = useRef<TextInput>(null)
    const ref_country = useRef<TextInput>(null)
    const ref_email = useRef<TextInput>(null)
    const ref_password = useRef<TextInput>(null)

    const handleSubmit = async () => {
        try {
            await signupFunction({variables:{
                firstName, lastName, nickname, email, city, country, password
            }})

            alert("Inscription réussie")
        }
        catch (error) {
            alert(error)
            console.log(error)
        }
    }

    const handleSubmitPasswordError = () => {
        alert("le mot de passe doit contenir au moins une lettre en majuscule, un chiffre et un charactère spécial")
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])/;

    const changeFocus = (_TextInput:React.RefObject<TextInput>) => _TextInput.current?.focus();
    return (
        <MainContainer>
            <ScrollView style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>S'inscrire</Text>        
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}> Prénom </Text>
                        <TextInput  onSubmitEditing={() => changeFocus(ref_lastName)} onChangeText={(text) => setFirstName(text) }  style={styles.input} placeholder='John'/>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}> Nom </Text>
                        <TextInput  ref={ref_lastName} onSubmitEditing={() => changeFocus(ref_nickname)} onChangeText={(text) => setLastName(text) }  style={styles.input} placeholder='Doe'/>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}> Pseudo </Text>
                        <TextInput  ref={ref_nickname} onSubmitEditing={() => changeFocus(ref_city)} onChangeText={(text) => setNickName(text) }  style={styles.input} placeholder='Doe'/>
                    </View>
                    
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}> Ville </Text>
                        <TextInput  ref={ref_city} onSubmitEditing={() => changeFocus(ref_country)} onChangeText={(text) => setCityName(text) }  style={styles.input} placeholder='Clichy'/>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}> Pays </Text>
                        <TextInput  ref={ref_country} onSubmitEditing={() => changeFocus(ref_email)} onChangeText={(text) => setCountryName(text) }  style={styles.input} placeholder='France'/>
                    </View>
                    
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}> Email </Text>
                        <TextInput  ref={ref_email} onSubmitEditing={() => changeFocus(ref_password)} onChangeText={(text) => setEmail(text) }  style={styles.input} autoComplete='email' placeholder='john.doe@gmail.fr'/>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}> Mot de passe </Text>
                        <TextInput  ref={ref_password} secureTextEntry={true} onChangeText={(text) => {
                        setPassword(text);
                        setPasswordValid(regex.test(text))
                    }}  style={styles.input} placeholder='password'/>
                    </View>

                    <View>
                        <Text style={{textAlign:"center", margin:8}}>------- ou créer un compte avec ------</Text>
                        <View style={styles.socialConnect}>

                        </View>
                    </View>

                    <Pressable style={{flex:1, alignItems:'center'}} onPress={passwordValid ? handleSubmit : handleSubmitPasswordError}>
{/*                         <ContinueButton/>
 */}                    </Pressable>
                    
            </ScrollView>

            <Text> Vous avez déjà un compte ? </Text>

            <Button title="Se connecter"/>
        </MainContainer>
    )
}


const styles = StyleSheet.create({
    container:{
        margin:16,
        borderWidth:2,
        borderRadius:16,
        borderColor:"#3B8574",
        textAlign:"center",
        zIndex:1,
        width:"90%",
    },
    titleContainer:{
        margin:"auto",
        padding:8,
        width:"35%",
        borderWidth:2,
        borderColor:"#3B8574",
        borderRadius:8,
        transform:[{skewY:"-2deg"}],
        zIndex:20,
        position:'absolute',
        top:-20,
        backgroundColor:"#ffff"
    },
    title:{
        color:"#3B8574",
        textAlign:"center",
        fontWeight:"bold",
        transform:[{skewY:"2deg"}]
    
    },
    inputContainer: {
        width:"80%",
        margin:12,
        zIndex:1
        
    },
    input: {
        padding:8,
        borderRadius:8,
        backgroundColor:"#E9E9E9",
    },
    socialConnect: {
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around"
    },
    textButton: {
        color:"white",

    },
    label: {
        fontWeight:"bold"
    }    
})


export default Signup