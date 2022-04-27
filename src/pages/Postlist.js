import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import ListTag from "../components/postListFolder/ListTag";
import CampingElementComponents from "../components/postListFolder/CampingElementComponents";
import PageNaition from "../components/postListFolder/PageNaition";
import axios from "axios";

// {
//   /* <NavLink to="/postdetail">게시글 상세페이지</NavLink> */
// }
const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  width: 1200px;
  height: max-content;

  section {
    margin-bottom: 20px;
  }

  .category {
    font-size: 1.5rem;
    margin-top: 50px;
    /* margin-bottom: 20px; */
  }

  .position {
    font-size: 1rem;
    margin-bottom: 20px;
    justify-content: space-between;
  }

  input,
  textarea {
    border-radius: 3px;
    border: 1px solid #aaa;
  }
`;

const InnerContainer = styled.div`
  grid-column: 2 / 12;
  height: max-content;
  /* @media screen and (max-width: 500px) {
    display: block;
  } */
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;

const CampingElementLine = styled.div`
  width: 1150px;
  height: auto;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 700px) {
    display: block;
  }
`;
const Postlist = () => {
  const RecivePostList = () => {
    axios({
      method:"GET",
      url:"",
      params:{

      }
    })
  };

  return (
    <Container>
      <InnerContainer>
        <MainBox>
          <ListTag />
          <CampingElementLine>
            <CampingElementComponents />
          </CampingElementLine>
          <PageNaition />
        </MainBox>
      </InnerContainer>
    </Container>
  );
};

export default Postlist;
