import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import GoToMessages from "../assets/paper.svg";
import ProfilePicture from "../assets/profile-image.png";

function NavBar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className="mb-3">
        <Nav>
          <Nav.Link href="/">LOGO</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link href="/profile">
            <img
              src={ProfilePicture}
              style={{ maxHeight: "50px", borderRadius: "50%" }}
            />
          </Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link href="/chats">
            <img src={GoToMessages} style={{ maxHeight: "40px" }} />
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavBar;
