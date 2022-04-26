import React from "react";
import axios from "axios";
import styled from "styled-components";

import arrowL from "../../img/svg/arrowL.svg"
import arrowR from "../../img/svg/arrowR.svg"

const PageList = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Page = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 100;
  font-size: 25px;
  line-height: 20px;
  color: #b6b6b6;

  width: 45px;
  height: 45px;
  margin-left: 10px;
  margin-right: 10px;
  background: #ffffff;
  border: 2px solid #b6b6b6;
  box-sizing: border-box;
  border-radius: 100px;
`;

const PageImg = styled.img`

`

function PageNaition() {
  
  const ReceivePage = () => {
    axios({
      method: "GET",
      url: "",
      params: {},
    });
  };

  return (
    <PageList>
      <Page><PageImg src={arrowL}/></Page>
      <Page>1</Page>
      <Page>2</Page>
      <Page>3</Page>
      <Page>4</Page>
      <Page>5</Page>
      <Page>6</Page>
      <Page>7</Page>
      <Page>8</Page>
      <Page>9</Page>
      <Page>10</Page>
      <Page><PageImg src={arrowR}/></Page>
    </PageList>
  );
}

export default PageNaition;
