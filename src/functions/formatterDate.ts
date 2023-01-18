export const formatterDate = (date: any) => {
  const dateString = new Date(date).toLocaleDateString();
  const hours = new Date(date).getHours();
  const minutes = new Date(date).getMinutes();

  const newDate = `${dateString} às ${hours}:${minutes}`;
  return newDate;
};

export const formatterDateWithHours = (date: any) => {
  const day = new Date(date).getDate();
  const year = new Date(date).getFullYear();
  const month = new Date(date).toLocaleString('pt-BR', { month: 'long' });
  const hours = new Date(date).getHours();

  const monthUpperCase = month.charAt(0).toUpperCase() + month.slice(1);

  const newDate = `${monthUpperCase} ${day}, ${year} •  há ${hours} horas`;
  return newDate;
};
