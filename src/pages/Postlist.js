import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import ListTag from "../components/postListFolder/ListTag";
import CampingElementComponents from "../components/postListFolder/CampingElementComponents";
import PageNaition from "../components/postListFolder/PageNaition";

{
  /* <NavLink to="/postdetail">게시글 상세페이지</NavLink> */
}

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CampingElementLine = styled.div`
  width: 1160px;
  height: auto;
  display: flex;
  justify-content: space-between;
`;
const Postlist = () => {
  // const postMap =
  return (
    <MainBox>
      <ListTag />
      <CampingElementLine>
        <CampingElementComponents/>
      </CampingElementLine>
      <PageNaition/>
    </MainBox>
  );
};

export default Postlist;
