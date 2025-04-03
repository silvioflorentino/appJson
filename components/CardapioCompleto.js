import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView,Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import cardapioData from './cardapio.json'; // Importando o JSON


const imagens = {
  "salada": require("../assets/fazenda.jpg"),
  "bruschetta": require("../assets/snack-icon.png"),
  "ceviche": require("../assets/snack-icon.png"),
  "feijoada": require("../assets/snack-icon.png"),
  "virado": require("../assets/praia.jpg"),
  "strogonoff": require("../assets/snack-icon.png"),
  "pudim": require("../assets/snack-icon.png"),
  "brigadeiro": require("../assets/snack-icon.png"),
  "torta": require("../assets/snack-icon.png")
};


export default function CardapioCompleto() {
  const route = useRoute();
  const [categoria, setCategoria] = useState(route.params?.categoria || 'Entradas');

  useEffect(() => {
    if (route.params?.categoria) {
      setCategoria(route.params.categoria);
    }
  }, [route.params]);

  return (
    <View style={estilo.container}>
      <ScrollView>
        <Text style={estilo.titulo}>{categoria}</Text>
        {cardapioData[categoria]?.map((item, index) => (
          <ItemCardapio
            key={index}
            nome={item.nome}
            imagem={item.imagem}
            descricao={item.descricao}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const ItemCardapio = ({ nome, imagem, descricao }) => {
  const source = imagens[imagem];
  return (
    <View style={{ alignItems: 'center', marginVertical: 20 }}>
      <Text style={estilo.subtitulo}>{nome}</Text>
      <Image source={source} style={estilo.fotos} />
      <Text style={estilo.descritivo}>{descricao}</Text>
    </View>
  );
};

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0e68c',
  },
  titulo: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 40,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  fotos: {
    width: 300,
    height: 250,
    borderRadius: 50,
  },
  subtitulo: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  descritivo: {
    textAlign: 'center',
    marginHorizontal: 20,
    lineHeight: 20,
    marginVertical: 20,
  },
});
