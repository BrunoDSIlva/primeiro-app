import React, { Component } from 'react';
import{
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,} from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
      textoFrase: '',
      img: require('./src/biscoito.png'),



    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'A vida trará coisas boas se tiveres paciência.',
      'Não compense na ira o que lhe falta na razão.',
      'A maior de todas as torres começa no solo.',
      'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
      'A adversidade é um espelho que reflete o verdadeiro eu.',
      'Você é jovem apenas uma vez. Depois precisa inventar outra desculpa.',
      'Surpreender e ser surpreendido é o segredo do amor.',
    ];

  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random()* this.frases.length );

    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio ] + '" ',
      img: require('./src/biscoitoAberto.png')
    });

  }

  render(){

    return(
       
      <View style={styles.container} >

        <Image 
        source ={this.state.img}
        style={styles.img}
        />
        <Text style={styles.textoFrase}>
          {this.state.textoFrase}
        </Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Abrir Biscoito</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.footer}>By Bruno Silva</Text>


        
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },
  img: {
     width:250,
     height:250

  },
  textoFrase:{
    fontSize:20,
    color: '#dd7b22',
    margin: 30,
    fontStyle:'italic',
    textAlign: 'center'
  },
  botao:{
    width:230,
    height:50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize:18,
    fontWeight:'bold',
    color:'#dd7b22',
  },
  footer:{
    margin:80
  }

})

export default App;