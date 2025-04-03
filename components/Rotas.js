import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Opcao from './Opcao';
import CardapioCompleto from './CardapioCompleto';

const Stack = createNativeStackNavigator();

export default function Rotas() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Opcao" component={Opcao} />
      <Stack.Screen name="CardapioCompleto" component={CardapioCompleto} />
    </Stack.Navigator>
  );
}

