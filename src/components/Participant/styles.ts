import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F1E25',
  },

  name: {
    flex: 1,
    color: '#FFF',
    fontSize: 16,
    marginLeft: 16,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E23C44',
  },
});
