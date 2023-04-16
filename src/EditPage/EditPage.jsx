import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const EditPage = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [sale, setSale] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const getOne = (id) => {
    axios
      .get(`https://xurshidbek-server.onrender.com/data/${id}`)
      .then((data) => {
        alert(data.statusText);
        setTitle(data.data.title);
        setLocation(data.data.location);
        setPrice(data.data.price);
        setSale(data.data.sale);
        setImg(data.data.img);
      });
  };

  useEffect(() => {
    getOne(id);
  }, []);

  const editData = () => {
    let obj = {
      title: title,
      location: location,
      price: price,
      sale: sale,
      img: img,
    };
    axios
      .put(`https://xurshidbek-server.onrender.com/data/${id}`, obj)
      .then((res) => {
        alert(res.statusText);
        navigate("/table");
      });
  };

  return (
    <>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={7}>
            <h1 style={{ textAlign: "center" }}>Hello edit page</h1>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>

                <Form.Control
                  value={title}
                  type="text"
                  placeholder="Hotel Name"
                  onChange={(e) => setTitle(e.target.value)}
                />

                {title.length < 1 ? (
                  <p style={{ color: "red" }}>Error</p>
                ) : (
                  <p style={{ color: "blue" }}>succes</p>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  value={location}
                  type="text"
                  placeholder="location"
                  onChange={(e) => setLocation(e.target.value)}
                />
                {location.length < 1 ? (
                  <p style={{ color: "red" }}>error</p>
                ) : (
                  <p style={{ color: "blue" }}>success</p>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  value={price}
                  type="text"
                  placeholder="Price"
                  onChange={(e) => setPrice(e.target.value)}
                />
                {price.length < 1 ? (
                  <p style={{ color: "red" }}>error</p>
                ) : (
                  <p style={{ color: "blue" }}>success</p>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Sale</Form.Label>
                <Form.Control
                  value={sale}
                  type="text"
                  placeholder="sale"
                  onChange={(e) => setSale(e.target.value)}
                />
                {sale.length < 1 ? (
                  <p style={{ color: "red" }}>error</p>
                ) : (
                  <p style={{ color: "blue" }}>success</p>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Img</Form.Label>
                <Form.Control
                  value={img}
                  type="text"
                  placeholder="img"
                  onChange={(e) => setImg(e.target.value)}
                />
                {img.length < 1 ? (
                  <p style={{ color: "red" }}>error</p>
                ) : (
                  <p style={{ color: "blue" }}>success</p>
                )}
              </Form.Group>
              {title.length < 2 ? (
                <Button style={{ width: "100%" }} variant="danger">
                  {" "}
                  Submit{" "}
                </Button>
              ) : (
                <Button
                  style={{ width: "100%" }}
                  variant="primary"
                  onClick={editData}
                >
                  Submit
                </Button>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditPage;
