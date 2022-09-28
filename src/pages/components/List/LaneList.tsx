import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

interface mostLanesType {
  mostLanes: {
    isAverage: boolean;
    kda: number;
    lane: string;
    laning: number;
    matchCount: number;
    perfomance: {};
    pickRate: number;
    radarGraph: {}[];
    role: number;
    winRate: number;
  }[];
}

const LaneList = (props: mostLanesType) => {
  const { mostLanes } = props;

  return (
    <ListWrap>
      <ListTitle>
        <TitleHeader>최근 30경기</TitleHeader>
        <TitleCategories>
          <WinRateSpan>승률</WinRateSpan>
          <RoleSpan>인분</RoleSpan>
          <RaneSpan>라인전</RaneSpan>
          <KdaSpan>KDA</KdaSpan>
        </TitleCategories>
      </ListTitle>
      {mostLanes.map(({ lane, matchCount, winRate, role, laning, kda }) => {
        return (
          <Card key={lane}>
            <CardHeader>
              <ImageBox>
                <Image
                  src={`/assets/${lane.toLocaleLowerCase()}.svg`}
                  alt="lane img"
                  width={20}
                  height={20}
                />
              </ImageBox>
              <CardTitle>
                <span>{lane}</span>
                <span>{matchCount}경기</span>
              </CardTitle>
            </CardHeader>
            <CardRecords>
              <div>{winRate.toFixed(0)}%</div>
              <div>{role.toFixed(2)} </div>
              <div>{laning.toFixed(1)} </div>
              <div>{kda.toFixed(2)}</div>
            </CardRecords>
          </Card>
        );
      })}
    </ListWrap>
  );
};

export default LaneList;

export const ListWrap = styled.div`
  width: 255px;
  margin-top: 20px;
`;

const ListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 0 0 15px;
  font-size: 10px;
  font-weight: 14px;
  font-weight: 500;
`;

const TitleHeader = styled.span`
  width: 54px;
  height: 14px;
`;

const TitleCategories = styled.div`
  display: flex;
`;

const WinRateSpan = styled.span`
  width: 19px;
  height: 14px;
  margin: 0 23px 0 62px;
`;

const RoleSpan = styled.span`
  width: 19px;
  height: 14px;
  margin-right: 13px;
`;

const RaneSpan = styled.span`
  width: 28px;
  height: 14px;
  margin-right: 11px;
`;

const KdaSpan = styled.span`
  width: 19px;
  margin-right: 5px;
`;

export const Card = styled.div`
  display: flex;
  width: 255px;
  height: 40px;
  border-radius: 6px;
  /* margin: 3px 100px 0 132px; */
  padding-left: 14px;
  justify-content: space-between;
`;

export const CardHeader = styled.div`
  display: flex;
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: #f5f5f5;
`;

export const CardTitle = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
  }

  span:nth-child(2) {
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;
  }
`;

export const CardRecords = styled.div`
  display: flex;
  font-size: 13px;
  font-weight: 700;
  height: 18px;
  margin: 12px 0 10px 0;
  div {
    width: 35px;
    line-height: 18px;
    text-align: center;
  }
  div:nth-child(2) {
    margin-left: 11px;
    width: 27px;
  }
  div:nth-child(3) {
    margin-left: 11px;
    width: 19px;
  }
  div:nth-child(4) {
    margin-left: 13px;
    width: 27px;
  }
`;
