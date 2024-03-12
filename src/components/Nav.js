import styled from "styled-components";

const Nav = () => {
  return (
    <NavBar>
      <h1>
        <a id="logo" href="#">
          Capture
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">1. About Us</a>
        </li>
        <li>
          <a href="#">2. Our Work</a>
        </li>
        <li>
          <a href="#">3. Contact US</a>
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
    justify-content: space-between;
    align-items: center;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 5rem;
    position: relative;
  }
`;

export default Nav;
