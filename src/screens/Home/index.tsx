import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';

import { styles } from './styles';
import { Participant } from '../../components/Participant';

export default function Home() {
  const participants = [
    'Caio',
    'Ludmila',
    'Rodrigo',
    'Agatha',
    'Ravi',
    'Ana',
    'Viva',
    'Mariana',
    'Uiuiui',
    'Aiaii',
    'Uma',
    'Louca',
    'Gemedeira',
  ];

  function handleParticipantAdd(name: string) {
    if (participants.includes('Caio'))
      return Alert.alert('Name duplicated', 'The name is duplicated');

    Alert.alert('User added', 'Participante adicionado!');
    return participants.push(name);
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
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleParticipantAdd()}
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
