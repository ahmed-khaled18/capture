import styled from "styled-components";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <NavBar>
      <h1>
        <Link id="logo" to="/capture/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/capture/">1. About Us</Link>
        </li>
        <li>
          <Link to="/capture/work">2. Our Work</Link>
        </li>
        <li>
          <Link to="/capture/contact">3. Contact US</Link>
        </li>
      </ul>
    </NavBar>
  );
};

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  margin: auto;
  background: #282828;
  padding: 1rem 5rem;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    align-items: center;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default Nav;
