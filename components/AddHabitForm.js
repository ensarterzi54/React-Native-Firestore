import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useHabits } from '../context/HabitContext';

const AddHabitForm = () => {
  const [newHabit, setNewHabit] = useState('');
  const { addHabit } = useHabits();

  const handleAddHabit = async () => {
    try {
      await addHabit(newHabit);
      setNewHabit('');
    } catch (error) {
      Alert.alert('Hata', error.message || 'Alışkanlık eklenirken bir hata oluştu!');
    }
  };

  return (
    <View style={styles.addHabitContainer}>
      <TextInput
        style={styles.input}
        placeholder="Yeni alışkanlık ekle (örn: Spor yap, Kitap oku)"
        value={newHabit}
        onChangeText={setNewHabit}
        onSubmitEditing={handleAddHabit}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddHabit}>
        <Text style={styles.addButtonText}>Ekle</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addHabitContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginRight: 10,
    backgroundColor: '#f9f9f9',
  },
  addButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AddHabitForm;

