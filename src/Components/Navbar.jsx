import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Button, Heading } from "@chakra-ui/react";
import { ThemeContext } from "../Context/ThemeContext";
const Navbar = () => {
  const { isAuth, login, logout } = useContext(AuthContext);
  const { isLight, themeToggle } = useContext(ThemeContext);
  return (
    <div>
      <div className="nav">
        <Heading>IsAuth WebChecker</Heading>
        <div className="btndiv">
          <Button
            colorScheme={"teal"}
            onClick={() => {
              if (isAuth) {
                logout();
                console.log("User has Logout");
              } else {
                login("Atul-Tiwari", "LoginPass");
                console.log(
                  "User has login with \nName:Komal Tiwari \nPassword:LoginPass"
                );
              }
            }}
          >
            {isAuth ? "Logout" : "Login"}
          </Button>
          <Button size={"md"} colorScheme="teal" onClick={themeToggle}>
            {isLight ? "Dark Mode" : "Light Mode"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
