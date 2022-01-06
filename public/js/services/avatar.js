const baseUrl = 'https://i.pravatar.cc/';

export const getAvatar = async () => {
  const response = await fetch(`${baseUrl}/300`, { mode: 'no-cors' });
  const data = await response.json();
  console.log(data);
  return data;
};