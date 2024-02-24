import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const setInputValueHandler = () => {
    if (!inputValue) return;
    setGoals((prev) => [
      ...prev,
      { text: inputValue, id: Math.random().toString() },
    ]);
    setInputValue('');
    setIsOpen(false);
  };

  const deleteItems = (id) => {
    setGoals((prev) => {
      return prev.filter((goal) => goal.id !== id);
    });
  };

  const cancelHandler = () => {
    setInputValue('');
    setIsOpen(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <GoalInput
          inputValue={inputValue}
          setInputValueHandler={setInputValueHandler}
          setInputValue={setInputValue}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          cancelHandler={cancelHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem item={itemData.item} deleteItems={deleteItems} />
              );
            }}
            alwaysBounceVertical={false}
            keyExtractor={(item) => {
              return item.id;
            }}
          ></FlatList>
        </View>
        <Button
          title="Add New Goal"
          onPress={() => setIsOpen(true)}
          color="#5e0acc"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 20,
    paddingHorizontal: 16,
    gap: 10,
  },
  goalsContainer: {
    flex: 5,
  },
});
