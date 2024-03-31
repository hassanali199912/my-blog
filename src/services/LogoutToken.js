function checkTokenAndDeleteUser(expireDate) {
  setTimeout(() => {
    localStorage.removeItem("user");
    window.location.href = "/";
  }, expireDate);
}

export const Checklogin = () => {
  const userData = localStorage.getItem("user");
  if (!userData) {
    return false;
  }
  const data = JSON.parse(userData);

  const expire = new Date(data.expireeDate);
  const today = new Date();
  if (today > expire) {
    localStorage.removeItem("user");
    window.location.href = "/";
    return false;
  }
  const newTimer = expire.getTime() - today.getTime();
  checkTokenAndDeleteUser(newTimer);
  return true;
};

export default checkTokenAndDeleteUser;
