import React from 'react';
import * as S from '../List/LaneList';
import ChampIcon from '../ChampIcon/ChampIcon';

interface mostChampionsType {
  mostChampions: {
    id: number;
    imageUrl: string;
    isAverage: boolean;
    kda: number;
    key: string;
    lane: string;
    laning: number;
    matchCount: number;
    name: string;
    performance: {};
    pickRate: number;
    radarGraph: {};
    role: number;
    winRate: number;
  }[];
  getRecord: (selected: string, lane: string, champ: string) => void;
  gameType: string;
}

const ChampList = (props: mostChampionsType) => {
  const { mostChampions, getRecord, gameType } = props;

  return (
    <>
      {mostChampions?.map(
        ({
          key,
          imageUrl,
          id,
          name,
          matchCount,
          winRate,
          role,
          laning,
          kda,
          lane,
        }) => {
          return (
            <S.Card key={id} onClick={() => getRecord(gameType, key, lane)}>
              <S.CardHeader>
                <S.ImageBox>
                  <ChampIcon url={imageUrl} lane={lane} />
                </S.ImageBox>
                <S.CardTitle>
                  <span>{name}</span>
                  <span>{matchCount} games</span>
                </S.CardTitle>
              </S.CardHeader>
              <S.CardRecords>
                <div>{winRate.toFixed(0)}%</div>
                <div>{role.toFixed(2)} </div>
                <div>{laning.toFixed(1)} </div>
                <div>{kda.toFixed(2)}</div>
              </S.CardRecords>
            </S.Card>
          );
        }
      )}
    </>
  );
};

export default ChampList;
