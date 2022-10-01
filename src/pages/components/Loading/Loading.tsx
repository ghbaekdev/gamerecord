import React from 'react';
import styled from 'styled-components';
import * as S from '../../index';
import * as A from '../List/LaneList';

const Loading = () => {
  return (
    <>
      <S.Overlay></S.Overlay>
      <S.RecordBox>
        <S.Wrap>
          <S.RecordWrap>
            <S.RecordTitle>Hide on Bush</S.RecordTitle>
            <SkSelectTitle>
              SoloRank
              <SkButtonImg src="/assets/buttonIcon.svg" alt="arrow" />
            </SkSelectTitle>
            <S.DetailRecord>
              <SkDetailWrap>
                <SkDetailBox></SkDetailBox>
                <SkDetailBox></SkDetailBox>
                <SkDetailBox></SkDetailBox>
              </SkDetailWrap>
              <SkChartBox></SkChartBox>
            </S.DetailRecord>
          </S.RecordWrap>
          <S.BorderBox></S.BorderBox>
          <A.ListWrap>
            <SkListTitle>
              <SkTitleHeader>최근 30경기</SkTitleHeader>
              <SkTitleCategories>
                <SkWinRateSpan>승률</SkWinRateSpan>
                <SkRoleSpan>인분</SkRoleSpan>
                <SkRaneSpan>라인전</SkRaneSpan>
                <SkKdaSpan>KDA</SkKdaSpan>
              </SkTitleCategories>
            </SkListTitle>
            <SkListBox></SkListBox>
            <SkListBox></SkListBox>
            <SkListBox></SkListBox>
            <SkListBox></SkListBox>
          </A.ListWrap>
        </S.Wrap>
      </S.RecordBox>
    </>
  );
};

export default Loading;

const SkDetailWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const SkDetailBox = styled.div`
  width: 100px;
  height: 19px;
  font-size: 11px;
  font-weight: 500;
  line-height: 15px;
  background-color: #eeeeee;
  margin-bottom: 6px;
`;

const SkChartBox = styled.div`
  width: 174px;
  height: 77px;
  background-color: #eeeeee;
`;

const SkSelectTitle = styled.button`
  width: 120px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #bbbbbb;
  background-color: white;
  text-align: left;
  font-size: 11px;
  font-weight: 700;
  padding-left: 12px;
  line-height: 30px;
  position: relative;
`;

const SkButtonImg = styled.img`
  position: absolute;
  right: 12px;
  top: 50%;
  margin-top: -3px;
  width: 10px;
  height: 6px;
`;

const SkListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0 0 15px;
  font-size: 10px;
  font-weight: 14px;
  font-weight: 500;
`;
const SkTitleHeader = styled.span`
  width: 54px;
  height: 14px;
`;

const SkTitleCategories = styled.div`
  display: flex;
`;

const SkWinRateSpan = styled.span`
  width: 19px;
  height: 14px;
  margin: 0 23px 0 62px;
`;

const SkRoleSpan = styled.span`
  width: 19px;
  height: 14px;
  margin-right: 13px;
`;

const SkRaneSpan = styled.span`
  width: 28px;
  height: 14px;
  margin-right: 11px;
`;

const SkKdaSpan = styled.span`
  width: 19px;
  margin-right: 5px;
`;

const SkListBox = styled.div`
  width: 256px;
  height: 32px;
  margin-top: 10px;
  margin-left: 15px;
  background-color: #eeeeee;
`;
