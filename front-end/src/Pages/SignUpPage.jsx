import { React, useContext, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Title from "../Components/shared/Title";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Store } from "../Context/Store";
import { toast } from "react-toastify";
import axios from "axios";
import { USER_SIGNIN } from "../Reducers/Actions";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const { data } = await axios.post("/users/signup", {
        name,
        password,
        email,
      });

      ctxDispatch({ type: USER_SIGNIN, payload: data });

      navigate(redirect);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    userInfo && navigate(redirect);
  }, [navigate, redirect, userInfo]);

  return (
    <>
      <Container className="small-container">
        <Title>Sign Up</Title>

        <h1 className="my-3">Sign Up</h1>

        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Repeat password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <div className="mb-3">
            <Button type="submit">Sign Up</Button>
          </div>

          <div className="mb-3">
            Already have an account?{" "}
            <Link to={`/signIn?redirect=${redirect}`}>Sign in here</Link>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default SignUpPage;
