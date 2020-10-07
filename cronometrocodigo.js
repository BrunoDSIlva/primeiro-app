import React, { Component } from 'react';
import {
View,
Text,
StyleSheet,
Image,
TouchableOpacity,
} from 'react-native';


class App extends Component {

  constructor (props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'RUN',
      ultimo: null
    }
    // varial do timer do relogio
    this.timer = null;

    this.run = this.run.bind(this);
    this.clear = this.clear.bind(this);
  }

  run(){

    if(this.timer != null ){
      // para o cronometro
      clearInterval(this.timer);
      this.timer = null;

      this.setState({botao: 'RUN'});
    }else {
      this.timer = setInterval( ()=> {
        this.setState({numero: this.state.numero + 0.1})
  
      }, 100);
      this.setState({botao: 'PAUSE'});
    }
    

  }

  clear(){
    if(this.timer != null){

      clearInterval(this.timer);
      this.timer = null;
    }

    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      botao: 'RUN'
    })

  }

  render(){
    return(


      <View style={styles.container}>

              <Image 
              source={require('./src/cronometro.png')} 
              style={styles.cronometro}/>

    <Text style={styles.timer}> {this.state.numero.toFixed(1)} </Text> 

                      <View style={styles.btnArea}>
                                <TouchableOpacity style={styles.btn} onPress={this.run}>
    <Text style={styles.btnTexto}> {this.state.botao} </Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.btn} onPress={this.clear}>
                                  <Text style={styles.btnTexto}> RESTART</Text>
                                </TouchableOpacity>

                      </View>

                      <View  style={styles.areaUltimo}>
                      <Text style={styles.textoCorrida}> {this.state.ultimo > 0 ? 'Last Time: ' + this.state.ultimo.toFixed(2) + 's' : ''}</Text>

                      </View>

      </View>

      
    );
  }
}


const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#084887'

  },
  timer:{

    marginTop: -160,
    color:'#fff',
    fontSize: 65,
    fontWeight:'bold'


  },
  btnArea:{
    flexDirection:'row',
    marginTop:70,
    height:40
  }, 
  btn:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    height:40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto:{
    fontSize:20,
    fontWeight:'bold',
    color:'#084887'
  },
  areaUltimo:{
    marginTop: 40,

  },
  textoCorrida:{
    fontSize:25,
    fontStyle:'italic',
    color:'#fff'
  }

});


export default App;