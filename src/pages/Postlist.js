import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import testIMG from "../img/Frame 559.png";
import Heart from "../img/svg/Heart.svg";
import comment from "../img/svg/comment.svg";
{
  /* <NavLink to="/postdetail">게시글 상세페이지</NavLink> */
}

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PageTitle = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 37px;
  color: #343434;

  margin-top: 100px;
`;

const TagListBox = styled.div`
  display: flex;
  margin-top: 25px;
`;

const TagBefore = styled.button`
  outline:none;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #ffffff;
  border:none;
  border: 1px solid #b6b6b6;
  box-sizing: border-box;
  border-radius: 100px;
  width: auto;
  height: 38px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 5px;
  margin-right: 5px;
`;

const TagInTextBefore = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: #b6b6b6;
`;

const TagAfter = styled.button`
  outline:none;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #343434;
  border:none;
  border-radius: 100px;
  width: auto;
  height: 38px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 5px;
  margin-right: 5px;
`;

const TagInTextAfter = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: #ffffff;
`;

const DesignLine = styled.div`
  width: 1160px;
  height: 2px;
  background-color: #b6b6b6;
  margin-top: 35px;
`;

const SearchBox = styled.input`
  width: 500px;
  height: 48px;
  margin-top: 35px;
  margin-bottom: 35px;
  border: 1px solid black;
`;

const CampingElementLine = styled.div`
  width: 1160px;
  height: auto;
  display: flex;
  justify-content: space-between;

  overflow-x: visible;
`;

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

const Postlist = () => {
  const [TagList, setTagList] = useState([
    {
      id: 1,
      name: "전체",
      onOff: true,
    },
    {
      id: 2,
      name: "서울",
      onOff: false,
    },
    {
      id: 3,
      name: "경기",
      onOff: false,
    },
    {
      id: 4,
      name: "충청도",
      onOff: false,
    },
    {
      id: 5,
      name: "강원도",
      onOff: false,
    },
    {
      id: 6,
      name: "경상도",
      onOff: false,
    },
    {
      id: 7,
      name: "전라도",
      onOff: false,
    },
    {
      id: 8,
      name: "제주도",
      onOff: false,
    },
  ]);
  // const postMap =

  const TagListMap = TagList.map((x, index) => {
    return x.onOff ? (
      <TagAfter key={x.id}>
        <TagInTextAfter >{x.name}</TagInTextAfter>
      </TagAfter>
    ) : (
      <TagBefore key={x.id}>
        <TagInTextBefore>{x.name}</TagInTextBefore>
      </TagBefore>
    );
  });

  return (
    <MainBox>
      <TextBox>
        <PageTitle>게시물 목록</PageTitle>
        <TagListBox>{TagListMap}</TagListBox>
        <DesignLine />
        <SearchBox />
      </TextBox>
      <CampingElementLine>
        <CampingElement>
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
        </CampingElement>
      </CampingElementLine>
    </MainBox>
  );
};

export default Postlist;
