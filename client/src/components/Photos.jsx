import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SelectedPhoto from './SelectedPhoto';
import SidePhoto from './SidePhoto';

const Photos = () => {
  const { prodId } = useParams();

  const [images, changeImages] = useState([]);
  const [selectedImg, changeSelectedImg] = useState('');

  const setState = async () => {
    const res = await axios.get(`http://localhost:3002/sellers/${prodId}`); // dev
    // const res = await axios.get(`http://54.90.53.234:3002/sellers/${prodId}`); // joey
    // const res = await axios.get(`http://3.15.40.71:3002/sellers/${prodId}`); // pablo
    // const res = await axios.get(`http://52.53.221.54:3002/sellers/${prodId}`); //jon
    changeImages(res.data.products.filter((p) => p.id === Number(prodId))[0].images);
    changeSelectedImg(res.data.products.filter((p) => p.id === Number(prodId))[0].images[0]);
  };

  const changeSelected = (e) => {
    changeSelectedImg(e.target.src);
  };

  useEffect(() => {
    setState();
  }, [prodId]);

  return (
    <>
      <Container>
        <Row>
          <Col md={2}>
            {
              images.map((image) => (
                <SidePhoto
                  key={image}
                  changeSelectedImg={changeSelected}
                  image={image}
                  selectedImg={selectedImg}
                />
              ))
            }
          </Col>
          {/* </div> */}
          <Col>
            {
              selectedImg
              && (
                <SelectedPhoto selectedImg={selectedImg} />
              )
            }
          </Col>
        </Row>
      </Container>
    </>

  );
};

export default Photos;
