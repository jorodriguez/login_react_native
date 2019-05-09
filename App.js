import React from 'react';
import { StyleSheet, Text, View, ScrollView ,Image,Alert} from 'react-native';
import Login from './componentes/Login'
import Principal from './componentes/Principal'

export default class App extends React.Component {
  state = {
    isLoggedIn: false,
    usuario:null
  }

  usuario = { nombre: '' };

  render() {
    if (this.state.isLoggedIn)
      return <Principal
        usuario={this.state.usuario}
        onLogoutPress={() => this.setState({ isLoggedIn: false })}
      />;
    else
      return <ScrollView>
        <Image source={require('./assets/tux.png')} />
        <Login
          onLoginPress={
            (_usuarioPam) => {
              this.setState({ isLoggedIn: true ,usuario:_usuarioPam});              
              //Alert.alert(`recibido ${JSON.stringify(this.state.usuario)}`);
            }
          }
        />
      </ScrollView>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});