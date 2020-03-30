import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const imgPedra = require('../../imgs/pedra.png');
const imgPapel = require('../../imgs/papel.png');
const imgTesoura = require('../../imgs/tesoura.png');

class Icone extends Component {
    render() {
        switch(this.props.escolha) {
            case "Rock":
                return (
                    <View style={styles.icone}>
                        <Text style={styles.textoJogador}>{this.props.jogador}'s choice: </Text>
                        <Image source={imgPedra} />
                    </View>
                );
                break;
            case "Paper":
                return (
                    <View style={styles.icone}>
                        <Text style={styles.textoJogador}>{this.props.jogador}'s choice: </Text>
                        <Image source={imgPapel} />
                    </View>
                );
                break;
            case "Scissors":
                return (
                    <View style={styles.icone}>
                        <Text style={styles.textoJogador}>{this.props.jogador}'s choice: </Text>
                        <Image source={imgTesoura} />
                    </View>
                );
                break;
            default: return false;
        }
    }
}

const styles = StyleSheet.create({
    icone: {
        alignItems: 'center',
        marginBottom: 10,
    },
    textoJogador: {
        fontSize: 18,
    },
});

export default Icone;