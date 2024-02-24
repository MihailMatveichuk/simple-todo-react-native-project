import React from 'react';
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';

export default function GoalInput({
  inputValue,
  setInputValue,
  setInputValueHandler,
  isOpen,
  setIsOpen,
  cancelHandler,
}) {
  const changeInputValue = (text) => {
    setInputValue(text);
  };

  return (
    <Modal visible={isOpen} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/goal.png')} style={styles.image} />
        <TextInput
          placeholder="Your course goal..."
          style={styles.textInput}
          value={inputValue}
          onChangeText={changeInputValue}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={setInputValueHandler}
              color="#5e0acc"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={cancelHandler} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 20,
    alignItems: 'center',
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
    backgroundColor: '#5e6acc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#5e1acc',
    borderRadius: 6,
    padding: 5,
    width: '90%',
  },
  buttons: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
  },
  button: {
    borderBottomColor: '#555555',
    width: '45%',
  },
  image: {
    width: 100,
    height: 100,
  },
});
