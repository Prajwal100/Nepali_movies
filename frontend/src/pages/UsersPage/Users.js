import React, { useEffect } from "react";
import SingleUser from "../../components/user/singleUser";
import { Container, Row, Col } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { getCelebrities } from "../../actions/celebrityActions";
import Loader from "../../components/Layout/Loader";

const UsersPage = () => {
  const dispatch = useDispatch();

  const { loading, celebrities, error } = useSelector(
    (state) => state.celebrities
  );

  useEffect(() => {
    dispatch(getCelebrities());
  }, [dispatch]);
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <Row>
          <Col xs={12} className="mt-3">
            <h2 style={{ textDecoration: "underline" }}>
              Nepali Actor & Acress
            </h2>
          </Col>

          {celebrities &&
            celebrities.map((celebrity) => (
              <SingleUser name={celebrity.name} img={celebrity.image} />
            ))}
        </Row>
      )}
    </Container>
  );
};
export default UsersPage;
