import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
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

  function handleParticipantAdd() {
    console.log('Clicou no botão de adicionar');
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você quer remover o participante ${name}`);
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

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} >
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={() => handleParticipantRemove('Caio')}
          />
        ))}
      </ScrollView>
    </View>
  );
}
