import { TextInput, StyleSheet } from 'react-native';

const InputForm = ({ Placeholder, handleChangeText, value, isSecure = false }) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={Placeholder}
      onChangeText={handleChangeText}
      value={value}
      secureTextEntry={isSecure}
    />
  );
};

export default InputForm;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#ffffff',
    width: 300,
    borderRadius: 50,
    paddingHorizontal: 50,
    flexBasis: 50,
    margin: 8,
  },
});
