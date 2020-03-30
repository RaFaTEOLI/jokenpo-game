import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  AppRegistry
} from 'react-native';
import {name as appName} from './app.json';

class MeuComponente extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.teste}</Text>
            </View>
        );
    }
}

class app3 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            texto: 'Texto teste 2'
        };
    }

    alterarTexto() {
        this.setState({texto: 'Outra coisa'});
    }
    render() {
        return (
            <View>
                <MeuComponente teste={this.state.texto}></MeuComponente>
                <Button title="Botão" onPress={() => { this.alterarTexto() }} />
            </View>
        );
    }
}

AppRegistry.registerComponent(appName, () => app3);