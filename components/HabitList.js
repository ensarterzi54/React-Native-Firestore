import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useHabits } from '../context/HabitContext';
import HabitItem from './HabitItem';

const HabitList = () => {
  const { habits, loading } = useHabits();

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>Alışkanlıklar yükleniyor...</Text>
      </View>
    );
  }

  if (habits.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.emptyText}>Henüz alışkanlık eklenmedi.</Text>
        <Text style={styles.emptySubtext}>Yukarıdaki formdan yeni alışkanlık ekleyebilirsiniz.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={habits}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <HabitItem habit={item} />}
      contentContainerStyle={styles.listContent}
    />
  );
};

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
  listContent: {
    padding: 15,
    paddingBottom: 30,
  },
});

export default HabitList;

