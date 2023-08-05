// App.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Epi from './EPI';

const App = () => {
  // Criando objetos EPI
  const epi1 = new Epi(1, 'Protetor Auricular', 'Proteção auditiva', 'Proteção auditiva', 50, 5.99);
  const epi2 = new Epi(2, 'Óculos de Segurança', 'Proteção para os olhos', 'Proteção para os olhos', 30, 8.99);
  const epi3 = new Epi(3, 'Luvas de Segurança', 'Proteção para as mãos', 'Proteção para as mãos', 100, 3.49);
  const epi4 = new Epi(4, 'Máscara Respiratória', 'Proteção respiratória', 'Proteção respiratória', 20, 12.99);
  const epi5 = new Epi(5, 'Capacete de Segurança', 'Proteção para a cabeça', 'Proteção para a cabeça', 40, 15.50);
 

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cadastro de EPI</Text>

      <View style={styles.epiBox1}>
        <Text>ID: {epi1.id}</Text>
        <Text>Nome: {epi1.nome}</Text>
        <Text>Descrição: {epi1.descricao}</Text>
        <Text>Categoria: {epi1.categoria}</Text>
        <Text>Estoque: {epi1.estoque}</Text>
        
      </View>

      <View style={styles.epiBox2}>
        <Text>ID: {epi2.id}</Text>
        <Text>Nome: {epi2.nome}</Text>
        <Text>Descrição: {epi2.descricao}</Text>
        <Text>Categoria: {epi2.categoria}</Text>
        <Text>Estoque: {epi2.estoque}</Text>
        
      </View>

  
      <View style={styles.epiBox3}>
        <Text>ID: {epi3.id}</Text>
        <Text>Nome: {epi3.nome}</Text>
        <Text>Descrição: {epi3.descricao}</Text>
        <Text>Categoria: {epi3.categoria}</Text>
        <Text>Estoque: {epi3.estoque}</Text>
       
      </View>

    
      <View style={styles.epiBox4}>
        <Text>ID: {epi4.id}</Text>
        <Text>Nome: {epi4.nome}</Text>
        <Text>Descrição: {epi4.descricao}</Text>
        <Text>Categoria: {epi4.categoria}</Text>
        <Text>Estoque: {epi4.estoque}</Text>
        
      </View>

 
      <View style={styles.epiBox5}>
        <Text>ID: {epi5.id}</Text>
        <Text>Nome: {epi5.nome}</Text>
        <Text>Descrição: {epi5.descricao}</Text>
        <Text>Categoria: {epi5.categoria}</Text>
        <Text>Estoque: {epi5.estoque}</Text>
        
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    borderRadius: 10, 
  },
  epiBox1: {
    borderWidth: 5,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10, 
  },
  epiBox2: {
    borderWidth: 5,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10, 
  },
  epiBox3: {
    borderWidth: 5,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10, 
  },
  epiBox4: {
    borderWidth: 5,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10, 
  },
  epiBox5: {
    borderWidth: 5,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10, 
  },
});

export default App;



