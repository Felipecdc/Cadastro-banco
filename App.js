import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { Picker } from "@react-native-picker/picker";
import {View, Text, StyleSheet, Switch, TextInput, TouchableOpacity } from 'react-native';
import Slider from "@react-native-community/slider";


export default function App(){

  const [valor, setValor] = useState(500);

  const [selecionarSexo, setSelecionarSexo] = useState(0);
  const [sexo, setSexo] = useState([
    {key: 1, nome: 'Masculino'},
    {key: 2, nome: 'Feminino'}
  ]);

  let MF = sexo.map((v, k) => {
    return <Picker.Item key={k} value={v.key} label={v.nome} />; 
  });

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  const handlenome = (text) => {
    setNome(text);
  }

  const handleidade = (text) => {
    setIdade(text);
  }

  const handletoucha = () => {
    if(nome == ""){
      alert('Preencha todos os campos')
    }else{
    const message = `\nCliente: ${nome}\n\nLimite: ${valor}\n\nConta: 135546`;
    alert(message)

    setNome("");
    setIdade("");
    }
  }

  return(
    <View style={styles.container}>
      <StatusBar barStyle='light-content'/>

      <Text style={{textAlign:'center', fontSize: 50, fontWeight:'bold', marginTop: 180}}>
        Monit Bank</Text>

        <View style={{alignItems: 'center', marginTop: 50, width: '100%'}}>
          <TextInput style={styles.input} value={nome} onChangeText={handlenome} placeholder="Digete seu nome"></TextInput>
          <TextInput style={styles.input} value={idade} onChangeText={handleidade} placeholder="Digite sua idade"></TextInput>

          <View style={{width: 200, backgroundColor: '#f0f2f2', alignItems:'center', marginTop: 10, borderRadius: 10, borderWidth: 1, borderColor: '#cccfcf'}}>
          <Picker
          selectedValue={selecionarSexo}
          onValueChange={(itemValue, itemIndex) => setSelecionarSexo(itemValue)}
          style={{width: '100%', }}
          >
            {MF}
          </Picker>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 40, marginBottom: 5}}>
          <Text style={{fontSize: 18, paddingRight: 10}}>Limite disponivel</Text>
          <Text style={{backgroundColor: 'white', verticalAlign: 'middle', textAlign: 'center', width: 50, height: 30, fontSize: 13, borderWidth: 1, borderColor: '#cccfcf', borderRadius: 4, }}>${valor.toFixed(0)}</Text>
          </View>

          <Slider
          minimumValue={300}
          maximumValue={1200}
          style={{width: '80%'}}
          value={valor}
          onValueChange={(valorSelecionado) => setValor(valorSelecionado)}
          />
        </View>

      <TouchableOpacity onPress={handletoucha} style={styles.botao}>
        <Text style={styles.textbotao}>Criar conta</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f7f7',
  },
  input:{
    width: '80%',
    height: 40,
    padding: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 10,
    backgroundColor: 'white'
  },
  botao:{
    width: 130,
    height: 35,
    marginTop: 70,
    backgroundColor: '#b7d1ed',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#9ab8d9'
  },
  textbotao:{
    fontSize: 20,
    textAlign: 'center'
  }
})