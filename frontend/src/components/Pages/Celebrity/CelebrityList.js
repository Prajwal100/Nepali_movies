import React, { useEffect } from "react";
import SingleCelebrity from "./singleCelebrity";
import { Container, Row, Col } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { getCelebrities } from "../../../actions/celebrityActions";
import Loader from "../layout/Loader";

//toastr
import toast, { Toaster } from "react-hot-toast";
import Layout from "../layout";

const CelebrityList = () => {
  const dispatch = useDispatch();

  const { loading, celebrities, error } = useSelector(
    (state) => state.celebrities
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
    }

    dispatch(getCelebrities());
  }, [dispatch, error]);
  return (
    <Layout>
      <Container>
        <Toaster />
        {loading ? (
          <Loader />
        ) : (
          <Row>
            <Col xs={12} className="mt-3">
              <h2>Nepali Celebrities</h2>
            </Col>

            {celebrities &&
              celebrities.map((celebrity) => (
                <SingleCelebrity
                  key={celebrity._id}
                  name={celebrity.name}
                  img={celebrity.image}
                  id={celebrity._id}
                />
              ))}
          </Row>
        )}
      </Container>
    </Layout>
  );
};
export default CelebrityList;
