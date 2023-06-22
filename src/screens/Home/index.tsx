import { Text, TextInput, View, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { Participant } from '../../components/Participant';

export default function Home() {
  function handleParticipantAdd() {
    console.log('Clicou no botão de adicionar');
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

      <Participant name="Caio"/>
      <Participant name="Milinha" />
      <Participant name="Ludmila" />
    </View>
  );
}
