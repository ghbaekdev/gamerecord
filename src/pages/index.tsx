import type { NextPage } from 'next';
import styled from 'styled-components';
import { useState } from 'react';
import { getChampRecord, getLaneRecord, getUserRecord } from '../api/userApi';
import { useQuery } from '@tanstack/react-query';
import Average from './components/Average/Average';
import ScoreChart from './components/ScoreChart/ScoreChart';
import LaneList from './components/List/LaneList';
import ChampList from './components/ChampList/ChampList';
import Loading from './components/Loading/Loading';
import SelectList from './components/SelectList/SelectList';

const Home: NextPage = () => {
  const [gameRecord, setGameRecord] = useState({
    role: 0,
    kda: 0,
    laning: 0,
    tierHistory: [],
    mostLanes: [],
    mostChampions: [],
  });

  const [selected, setSelected] = useState('SoloRank');
  const [selectmodal, setSelectModal] = useState(false);

  const { role, laning, kda, mostChampions, mostLanes, tierHistory } =
    gameRecord;

  const { isLoading } = useQuery(
    ['gamerecords', selected],
    async () => {
      const response = await getUserRecord(selected);
      setGameRecord(response.data);
      return response;
    },
    {
      enabled: !!selected,
    }
  );

  const handleSelected = (select: string) => {
    setSelected(select);
    setSelectModal(false);
  };

  const handleLaneRecord = (gameType: string, lane: string) => {
    getLaneRecord(gameType, lane).then((res) => {
      alert('라인별 데이터 요청함수');
      setGameRecord(res.data);
    });
  };

  const handleChampRecord = (gameType: string, champ: string, lane: string) => {
    getChampRecord(gameType, champ, lane).then((res) => {
      alert('챔피언별 데이터 요청함수');
      setGameRecord(res.data);
    });
  };
  if (isLoading) return <Loading />;

  return (
    <>
      <Overlay></Overlay>
      <RecordBox>
        <Wrap>
          <RecordWrap>
            <RecordTitle>Hide on Bush</RecordTitle>
            <SelectBox>
              <SelectTitle onClick={() => setSelectModal(!selectmodal)}>
                {selected}
                <ButtonImg src="/assets/buttonIcon.svg" alt="arrow" />
              </SelectTitle>

              {selectmodal && <SelectList handleSelected={handleSelected} />}
            </SelectBox>
            <DetailRecord>
              <Average role={role} kda={kda} laning={laning} />
              <ScoreChart History={tierHistory} />
            </DetailRecord>
          </RecordWrap>
          <BorderBox></BorderBox>
          <ListTitle>
            <TitleHeader>최근 30경기</TitleHeader>
            <TitleCategories>
              <WinRateSpan>승률</WinRateSpan>
              <RoleSpan>인분</RoleSpan>
              <RaneSpan>라인전</RaneSpan>
              <KdaSpan>KDA</KdaSpan>
            </TitleCategories>
          </ListTitle>
          <ListBox>
            <LaneList
              mostLanes={mostLanes}
              getRecord={handleLaneRecord}
              gameType={selected}
            />
            <ChampList
              mostChampions={mostChampions}
              gameType={selected}
              getRecord={handleChampRecord}
            />
          </ListBox>
        </Wrap>
      </RecordBox>
    </>
  );
};

export default Home;

export const Overlay = styled.div`
  width: 100vw;
  height: 1000px;
  background-color: #f5f5f5;
  position: fixed;
  z-index: 10;
`;

export const RecordBox = styled.div`
  background-color: #ffffff;
  width: 520px;
  height: 822px;
  margin: 0 auto;
  z-index: 11;
  position: relative;
`;

export const Wrap = styled.div`
  width: 316px;
  height: 622px;
  padding: 100px;
`;

export const RecordWrap = styled.div`
  width: 316px;
  height: 254px;
  display: flex;
  flex-direction: column;
`;

export const SelectBox = styled.section`
  position: relative;
  width: 120px;
`;

export const SelectTitle = styled.button`
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

export const ButtonImg = styled.img`
  position: absolute;
  right: 12px;
  top: 50%;
  margin-top: -3px;
  width: 10px;
  height: 6px;
`;

export const RecordTitle = styled.div`
  width: 316px;
  height: 65px;
  text-align: center;
  font-weight: 700;
  font-size: 48px;
  line-height: 65px;
`;

export const DetailRecord = styled.div`
  width: 100%;
  margin-top: 51px;
  display: flex;
  justify-content: space-between;
`;

export const BorderBox = styled.div`
  width: 320px;
  border-bottom: 1px solid #666666;
`;

const ListBox = styled.div`
  height: 305px;
  overflow: auto;
`;

export const ListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 255px;
  margin: 20px 0 0 15px;
  font-size: 10px;
  font-weight: 14px;
  font-weight: 500;
\
`;

export const TitleHeader = styled.span`
  width: 54px;
  height: 14px;
`;

export const TitleCategories = styled.div`
  display: flex;
`;

export const WinRateSpan = styled.span`
  width: 19px;
  height: 14px;
  margin: 0 23px 0 62px;
`;

export const RoleSpan = styled.span`
  width: 19px;
  height: 14px;
  margin-right: 13px;
`;

export const RaneSpan = styled.span`
  width: 28px;
  height: 14px;
  margin-right: 11px;
`;

export const KdaSpan = styled.span`
  width: 19px;
  margin-right: 5px;
`;
