export const formatterDate = (date: any) => {
  if (!date) return null;

  const dateString = new Date(date).toLocaleDateString();
  const hours = new Date(date).getHours();
  const minutes = new Date(date).getMinutes();

  const newDate = `${dateString} às ${hours}:${minutes}`;
  return newDate;
};

export const formatterDateWithHours = (date: any, hasFullHours: boolean) => {
  if (!date) return null;

  const day = new Date(date).getDate();
  const year = new Date(date).getFullYear();
  const month = new Date(date).toLocaleString('pt-BR', { month: 'long' });
  const hours = new Date(date).getHours();
  const minutes = new Date(date).getMinutes();

  const monthUpperCase = month.charAt(0).toUpperCase() + month.slice(1);
  let newDate;

  hasFullHours
    ? (newDate = `${monthUpperCase} ${day}, ${year}  às ${hours}:${minutes}`)
    : (newDate = `${monthUpperCase} ${day}, ${year} • há ${hours} horas`);

  return newDate;
};
