import "./style.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Hamburger from "../Hamburger";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useColorMode, Button } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
const Navbar = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const [deviceType, setDeviceType] = useState("desktop");
  useEffect(() => {
    updateDeviceType(window.innerWidth);
  });
  useEffect(() => {
    window.addEventListener("resize", () => {
      updateDeviceType(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        updateDeviceType(window.innerWidth);
      });
    };
  });
  const pushToHome = () => {
    navigate("/");
  };

  const [showNav, setNav] = useState(false);
  const hideNav = () => {
    setNav(false);
  };
  const updateDeviceType = (width) => {
    if (width >= 768) {
      setDeviceType("desktop");
      hideNav();
      return;
    }
    setDeviceType("mobile");
  };
  const navVariants = {
    hidden: { y: -10, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 1,
        type: "tween",
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <>
      <AnimatePresence>
        {true ? (
          <motion.nav
            initial="hidden"
            animate="show"
            variants={navVariants}
            exit="hidden"
            className={`${deviceType === "mobile" ? "mobile-nav" : ""}`}
          >
            {deviceType === "desktop" ? (
              <>
                <motion.div className="desktop-navbar">
                  <motion.div className="navheader">
                    <h1 onClick={pushToHome} className="logo pointer">
                      Acharya
                    </h1>
                  </motion.div>
                  <motion.div className="navitems">
                    <Link className="font-bold" to={"/"}>
                      Home
                    </Link>
                    <Link className="font-bold" to={"/events"}>
                      Events
                    </Link>
                    <Link className="font-bold" to={"/attendence"}>
                      Attendence
                    </Link>
                    <Link className="font-bold" to={"/class"}>
                      Classes
                    </Link>
                    <Link className="font-bold" to={"/login"}>
                      Login
                    </Link>
                    <Button onClick={toggleColorMode}>
                      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    </Button>
                  </motion.div>
                </motion.div>
              </>
            ) : (
              <div className="mobile-menu">
                <div className="navbar">
                  <div className="navbar-container">
                    <Link to="/">
                      <div className="navbar-logo">
                        <h1 onClick={pushToHome} className="logo pointer">
                          Acharya
                        </h1>
                      </div>
                    </Link>
                    <div className="navbar-items">
                      <Hamburger
                        onClick={() => {
                          setNav(!showNav);
                        }}
                        show={showNav}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.nav>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {showNav ? (
          <motion.div
            className="mobile-nav-container"
            initial={{
              x: "100%",
            }}
            animate={{
              x: "calc(100vw - 50%)",
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              type: "tween",
              duration: 0.3,
            }}
          >
            <motion.div className="mobnavitems">
              <Hamburger
                onClick={() => {
                  setNav(!showNav);
                }}
                show={showNav}
              />
              <div className="mobile-nav-items flex flex-col">
                <Link
                  onClick={() => setNav(false)}
                  className="font-bold"
                  to={"/"}
                >
                  Home
                </Link>
                <Link
                  onClick={() => setNav(false)}
                  className="font-bold"
                  to={"/events"}
                >
                  Events
                </Link>
                <Link
                  onClick={() => setNav(false)}
                  className="font-bold"
                  to={"/attendence"}
                >
                  Attendence
                </Link>
                <Link
                  onClick={() => setNav(false)}
                  className="font-bold"
                  to={"/class"}
                >
                  Classes
                </Link>
                <Link
                  onClick={() => setNav(false)}
                  className="font-bold"
                  to={"/login"}
                >
                  Login
                </Link>
              </div>
            </motion.div>
            <Button
              w={"50%"}
              onClick={() => toggleColorMode() || setNav(false)}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export { Navbar };
