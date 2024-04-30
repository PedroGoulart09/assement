import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

// Styled components
const ContainerCard = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: -400px;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const CardWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  width: 90%;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Content = styled.div`
  margin-bottom: 10px;
`;

const Divider = styled.div`
  position: relative;
`;

const HorizontalLine = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 10px 0;
`;

const VerticalLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 20px);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Division = styled.div`
  flex: 1;
  padding: 10px;
  border-bottom: ${(props) => (props.last ? "none" : "1px solid #ccc")};

  @media (min-width: 768px) {
    border-bottom: none;
    border-right: ${(props) => (props.last ? "none" : "1px solid #ccc")};
  }
`;

const TextColor = styled.p`
  color: ${(props) => props.color || "#5e5f60"};
  font-size: ${(props) => props.fontSize || "inherit"};
`;

const ValuesUploadAndLines = styled.span`
  color: #000;
  margin: 0 5px;
`;

const ValuesUploads = styled.span`
  color: green;
  font-size: 30px;
`;

// React Component
const Card = ({ data }) => {
  return (
    <ContainerCard>
      <CardWrapper>
        <Header>
          <HeaderContent>
            <FontAwesomeIcon icon={faUpload} style={{ color: "blue" }} />
            <TextColor fontWeight="bold">Sales</TextColor>
          </HeaderContent>
          <FontAwesomeIcon icon={faInfoCircle} style={{ color: "#ccc" }} />
        </Header>
        <Content>
          <TextColor color="#5e5f60" fontSize="15px">
            You had
            <ValuesUploadAndLines>
              {data.salesOverview?.uploads} uploads
            </ValuesUploadAndLines>
            and
            <ValuesUploadAndLines>
              {data.salesOverview?.linesSaved} lines added
            </ValuesUploadAndLines>
          </TextColor>
        </Content>
        <Divider>
          <HorizontalLine />
          <VerticalLine>
            <Division>
              <ValuesUploads>
                {data.salesOverview?.successfulUploads}%
              </ValuesUploads>
              <TextColor>UPLOAD SUCCESS</TextColor>
            </Division>
            <Division last>
              <ValuesUploads>{data.salesOverview?.linesSaved}%</ValuesUploads>
              <TextColor>LINES SAVED</TextColor>
            </Division>
          </VerticalLine>
        </Divider>
      </CardWrapper>
    </ContainerCard>
  );
};

export default Card;
