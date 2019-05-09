import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button, ListView,StyleSheet,Alert
} from 'react-native';
//import { Row } from './Row';

export default class Principal extends Component {
    //https://jsonplaceholder.typicode.com/users
    state = { usuario: null, message: '' };
    
    constructor(props) {
        super(props);
         //const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
       
       // this.state = { usuario: props.usuario,dataSource: ds.cloneWithRows(['row 1', 'row 2'])};
        this.state = { usuario: props.usuario };

    }

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
                    Bienvenido {this.state.usuario.nombre}
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