import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button, ListView,StyleSheet,Alert
} from 'react-native';

import PushNotification from 'react-native-push-notification';

//import { Row } from './Row';

//Usar https://github.com/zo0r/react-native-push-notification/blob/f42723817f1687e0da23e6753eb8a9f0385b6ac5/README.md

export default class Principal extends Component {
    //https://jsonplaceholder.typicode.com/users
    state = { usuario: null, message: '' };
    
    constructor(props) {
        super(props);
         //const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
       
       // this.state = { usuario: props.usuario,dataSource: ds.cloneWithRows(['row 1', 'row 2'])};
        this.state = { usuario: props.usuario };

    }

   /* componentWillMount(){
        PushNotification.configure({

            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function(token) {
                console.log( 'TOKEN:', token );
            },
        
            // (required) Called when a remote or local notification is opened or received
            onNotification: function(notification) {
                console.log( 'NOTIFICATION:', notification );
            },
        
            // ANDROID ONLY: (optional) GCM Sender ID.
            senderID: "119606004783",
        
            // IOS ONLY (optional): default: all - Permissions to register.
            permissions: {
                alert: true,
                badge: true,
                sound: true
            },
        
            // Should the initial notification be popped automatically
            // default: true
            popInitialNotification: true,
                 
            requestPermissions: true,
        });
    }*/


    //async componentDidMount() {
  /*  _loadUsers = async () => {

        var lista = [];

        await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
            .then((responseJson) => {
                //aqui trabajar la respuesta
                Alert.alert(`Sxxxx${responseJson}`);                
                
                            // this.setState({ dataSource: ds.cloneWithRows(responseJson) });
                //this.state.dataSource.ds.cloneWithRows(responseJson);
                //this.setState({ dataSource: this.state.ds.cloneWithRows(responseJson) });
            })
            .catch(err => {
                Alert.alert(`Sucedió un error ${err}`);
            });
    }*/

    render() {
        return (
            <ScrollView style={{ padding: 20 }}>
                <Text
                    style={{ fontSize: 27 }}>
                    Bienvenido 
                </Text>
                <View style={{ margin: 20 }} />
                <Button
                    onPress={this.props.onLogoutPress}
                    title="Logout"
                />                
            </ScrollView>
        )
    }
/*

<Button
                    onPress={this._loadUsers}
                    title="Cargar"
                />
                <ListView
                    dataSource={this.state.dataSource}                                     
                />

renderRow={(rowData) =>
                        <Text style={this.styles.text}>
                            {`${rowData.name} ${rowData.email}`}
                        </Text>
                    } */
    //renderRow={(rowData) => <Row name={rowData.name} email={rowData.email} >{...rowData}</Row>}
 
 
 /*
    styless = StyleSheet.create({
        container: {
            flex: 1,
            padding: 12,
            flexDirection: 'row',
            alignItems: 'center',
        },
        text: {
            marginLeft: 12,
            fontSize: 16,
        },
        photo: {
            height: 40,
            width: 40,
            borderRadius: 20,
        },
    });*/


}