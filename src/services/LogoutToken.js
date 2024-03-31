function checkTokenAndDeleteUser(expireDate) {
  setTimeout(() => {
    localStorage.removeItem("user");
    window.location.href = "/";
  }, expireDate);
}

export default checkTokenAndDeleteUser;
