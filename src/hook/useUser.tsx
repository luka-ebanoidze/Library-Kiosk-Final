const useUser = () => {
  const setUser = (userData: any) => {
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const getUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  };

  const removeUser = () => {
    localStorage.removeItem("user");
  };

  return { setUser, getUser, removeUser };
};

export default useUser;
