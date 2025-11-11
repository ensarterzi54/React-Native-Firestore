import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { HabitProvider } from './context/HabitContext';
import Header from './components/Header';
import AddHabitForm from './components/AddHabitForm';
import HabitList from './components/HabitList';

export default function App() {
  return (
    <HabitProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <AddHabitForm />
        <HabitList />
      </View>
    </HabitProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
