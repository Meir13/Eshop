import { Navbar, Container, Badge, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useContext } from "react";
import { Store } from "../Context/Store";
import "./NavBar.css";
import { USER_SIGNOUT } from "../Reducers/Actions";
import SearchBox from "./searchBox/SearchBox";

function NavBar() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  const { cartItems } = cart;

  const signOutHandler = () => {
    ctxDispatch({ type: USER_SIGNOUT });
  };
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

            <nav className="d-flex mx-auto align-items-center">
              <SearchBox />
            </nav>

            <Link to="/cart" className="nav-link me-4 ms-4">
              <i className="fas fa-shopping-cart text-white"></i>

              {cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </Badge>
              )}
            </Link>

            {userInfo ? (
              <NavDropdown className="text-white me-5" title={userInfo.name}>
                <Link
                  className="dropdown-item"
                  to="#signout"
                  onClick={signOutHandler}
                >
                  Sign Out
                </Link>
              </NavDropdown>
            ) : (
              <Link className="text-white" to="/signin">
                Sign In
              </Link>
            )}
          </Container>
        </Navbar>
      </header>
    </>
  );
}
export default NavBar;
