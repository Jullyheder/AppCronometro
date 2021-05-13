import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      cron: 0,
      butIni: 'Iniciar',
      ultimo: null,
    }
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai() {
    if(this.timer != null) {
      clearInterval(this.timer);
      this.setState({butIni: 'Voltar'});
      this.timer = null;
    }else{
      this.setState({butIni: 'Parar'})
      this.timer = setInterval(() => {
        this.setState({
          cron: this.state.cron + 0.1,
        });
      }, 100);
    }
  }

  limpar() {
    if(this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      ultimo: this.state.cron,
      cron: 0,
      butIni: 'Iniciar'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('./src/cronometro.png')}
          style={styles.img}
        />
        <Text style={styles.text}>{this.state.cron.toFixed(1)}</Text>

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={this.vai}>
            <Text style={styles.btnText}>{this.state.butIni}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.limpar}>
            <Text style={styles.btnText}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.areaUltimo}>
          <Text style={styles.textUltimo}>
            {this.state.ultimo > 0 ? 'Ultimo Tempo: ' + this.state.ultimo.toFixed(1) + 's' :
            ''}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    marginTop: -160,
    fontSize: 65,
    fontWeight: 'bold',
  },
  buttonArea: {
    flexDirection: 'row',
    marginTop: 80,
    height: 40,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 9,
    backgroundColor: 'white',
    margin: 17,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  areaUltimo: {
    marginTop: 40,
  },
  textUltimo: {
    color: 'white',
    fontSize: 25,
    fontStyle: 'italic'
  },
});

export default App;
