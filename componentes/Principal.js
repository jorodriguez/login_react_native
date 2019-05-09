import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button
} from 'react-native';

export default class Principal extends Component {

    state={usuario:null};

    constructor(props){
        super(props);
        this.state = {usuario:props.usuario};        
    }  
    componentDidMount(){ }
   
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
}