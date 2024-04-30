import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Card from "../card/card";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const Overview = styled.span`
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 20px;
`;

const SupportContainer = styled.div`
  margin: 20px;

  @media (min-width: 768px) {
    margin: 70px;
    margin-top: 50px;
  }
`;

const SupportText = styled.p`
  color: #5e5f60;
  @media (min-width: 768px) {
    text-align: center;
  }
`;

const SupportInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const SupportInitial = styled.div`
  background-color: yellow;
  width: 50px;
  height: 50px;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const SupportDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const SupportName = styled.p`
  color: #070707;
  margin-bottom: -12px;
`;

const EmailInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const EmailIcon = styled(FontAwesomeIcon)`
  color: #5e5f60;
  margin-right: 7px;
`;

const Email = styled.p`
  color: #5e5f60;
  margin-right: 7px;
`;

const Phone = styled.p`
  color: #5e5f60;
  margin-left: 10px;
`;

const AccountOverview = ({ data }) => {
  console.log(data);

  return (
    <>
      <Container>
        <Overview>Account Overview</Overview>
        <SupportContainer>
          <SupportText>YOUR FEEFO SUPPORT CONTACT</SupportText>
          <SupportInfo>
            <SupportInitial>S</SupportInitial>
            <SupportDetails>
              <SupportName>{data.supportContact.name}</SupportName>
              <EmailInfo>
                <EmailIcon icon={faEnvelope} className="email-icon" />
                <Email>{data.supportContact.email}</Email>
                <Phone>020 3362 4208</Phone>
              </EmailInfo>
            </SupportDetails>
          </SupportInfo>
        </SupportContainer>
      </Container>
      <Card data={data} />
    </>
  );
};

export default AccountOverview;
