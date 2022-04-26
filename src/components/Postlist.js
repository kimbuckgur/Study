import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
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

const Tag = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #ffffff;
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

const TagInText = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: #b6b6b6;
`;

const DesignLine = styled.div`
  width: 1292px;
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
// "전체","서울"," 경기","충청북도","충청남도","경상북도","경상남도","강원도","전라북도","전라남도","제주도"
const Postlist = () => {
  const [TagList, setTagList] = useState([
    {
      id: 1,
      name: "전체",
      Switch: true,
    },
    {
      id: 2,
      name: "서울",
      Switch: false,
    },
    {
      id: 3,
      name: "경기",
      Switch: false,
    },
    {
      id: 4,
      name: "충청북도",
      Switch: false,
    },
    {
      id: 5,
      name: "충청남도",
      Switch: false,
    },
    {
      id: 6,
      name: "경상북도",
      Switch: false,
    },
    {
      id: 7,
      name: "경상남도",
      Switch: false,
    },
    {
      id: 8,
      name: "강원도",
      Switch: false,
    },
    {
      id: 9,
      name: "전라북도",
      Switch: false,
    },
    {
      id: 10,
      name: "전라남도",
      Switch: false,
    },
    {
      id: 11,
      name: "제주도",
      Switch: false,
    },
  ]);
  const TagListMap = TagList.map((x, index) => {
    return (
      <Tag>
        <TagInText key={x.id}>{x.name}</TagInText>
      </Tag>
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
    </MainBox>
  );
};

export default Postlist;
