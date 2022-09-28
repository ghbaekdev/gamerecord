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

const List = (props: mostLanesType) => {
  const { mostLanes } = props;
  console.log(mostLanes);

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
      {mostLanes.map(({ lane }) => {
        return (
          <Card key={lane}>
            <Image
              src={`/assets/${lane.toLocaleLowerCase()}.svg`}
              alt="lane img"
              width={22}
              height={22}
            />
          </Card>
        );
      })}
    </ListWrap>
  );
};

export default List;

const ListWrap = styled.div`
  width: 288px;
  margin: 397px 132px 0 100px;
`;

const ListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 10px;
  font-weight: 14px;
  font-weight: 500;
`;

const TitleHeader = styled.span`
  position: absolute;
  width: 54px;
  height: 14px;
  left: 115px;
  top: 417px;
`;

const TitleCategories = styled.div`
  display: flex;
`;

const WinRateSpan = styled.span`
  position: absolute;
  width: 19px;
  height: 14px;
  left: 231px;
  top: 417px;
`;

const RoleSpan = styled.span`
  position: absolute;
  width: 19px;
  height: 14px;
  left: 273px;
  top: 417px;
`;

const RaneSpan = styled.span`
  position: absolute;
  width: 28px;
  height: 14px;
  left: 305px;
  top: 417px;
`;

const KdaSpan = styled.span`
  position: absolute;
  left: 344px;
  top: 417px;
`;

const Card = styled.div`
  width: 288px;
  height: 40px;
  border-radius: 6px;
  margin: 3px 100px 0 132px;
`;
