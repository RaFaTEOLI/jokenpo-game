import React, {Component} from 'react';
import {
  Text,
  View,
  AppRegistry
} from 'react-native';
import {name as appName} from './app.json';

class MeuComponente extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.propriedade1}</Text>
                <Text>{this.props.xyz}</Text>
                <Text>{this.props.p}</Text>
            </View>
        )
    }
}

class app3 extends Component {
    render() {
        return (
            <View>
                <MeuComponente propriedade1='Banana' xyz='Abacaxi' p='Uva'></MeuComponente>
            </View>
        );
    }
}

AppRegistry.registerComponent(appName, () => app3);