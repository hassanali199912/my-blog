

function checkTokenAndDeleteUser(expireDate) {
  if (Date.now() > expireDate) {
    localStorage.removeItem("user");
    window.location.href = "/";
  }
  setInterval(() => {
    checkTokenAndDeleteUser(expireDate);
  }, 1000);
}

export default checkTokenAndDeleteUser;
