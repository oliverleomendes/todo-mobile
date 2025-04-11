import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';

const API_URL = 'http://localhost:3000/tarefas'; // Altere para o IP da máquina com a API, se necessário

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const carregarTarefas = async () => {
    try {
      const response = await axios.get(API_URL);
      setTarefas(response.data);
    } catch (error) {
      console.error('Erro ao carregar tarefas:', error);
    }
  };

  const adicionarTarefa = async () => {
    if (!novaTarefa.trim()) return;
    try {
      await axios.post(API_URL, { titulo: novaTarefa, concluida: false });
      setNovaTarefa('');
      carregarTarefas();
    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error);
    }
  };

  const deletarTarefa = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      carregarTarefas();
    } catch (error) {
      console.error('Erro ao deletar tarefa:', error);
    }
  };

  useEffect(() => {
    carregarTarefas();
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text>{item.titulo}</Text>
      <TouchableOpacity onPress={() => deletarTarefa(item.id)}>
        <Text style={{ color: 'red' }}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20, marginTop: 40 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Minhas Tarefas</Text>

      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <TextInput
          placeholder="Nova tarefa"
          value={novaTarefa}
          onChangeText={setNovaTarefa}
          style={{ flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5 }}
        />
        <Button title="Adicionar" onPress={adicionarTarefa} />
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}