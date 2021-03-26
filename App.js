import React, {Component} from 'react';
import {
  StyleSheet, 
  TouchableOpacity, 
  Text, 
  TextInput,
  View, 
  Image} from 'react-native';

export default class App extends Component{
  constructor(props) {
    super(props) ;
    this.state = {
      textValue: '',
      textValue2: '',
    };
  }

  changeTextInput = text =>{
    this.setState({textValue: text});
  };

  changeTextInput2 = text =>{
    this.setState({textValue2: text});
  };

  render() {
    return (
      <View class="App" style={styles.container}>
        <Image style={styles.image} source={require('./img/logo.png')}/>

        <View style={styles.text}>
          <Text> Username </Text>
        </View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => this.changeTextInput(text)}
          value={this.state.textValue}
        />

        <View style={styles.text}>
          <Text> Password </Text>
        </View>
        <TextInput
          secureTextEntry={true}
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => this.changeTextInput2(text)}
          value={this.state.textValue2}
        />

        <TouchableOpacity style={styles.button}>
          <Text> Login </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(50, 50, 50, 0.4)',
  },
  text: {
    alignItems: 'center',
    padding: 10,
  },
  image: {
    marginLeft: 70,
    width: 200,
    height: 200,
  },

  button: {
    top: 10,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});