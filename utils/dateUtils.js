// Bugünün tarihini al (YYYY-MM-DD formatında)
export const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

// Alışkanlığın bugün tamamlanıp tamamlanmadığını kontrol et
export const isHabitCompletedToday = (habit, today) => {
  return habit.dailyRecords?.[today] === true;
};

