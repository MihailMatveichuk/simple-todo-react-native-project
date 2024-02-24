import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function GoalItem({ item, deleteItems }) {
  return (
    <View style={styles.goalViewText}>
      <Pressable
        android_ripple={{ color: '#835760' }}
        onPress={deleteItems.bind(this, item.id)}
        style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
      >
        <Text style={styles.textItem}>{item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalViewText: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#5e0acc',
  },
  textItem: {
    color: '#FFFFFF',
    borderRadius: 8,
    padding: 8,
  },
});
