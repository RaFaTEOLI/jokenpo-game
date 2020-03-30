import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  AppRegistry,
  StyleSheet
} from 'react-native';
import {name as appName} from './app.json';
import Topo from './src/components/Topo';
import Icone from './src/components/Icone';

class app3 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userChoice: '',
            computerChoice: '',
            result: '',
        }
    }

    jokenpo(userChoice) {
        // Generate random number (0,1,2)
        const randomNumber = Math.floor(Math.random() * 3);

        //                 0        1         2
        const choices = ["Rock", "Paper", "Scissors"];

        if (randomNumber == 0) {
            if (userChoice == 0) {
                // Draw
                this.setState({result: 'Draw'});
            }
            if (userChoice == 1) {
                // User Wins
                this.setState({result: 'User Wins'});
            } 
            if (userChoice == 2) {
                // Computer Wins
                this.setState({result: 'Computer Wins'});
            }
        }

        if (randomNumber == 1) {
            if (userChoice == 1) {
                // Draw
                this.setState({result: 'Draw'});
            }
            if (userChoice == 2) {
                // User Wins
                this.setState({result: 'User Wins'});
            }
            if (userChoice == 0) {
                // Computer Wins
                this.setState({result: 'Computer Wins'});
            }
        }

        if (randomNumber == 2) {
            if (userChoice == 2) {
                // Draw
                this.setState({result: 'Draw'});
            }
            if (userChoice == 0) {
                // User Wins
                this.setState({result: 'User Wins'});
            }
            if (userChoice == 1) {
                // Computer Wins
                this.setState({result: 'Computer Wins'});
            }
        }

        this.setState({
            userChoice: choices[userChoice],
            computerChoice: choices[randomNumber],
        });
    }

    render() {
        return (
            <View>
                <Topo />
                <View style={styles.painelAcoes}>
                    <View style={styles.btnEscolha}>
                        <Button title="Rock" onPress={() => {this.jokenpo(0)}}/>
                    </View>
                    <View style={styles.btnEscolha}>
                        <Button title="Paper" onPress={() => {this.jokenpo(1)}}/>
                    </View>
                    <View style={styles.btnEscolha}>
                        <Button title="Scissors" onPress={() => {this.jokenpo(2)}}/>
                    </View>
                </View>

                <View style={styles.palco}>
                    <Text style={styles.textoResultado}>{this.state.result}</Text>
                    
                    <Icone escolha={this.state.computerChoice} jogador='Computer'></Icone>
                    <Icone escolha={this.state.userChoice} jogador='User'></Icone>
                </View>
                
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btnEscolha: {
        width: 90,
    },
    painelAcoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    palco:{
        alignItems: 'center',
        marginTop: 5,
    },
    textoResultado: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
        marginBottom: 10,
    },
});

AppRegistry.registerComponent(appName, () => app3);