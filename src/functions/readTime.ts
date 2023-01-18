export const PostReadTime = (text: any) => {
  const words = 400; // 400 words per minute
  const seconds = 60; // 1 minute has 60 seconds

  const wordArray = text?.split(' ').length;
  const calculateMinutesReading = Math.round(
    (wordArray * seconds) / words / seconds,
  );

  if (calculateMinutesReading < 1) return 1;

  return calculateMinutesReading;
};
