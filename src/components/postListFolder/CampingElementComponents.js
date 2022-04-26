import React, { useState } from "react";
import styled from "styled-components";
import { postArray } from "../../Dummy/postListDummy";

import comment from "../../img/svg/comment.svg";
import Heart from "../../img/svg/Heart.svg";
import testIMG from "../../img/d.png";

const CampingElement = styled.div`
  transition: all 300ms;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 280px;
  height: 280px;
  background: #ffffff;
  border: 3px solid #f0f0f0;
  box-sizing: border-box;
  border-radius: 8px;

  overflow: hidden;
  &&:hover {
    cursor: pointer;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

const CampingElementImg = styled.img`
  border: none;
  outline: none;
  width: 280px;
  height: 198px;
`;

const CampingElementDesignLine = styled.div`
  width: 280px;
  height: 3px;
  background-color: #f0f0f0;
`;

const CampingElementTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 280px;
  height: 80px;
`;

const CampingElementTitle = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #343434;

  margin-left: 25px;
  margin-top: 8px;
`;

const CampingElementEmojiAria = styled.div`
  display: flex;
  align-items: center;
`;

const CampingElementName = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #b6b6b6;

  margin-top: 5px;
  margin-left: 25px;
  margin-right: 40px;
`;

const CampingElementIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 20px;
  margin-right: 5px;
  margin-top: 1px;
`;

const CampingElementEmojiText = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 15px;
  color: #c1c1c1;

  margin-top: 1px;
`;

const CampingElementComponents = () => {
  const [Dummy, setDummy] = useState(postArray);
  const TestMap = Dummy.map((x, index) => {
    return (
      <CampingElement>
        <CampingElementImg src={testIMG} />
        <CampingElementDesignLine />
        <CampingElementTextBox>
          <CampingElementTitle>{x.title}</CampingElementTitle>
          <CampingElementEmojiAria>
            <CampingElementName>{x.userId}</CampingElementName>
            <CampingElementIcon src={Heart} />
            <CampingElementEmojiText>{x.totalLike}</CampingElementEmojiText>
            <CampingElementIcon src={comment} />
            <CampingElementEmojiText>{x.totalcomment}</CampingElementEmojiText>
          </CampingElementEmojiAria>
        </CampingElementTextBox>
      </CampingElement>
    );
  });

  return (
    <>
      {TestMap}
      {/* <CampingElement>
        <CampingElementImg src={testIMG} />
        <CampingElementDesignLine />
        <CampingElementTextBox>
          <CampingElementTitle>난천 캠핑장</CampingElementTitle>
          <CampingElementEmojiAria>
            <CampingElementName>홍길동</CampingElementName>
            <CampingElementIcon src={Heart} />
            <CampingElementEmojiText>309</CampingElementEmojiText>
            <CampingElementIcon src={comment} />
            <CampingElementEmojiText>25</CampingElementEmojiText>
          </CampingElementEmojiAria>
        </CampingElementTextBox>
      </CampingElement> */}
    </>
  );
};

export default CampingElementComponents;
