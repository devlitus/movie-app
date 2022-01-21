export const showAvatar = async (username) => {
  const header = document.getElementById("header");
  header.innerHTML = `
  <h1>Hola, ${username}</h1>
  <img class="avatar" src="https://i.pravatar.cc/150" alt="avatar" />`;
};
