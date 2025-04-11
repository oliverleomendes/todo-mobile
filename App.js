import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import axios from 'axios';

const API_URL = 'http://192.168.0.X:3000/tarefas'; // Substitua pelo IP da sua máquina

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
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{item.titulo}</Text>
      <TouchableOpacity onPress={() => deletarTarefa(item.id)}>
        <Text style={styles.deleteText}>✖</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={styles.title}>📝 Minhas Tarefas</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Digite uma tarefa..."
          value={novaTarefa}
          onChangeText={setNovaTarefa}
          style={styles.input}
        />
        <TouchableOpacity style={styles.addButton} onPress={adicionarTarefa}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.taskList}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1A1A1A',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  addButton: {
    backgroundColor: '#0066CC',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  taskList: {
    paddingBottom: 100,
  },
  taskItem: {
    backgroundColor: '#FFF',
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
  deleteText: {
    color: '#CC0000',
    fontSize: 18,
    paddingHorizontal: 8,
  },
});