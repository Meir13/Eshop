import React, { useEffect, useState } from "react";
import { getFilterUrl } from "../../Services/getFilterUrl";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { search, pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/search" && !query) return;

    const link = getFilterUrl(search, {
      query: query || "all",
    });

    navigate(link);
  }, [query]);

  const submitHandler = (e) => {
    e.preventDefault();
    const link = getFilterUrl(search, {
      query: query || "all",
    });

    navigate(link);
  };
  return (
    <Form onSubmit={submitHandler} className="d-flex me-auto w-120">
      <InputGroup>
        <FormControl
          area-describedby="button-search"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
        ></FormControl>
        <Button variant="outline-primary" type="submit" id="button-search">
          <i className="fas fa-search"></i>
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBox;
