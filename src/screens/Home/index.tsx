import { useState } from 'react';
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Participant } from '../../components/Participant';
import { styles } from './styles';

export default function Home() {
  const [participants, setParticipants] = useState(['Caio']);
  const [text, setText] = useState('');

  function handleParticipantAdd(name: string) {
    if (participants.includes(name))
      return Alert.alert('Name duplicated', 'The name is duplicated');

    Alert.alert('User added', 'Participante adicionado!');

    setParticipants((prevState) => [...prevState, name]);
    return setText('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      'Remove participant',
      `Você deseja remover o participante ${name}?`,
      [
        {
          text: 'Sim',
          onPress: () => Alert.alert('Removido!'),
        },
        {
          text: 'Não',
          style: 'cancel',
          isPreferred: true,
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={(newText) => setText(newText)}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleParticipantAdd(text)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença
          </Text>
        )}
      />
    </View>
  );
}
