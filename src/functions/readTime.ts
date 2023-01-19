export const postReadTime = (text: any) => {
  const words = 400; // 400 words per minute
  const seconds = 60; // 1 minute has 60 seconds

  const wordArray = text?.split(' ').length;
  const calculateMinutesReading = Math.round(
    (wordArray * seconds) / words / seconds,
  );
  const formatterText = ` • ${calculateMinutesReading} min de leitura`;

  if (!text) return null;
  if (calculateMinutesReading < 1) return ` • ${1} min de leitura`;

  return formatterText;
};
