import type { NextPage } from 'next';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getChampRecord, getLaneRecord, getUserRecord } from '../api/userApi';
import { useQuery } from '@tanstack/react-query';
import Average from './components/Average/Average';
import ScoreChart from './components/ScoreChart/ScoreChart';
import LaneList from './components/List/LaneList';
import ChampList from './components/ChampList/ChampList';
import Loading from './components/Loading/Loading';
import { useRouter } from 'next/router';

const OPTION_DATA = ['Normal', 'SoloRank', 'FreeRank'];

const Home: NextPage = () => {
  // const [gameRecord, setGameRecord] = useState({
  //   role: 0,
  //   kda: 0,
  //   laning: 0,
  //   tierHistory: [],
  //   mostLanes: [],
  //   mostChampions: [],
  // });
  const [selected, setSelected] = useState('SoloRank');

  const { isLoading, data } = useQuery(['gamerecords'], () =>
    getUserRecord(selected)
  );

  // const router = useRouter();

  // console.log(router.pathname);

  if (isLoading) return <Loading />;

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
  };

  const handleLaneRecord = (gameType: string, lane: string) => {
    getLaneRecord(gameType, lane).then((res) => {
      console.log('lane ', res.data);
      setGameRecord(res.data);
    });
  };

  const handleChampRecord = (gameType: string, champ: string, lane: string) => {
    getChampRecord(gameType, champ, lane).then((res) => {
      console.log('champ', res.data);
      setGameRecord(res.data);
    });
  };

  // useEffect(() => {
  //   getUserRecord(selected).then((res) => setGameRecord(res.data));
  // }, [selected]);

  return (
    <>
      <Overlay></Overlay>
      <RecordBox>
        <Wrap>
          <RecordWrap>
            <RecordTitle>Hide on Bush</RecordTitle>
            <SelectGame onChange={handleSelect} defaultValue={selected}>
              {OPTION_DATA.map((el, index) => {
                return (
                  <SelectOption value={el} key={index}>
                    {el}
                  </SelectOption>
                );
              })}
            </SelectGame>
            <DetailRecord>
              <Average
                role={data?.data.role}
                kda={data?.data.kda}
                laning={data?.data.laning}
              />
              <ScoreChart History={data?.data.tierHistory} />
            </DetailRecord>
          </RecordWrap>
          <BorderBox></BorderBox>
          <LaneList
            mostLanes={data?.data.mostLanes}
            getRecord={handleLaneRecord}
            gameType={selected}
          />
          <ChampList
            mostChampions={data?.data.mostChampions}
            gameType={selected}
            getRecord={handleChampRecord}
          />
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
  font-family: 'Noto Sans';
  background-color: #ffffff;
  width: 520px;
  height: 822px;
  margin: 0 auto;
  overflow: auto;
  z-index: 11;
  position: relative;
`;

export const Wrap = styled.div`
  width: 316px;
  height: 622px;
  margin: 100px;
`;

export const RecordWrap = styled.div`
  width: 316px;
  height: 254px;
  display: flex;
  flex-direction: column;
`;

export const RecordTitle = styled.div`
  width: 316px;
  height: 65px;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 65px;
  color: #2d2b2e;
`;

export const SelectGame = styled.select`
  font-size: 11px;
  font-weight: 700;
  width: 120px;
  height: 30px;
  border-radius: 4px;
`;

export const SelectOption = styled.option`
  width: 44px;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  border: 1px solid #bbbbbb;
  border-radius: 4px;
  color: #2d2b2e;
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

// export async function getStaticProps() {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery(['posts'], () => getUserRecord());

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }
