import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setInlineRedux } from "../../redux/promodex/actions";
import { Row, Col, Image, Modal } from "antd"
import photo1 from "../../assets/cats/photo8.png"
import photo2 from "../../assets/cats/photo2.jpg"
import photo3 from "../../assets/cats/photo9.png"
import photo4 from "../../assets/cats/photo4.jpeg"
import photo5 from "../../assets/cats/photo5.jpg"
import photo6 from "../../assets/cats/photo6.png"
import photo7 from "../../assets/cats/photo7.jpg"
import photo8 from "../../assets/cats/photo1.jpg"
import photo9 from "../../assets/cats/photo3.jpg"


const LandingPageContent = (props) => {
  const [imagePath, setImagePath] = useState(photo1)
  const [isModalOpen, setIsModalOpen] = useState(false);

  let counter = 1


  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    setInterval(() => {
      if (counter === 1) setImagePath(photo2)
      else if (counter === 2) setImagePath(photo3)
      else if (counter === 3) setImagePath(photo4)
      else if (counter === 4) setImagePath(photo5)
      else if (counter === 5) setImagePath(photo6)
      else if (counter === 6) setImagePath(photo7)
      else if (counter === 7) setImagePath(photo8)
      else if (counter === 8) setImagePath(photo9)
      else if (counter === 9) counter = 1

      setIsModalOpen(true)
      counter !== 8 && counter++

    }, 3000)
  }, [])

  return (
    <Row>
      <Col sm={{ span: 14, offset: 5 }} >
        <Image
          width={"100%"}

          src={imagePath}
        />
      </Col>

      <Modal footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Date With me ? &hearts;</p>
      </Modal>
    </Row>
  );
}

const mapState = (globalState) => {
  return { inlineInformation: globalState.inlineInformation };
};
export default connect(mapState, { setInlineRedux })(withRouter(LandingPageContent));
