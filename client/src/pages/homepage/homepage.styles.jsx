import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
  margin-bottom: 150px;

  @media screen and (max-width: 800px) {
    width: 94.6vw;
    margin-bottom: 110px;
  }
`;
