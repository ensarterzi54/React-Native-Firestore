import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useHabits } from '../context/HabitContext';
import { getTodayDate, isHabitCompletedToday } from '../utils/dateUtils';

const HabitItem = ({ habit }) => {
  const { toggleHabitToday } = useHabits();
  const today = getTodayDate();
  const isCompleted = isHabitCompletedToday(habit, today);

  const handleToggle = async () => {
    try {
      await toggleHabitToday(habit.id);
    } catch (error) {
      Alert.alert('Hata', 'Alışkanlık güncellenirken bir hata oluştu!');
    }
  };

  return (
    <View style={styles.habitItem}>
      <View style={styles.habitContent}>
        <Text style={styles.habitName}>{habit.name}</Text>
        <Text style={styles.habitStatus}>
          {isCompleted ? '✅ Bugün tamamlandı' : '⏳ Henüz tamamlanmadı'}
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.checkButton, isCompleted && styles.checkButtonCompleted]}
        onPress={handleToggle}
      >
        <Text style={[styles.checkButtonText, isCompleted && styles.checkButtonTextCompleted]}>
          {isCompleted ? '✓' : '○'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  habitItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    alignItems: 'center',
  },
  habitContent: {
    flex: 1,
  },
  habitName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  habitStatus: {
    fontSize: 14,
    color: '#666',
  },
  checkButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ddd',
  },
  checkButtonCompleted: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  checkButtonText: {
    fontSize: 24,
    color: '#666',
    fontWeight: 'bold',
  },
  checkButtonTextCompleted: {
    color: '#fff',
  },
});

export default HabitItem;

