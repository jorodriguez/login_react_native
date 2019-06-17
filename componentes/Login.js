import React, { Component } from 'react';

import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button, 
    Alert,
    ActivityIndicator,
    AsyncStorage
} from 'react-native';


export default class Login extends Component {

    urlLogin = "http://localhost:5000/auth/login";

    state = {
        username: 'test@gmail.com',
        password: '123',
        isLoggingIn: false,
        message: '',
        correo: '',
        fechaGenero: '',
        nombre: '',
        id: 0,
        usuario: null

    }

    respuestaUsuario = { nombre: '', correo: '' };

    _userLogin = async () => {

        this.setState({ isLoggingIn: true, message: '' });

        var data = { correo: this.state.username, password: this.state.password };

        var proceed = false;

        await fetch(this.urlLogin, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
            .then((responseJson) => {

                //this.mensajeToast(JSON.stringify(result));
                if (responseJson.auth) {
                    
                    proceed = true;
                    this.saveItemStorage("usuario_sesion", this.responseJson);
                    this.saveItemStorage("jwt", this.responseJson.token);                    
                    this.setState({
                        usuario: responseJson
                    });
                   
                    Alert.alert(`Bienvenido ${responseJson.nombre}`);
                    this.props.navigation.navigate('Principal');
                } else {
                    Alert.alert('El usuario no existe.');          
                }

                /*
                if (responseJson.id != undefined) {
                    proceed = true;

                    this.setState({
                        usuario: {
                            id: responseJson.id,
                            nombre: responseJson.nombre,
                            correo: responseJson.correo,
                            fechaGenero: responseJson.fechaGenero
                        }
                    });

                    Alert.alert(`Bienvenido ${responseJson.nombre}`);
                } else {
                    Alert.alert('El usuario no existe.');
                }*/
            })
            .then(() => {
                this.setState({ isLoggingIn: false })
                if (proceed) {
                    this.props.onLoginPress(this.state.usuario);
                }
            })
            .catch(err => {
                this.setState({ message: err.message });
                this.setState({ isLoggingIn: false });

            });
    }


    //save the session

    async saveItemStorage(item, selectedValue) {
        try {
          await AsyncStorage.setItem(item, selectedValue);
        } catch (error) {
          console.error('AsyncStorage error: ' + error.message);
        }
      }
    


    clearUsername = () => {
        this._username.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }

    clearPassword = () => {
        this._password.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }

    render() {
        return (
            <ScrollView style={{ padding: 25 }}>
                <Text
                    style={{ fontSize: 27 }}>
                    Login
            </Text>
                <TextInput
                    ref={component => this._username = component}
                    placeholder='Username'
                    onChangeText={(username) => this.setState({ username })}
                    autoFocus={true}
                    onFocus={this.clearUsername}
                />
                <TextInpu
                    ref={component => this._password = component}
                    placeholder='Password'
                    onChangeText={(password) => this.setState({ password })}
                    secureTextEntry={true}
                    onFocus={this.clearPassword}
                    onSubmitEditing={this._userLogin}
                />

                {this.state.isLoggingIn && <ActivityIndicator />}
                <View style={{ margin: 7 }} />
                <Button
                    disabled={this.state.isLoggingIn || !this.state.username || !this.state.password}
                    onPress={this._userLogin}
                    title="Submit"
                />

            </ScrollView>
        )
    }
}

/*
{!!this.state.message && (
                <Text
                    style={{fontSize: 14, color: 'red', padding: 5}}>
                    mensaje : {this.state.message}
                </Text>
            )}
*/