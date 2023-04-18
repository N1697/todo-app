//The services is strictly for just making the HTTP request and sending the data back
//and setting any data in local storage
import axios from "axios";

const API_URL = "https://todo-app-r5i6.onrender.com/api/users/";

//Register
const register = async (userData) => {
  //Get the response from the backend
  const response = await axios.post(API_URL, userData);

  //Check if we get the response and put it in localStorage
  //When we use axios, it actually puts the data inside an object called 'data'
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
  /**
   This is the data we received:

   res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
   */
};

//Login
const login = async (userData) => {
  //Get the response from the backend
  const response = await axios.post(API_URL + "login", userData);

  //Check if we get the response and put it in localStorage
  //When we use axios, it actually puts the data inside an object called 'data'
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
  /**
   This is the data we received:

   res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
   */
};

//Logout
const logout = () => {
  localStorage.removeItem("user");
};

//Export the functions that are created
const authService = {
  register,
  login,
  logout,
};

export default authService;
