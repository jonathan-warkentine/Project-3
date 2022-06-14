import React from "react";
import { Container, Text, Spacer, Button, Row } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Footer.css'

const Footer = () => {
  return (
      <Container className="footer">
        <Spacer y={2} />
        <Text h4 css={{
          textGradient: "45deg, $blue600 -20%, $red600 50%",
        }}
        weight="bold">&copy; {new Date().getFullYear()} - ReEngage</Text>
        {/* <Row justify="center"> */}
          <Text h5 css={{textGradient: "45deg, $red600 -20%, $yellow600 50%"}} weight="bold">brought to you by WWHAMM!</Text>
          <Button color="secondary" ghost auto size="xs" ><FontAwesomeIcon icon={faPeopleGroup} /> ... Meet the Team</Button>
        {/* </Row> */}
      </Container>
  );
};

export default Footer;
