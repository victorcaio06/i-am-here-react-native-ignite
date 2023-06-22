import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#131016',
  },

  eventName: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },

  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
  },

  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },

  input: {
    flex: 1,
    height: 56,
    padding: 16,
    fontSize: 16,
    color: '#FFF',
    marginRight: 8,
    borderRadius: 5,
    backgroundColor: '#1F1E25',
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
    backgroundColor: '#31CF67',
  },
});
