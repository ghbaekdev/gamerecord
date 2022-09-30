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
  getRecord: (selected: string, lane: string) => void;
  gameType: string;
}

const LaneList = (props: mostLanesType) => {
  const { mostLanes, getRecord, gameType } = props;

  return (
    <ListWrap>
      {mostLanes.map(({ lane, matchCount, winRate, role, laning, kda }) => {
        return (
          <Card key={lane} onClick={() => getRecord(gameType, lane)}>
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
`;
export const Card = styled.div`
  position: relative;
  display: flex;
  width: 283px;
  height: 40px;
  border-radius: 6px;
  padding: 0 14px;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  &:hover {
    border: 1px dashed #666666;

    &:after {
      content: '';
      position: absolute;
      right: 0;
      top: 50%;
      width: 14px;
      height: 8px;
      margin-top: -4px;
      margin-right: -18px;
      background: url('/assets/listarrow.svg') 50% 50% no-repeat;
    }
  }
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
