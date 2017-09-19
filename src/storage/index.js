const userKey = 'user';

function saveUser({ name, token, decay }) {
  localStorage.setItem(userKey, JSON.stringify({ name, token, decay }));
}

function getUser() {
  const u = localStorage.get(userKey);
  return u ? JSON.parse(u) : undefined;
}

export default { saveUser, getUser };
