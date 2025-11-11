import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getTodayDate } from '../utils/dateUtils';

const Header = () => {
  const today = getTodayDate();

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Alışkanlık Takip Uygulaması</Text>
      <Text style={styles.dateText}>Bugün: {today}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#007AFF',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  dateText: {
    fontSize: 14,
    color: '#E3F2FD',
  },
});

export default Header;

