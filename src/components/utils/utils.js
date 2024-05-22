// utils.js
export const calculateDynamicValue = () => {
  const startValue = 98; // Başlangıç değeri (%98)
  const endValue = 100; // Son değer (%100)
  const startYear = 2024; // Başlangıç yılı
  const currentYear = new Date().getFullYear(); // Mevcut yıl
  const currentHour = new Date().getHours(); // Saat bilgisini alır
  const totalYears = 80; // Toplam yıl

  const valueIncrease = endValue - startValue;
  const yearProgress = currentYear - startYear;

  if (yearProgress >= totalYears) {
    return endValue;
  }

  const currentValue =
    startValue +
    (valueIncrease * yearProgress) / totalYears +
    ((24 - currentHour) / 24) * 0.3 +
    0.1;
  return currentValue.toFixed(1); // Virgülden sonra 1 basamak
};
