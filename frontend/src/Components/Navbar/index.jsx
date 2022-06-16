import "./style.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Hamburger from "../Hamburger/index";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  HomeIcon,
  ExploreIcon,
  NotificationIcon,
  MessageIcon,
  BookMarkIcon,
  ListIcon,
  ProfileIcon,
  MoreIcon,
} from "..";
const Navbar = () => {
  const navigate = useNavigate();
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
                    <Link className="font-bold" to={"/leaderboard"}>
                      Leader Board 🚀
                    </Link>
                    <Link className="font-bold" to={"/login"}>
                      Login
                    </Link>
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
              // ease: [0.87, 0.07, 0.37, 0.97],
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
              s
              <div className="mobile-nav-items">
                <p
                  className="flex items-center"
                  onClick={() => navigate("/") || setNav(!setNav)}
                >
                  <HomeIcon />
                  Home
                </p>
                <p
                  className="flex items-center"
                  onClick={() => navigate("/explore") || setNav(!setNav)}
                >
                  <ExploreIcon />
                  Explore
                </p>
                <p
                  onClick={() => navigate("/notification") || setNav(!setNav)}
                  className="flex items-center"
                >
                  <NotificationIcon />
                  Notifications
                </p>
                <p
                  onClick={() => navigate("/messages") || setNav(!setNav)}
                  className="flex items-center"
                >
                  <MessageIcon />
                  Message
                </p>
                <p
                  onClick={() => navigate("/bookmarks") || setNav(!setNav)}
                  className="flex items-center"
                >
                  <BookMarkIcon />
                  Bookmarks
                </p>
                <p
                  onClick={() => navigate("/lists") || setNav(!setNav)}
                  className="flex items-center"
                >
                  <ListIcon />
                  Lists
                </p>
                <p
                  onClick={() => navigate("/profile") || setNav(!setNav)}
                  className="flex items-center"
                >
                  <ProfileIcon />
                  Profile
                </p>
                <p
                  onClick={() => navigate("/setting") || setNav(!setNav)}
                  className="flex items-center"
                >
                  <MoreIcon />
                  Settings
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export { Navbar };
