import React, { useState } from "react";
import styled from "styled-components";

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
  transition: all 300ms;

  display: flex;
  margin-top: 25px;
`;

const TagBefore = styled.button`
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: #b6b6b6;

  background: #ffffff;
  border: none;
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

const TagAfter = styled.button`
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: #ffffff;

  background: #343434;
  border: none;
  border: 1px solid #343434;
  border-radius: 100px;
  width: auto;
  height: 38px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 5px;
  margin-right: 5px;
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

function ListTag() {
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

  const TagOnClick = (e) => {
    const { name } = e.target;
    TagList.map((x, index) => {
      if (name == x.id) {
        if (name != 1) {
          let copyList = [...TagList];
          copyList[index].onOff = !copyList[index].onOff;
          setTagList(copyList);
        } else if (name == 1) {
          let copyList = [...TagList];
          if (copyList[0].onOff == true) {
            let copyList = [...TagList];
            for (let i = 0; i < copyList.length; i++) {
              copyList[i].onOff = false;
            }
            setTagList(copyList);
          } else {
            let copyList = [...TagList];
            for (let i = 0; i < copyList.length; i++) {
              copyList[i].onOff = true;
            }
            setTagList(copyList);
          }
        }
      }
    });
  };

  const TagListMap = TagList.map((x, index) => {
    return x.onOff ? (
      <TagAfter onClick={TagOnClick} name={x.id} key={x.id}>
        {x.name}
      </TagAfter>
    ) : (
      <TagBefore onClick={TagOnClick} name={x.id} key={x.id}>
        {x.name}
      </TagBefore>
    );
  });

  return (
    <TextBox>
      <PageTitle>게시물 목록</PageTitle>
      <TagListBox>{TagListMap}</TagListBox>
      <DesignLine />
      <SearchBox />
    </TextBox>
  );
}

export default ListTag;
