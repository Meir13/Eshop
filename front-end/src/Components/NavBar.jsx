import { Navbar, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "./NavBar.css";

function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Link
            className="ms-2"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </Link>

          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>
                <img
                  src="/images/AMZN_BIG.D.png"
                  alt="amazon logo"
                  width={100}
                ></img>
              </Navbar.Brand>
            </LinkContainer>

            <nav>
              <input type="text"></input>
            </nav>

            <Link to="/cart" className="nav-link me-4 ms-4">
              Cart
            </Link>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
export default NavBar;
