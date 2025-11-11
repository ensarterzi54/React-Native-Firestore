import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { db } from '../config/firebase';
import { collection, getDocs, addDoc, doc, updateDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { getTodayDate } from '../utils/dateUtils';

// Context oluştur
const HabitContext = createContext();

// Custom hook - Context'i kullanmak için
export const useHabits = () => {
  const context = useContext(HabitContext);
  if (!context) {
    throw new Error('useHabits must be used within a HabitProvider');
  }
  return context;
};

// Context Provider Component
export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const [currentDate, setCurrentDate] = useState(getTodayDate());

  // Alışkanlıkları Firestore'dan çek
  const fetchHabits = useCallback(async () => {
    try {
      const habitsCollection = collection(db, 'habits');
      const habitsSnapshot = await getDocs(habitsCollection);
      const habitsList = habitsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setHabits(habitsList);
      setIsConnected(true);
      console.log('✅ Alışkanlıklar yüklendi:', habitsList.length);
    } catch (error) {
      console.error('❌ Alışkanlık yükleme hatası:', error);
      setIsConnected(false);
    } finally {
      setLoading(false);
    }
  }, []);

  // Yeni alışkanlık ekle
  const addHabit = async (habitName) => {
    if (habitName.trim() === '') {
      throw new Error('Lütfen bir alışkanlık adı girin!');
    }

    try {
      const habitsCollection = collection(db, 'habits');
      await addDoc(habitsCollection, {
        name: habitName.trim(),
        createdAt: serverTimestamp(),
        dailyRecords: {} // Günlük kayıtlar burada tutulacak
      });
      
      await fetchHabits(); // Listeyi yenile
      console.log('✅ Alışkanlık eklendi:', habitName);
    } catch (error) {
      console.error('❌ Alışkanlık ekleme hatası:', error);
      throw error;
    }
  };

  // Bugün için alışkanlığı işaretle/kaldır
  const toggleHabitToday = async (habitId) => {
    try {
      const today = getTodayDate();
      const habitRef = doc(db, 'habits', habitId);
      const habitDoc = await getDoc(habitRef);
      
      if (habitDoc.exists()) {
        const habitData = habitDoc.data();
        const dailyRecords = habitData.dailyRecords || {};
        const isCompleted = dailyRecords[today] === true;
        
        await updateDoc(habitRef, {
          [`dailyRecords.${today}`]: !isCompleted
        });
        
        await fetchHabits(); // Listeyi yenile
        console.log(`✅ Alışkanlık ${!isCompleted ? 'tamamlandı' : 'iptal edildi'}`);
      }
    } catch (error) {
      console.error('❌ Alışkanlık güncelleme hatası:', error);
      throw error;
    }
  };

  // İlk yüklemede alışkanlıkları çek
  useEffect(() => {
    fetchHabits();
  }, [fetchHabits]);

  // Tarih değişimini kontrol et (gece yarısı geçtiğinde)
  useEffect(() => {
    const checkDateChange = () => {
      const today = getTodayDate();
      if (today !== currentDate) {
        console.log('📅 Tarih değişti, listeyi yeniliyor...');
        setCurrentDate(today);
        fetchHabits(); // Tarih değiştiğinde listeyi yenile
      }
    };

    // Her dakika kontrol et
    const interval = setInterval(checkDateChange, 60000); // 60 saniye = 1 dakika

    // İlk kontrol
    checkDateChange();

    return () => clearInterval(interval);
  }, [currentDate, fetchHabits]);

  const value = {
    habits,
    loading,
    isConnected,
    addHabit,
    toggleHabitToday,
    fetchHabits,
  };

  return (
    <HabitContext.Provider value={value}>
      {children}
    </HabitContext.Provider>
  );
};

