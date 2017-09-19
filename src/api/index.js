function loginByName({ name, password }) {
  setTimeout(() => {
    // name = 'haha';
    // password = '12345678';
  }, 2000);
}

function loginByToken({ token }) {
  setTimeout(() => {
    // token = token,length;
  }, 2000);
}

export default { loginByName, loginByToken };
