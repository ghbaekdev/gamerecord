import type { NextPage } from 'next';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getUserRecord } from '../api/userApi';
import Average from './components/Average/Average';
import ScoreChart from './components/ScoreChart/ScoreChart';
import LaneList from './components/List/LaneList';
import ChampList from './components/ChampList/ChampList';

const OPTION_DATA = ['Normal', 'SoloRank', 'FreeRank'];

const Home: NextPage = () => {
  const [gameRecord, setGameRecord] = useState({
    role: 0,
    kda: 0,
    laning: 0,
    tierHistory: [],
    mostLanes: [],
    mostChampions: [],
  });
  const [selected, setSelected] = useState('');

  const { role, kda, laning, tierHistory } = gameRecord;

  // https://api.your.gg/kr/api/summoners/hide on bush?matchCategory={Normal, SoloRank, FreeRank}&champion={챔피언 ID}&lane={Top, Jug, Mid, Adc, Sup}
  // ex)
  // Hide on bush의 솔로랭크 미드 - https://api.your.gg/kr/api/summoners/hide on bush?matchCategory=SoloRank&lane=Mid
  // Hide on bush의 솔로랭크 정글 리신 - https://api.your.gg/kr/api/summoners/hide on bush?matchCategory=SoloRank&champion=LeeSin&lane=Jug

  useEffect(() => {
    getUserRecord(selected).then((res) => {
      setGameRecord(res.data);
    });
  }, [selected]);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
  };

  return (
    <Overlay>
      <RecordBox>
        <Wrap>
          <RecordWrap>
            <RecordTitle>Hide on Bush</RecordTitle>
            <SelectGame onChange={handleSelect}>
              {OPTION_DATA.map((el, index) => {
                return (
                  <SelectOption value={el} key={index}>
                    {el}
                  </SelectOption>
                );
              })}
            </SelectGame>
            <DetailRecord>
              <Average role={role} kda={kda} laning={laning} />
              <ScoreChart History={tierHistory} />
            </DetailRecord>
          </RecordWrap>
          <BorderBox></BorderBox>
          <LaneList mostLanes={gameRecord.mostLanes} />
          <ChampList mostChampions={gameRecord.mostChampions} />
        </Wrap>
      </RecordBox>
    </Overlay>
  );
};

export default Home;

const Overlay = styled.div`
  width: 100vw;
  height: 1000px;
  background-color: #f5f5f5;
`;

const RecordBox = styled.div`
  font-family: 'Noto Sans';
  background-color: #ffffff;
  width: 520px;
  height: 822px;
  margin: 200px auto;
  overflow: auto;
`;

const Wrap = styled.div`
  width: 316px;
  height: 622px;
  margin: 100px;
`;

const RecordWrap = styled.div`
  width: 316px;
  height: 254px;
  display: flex;
  flex-direction: column;
`;

const RecordTitle = styled.div`
  width: 316px;
  height: 65px;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 65px;
  color: #2d2b2e;
`;

const SelectGame = styled.select`
  font-size: 11px;
  font-weight: 700;
  width: 120px;
  height: 30px;
  border-radius: 4px;
`;

const SelectOption = styled.option`
  width: 44px;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  border: 1px solid #bbbbbb;
  border-radius: 4px;
  color: #2d2b2e;
`;

const DetailRecord = styled.div`
  width: 100%;
  margin-top: 51px;
  display: flex;
  justify-content: space-between;
`;

const BorderBox = styled.div`
  width: 320px;
  border-bottom: 1px solid #666666;
`;
