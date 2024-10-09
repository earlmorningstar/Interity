import { useState } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";
import "./Style.css";

function RootLayout() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleDropdown = () => {
    if (isDropdownOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsDropdownOpen(false);
        setIsClosing(false);
      }, 500);
    } else {
      setIsDropdownOpen(true);
    }
  };

  return (
    <>
      <MainNavigation>
        <section className="link-section">
          <header className="pageLogo">INTERITY</header>
          <div className="navlinks">
            <span>Home</span>
            <span>Products</span>
            <span>About</span>
            <span>Gallery</span>
            <span>Blog</span>
          </div>
          <div className="signIn-dropdown-parent">
            <button className="navHide">Sign In</button>
            <div className="hamburger-menu" onClick={toggleDropdown}>
              {isDropdownOpen ? (
                <RiCloseLargeFill color="#333333" size={30} />
              ) : (
                <RxHamburgerMenu color="#333333" size={30} />
              )}
            </div>
          </div>
        </section>
      </MainNavigation>
      {isDropdownOpen && (
        <div className={`navlist-dropdownMenu ${isClosing ? "closing" : ""}`}>
          <div className="navlist-dropdown-items">
            <span>Home</span>
            <span>Products</span>
            <span>About</span>
            <span>Gallery</span>
            <span>Blog</span>
          </div>
        </div>
      )}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
