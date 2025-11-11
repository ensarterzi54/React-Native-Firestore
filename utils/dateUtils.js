// Bugünün tarihini al (YYYY-MM-DD formatında) - Yerel saat dilimini kullan
export const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Alışkanlığın bugün tamamlanıp tamamlanmadığını kontrol et
export const isHabitCompletedToday = (habit, today) => {
  return habit.dailyRecords?.[today] === true;
};

