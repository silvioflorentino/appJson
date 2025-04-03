import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Opcao() {
  const navigation = useNavigation();

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Escolha uma categoria:</Text>
      {["Entradas", "Pratos", "Sobremesas"].map((categoria) => (
        <TouchableOpacity 
          key={categoria} 
          style={estilo.botao} 
          onPress={() => navigation.navigate('CardapioCompleto', { categoria })}
        >
          <Text style={estilo.textoBotao}>{categoria}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0e68c',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  botao: {
    backgroundColor: '#d4af37',
    padding: 15,
    marginVertical: 10,
    width: 200,
    alignItems: 'center',
    borderRadius: 10,
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
