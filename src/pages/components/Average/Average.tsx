import React from 'react';
import styled from 'styled-components';

interface RecordType {
  role: number;
  kda: number;
  laning: number;
}

const Average = (props: RecordType) => {
  const { role, kda, laning } = props;

  return (
    <DetailWrap>
      <DetailBox>
        <DetailName>{role.toFixed(2)}</DetailName> <DetailText>인분</DetailText>
      </DetailBox>
      <DetailBox>
        <DetailName>{laning.toFixed(2)}</DetailName>{' '}
        <DetailText>라인전</DetailText>
      </DetailBox>
      <DetailBox>
        <DetailName>{kda.toFixed(2)}</DetailName> <DetailText>KDA</DetailText>
      </DetailBox>
    </DetailWrap>
  );
};

export default Average;

const DetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 22px;
  left: 100px;
  top: 288px;
`;

const DetailBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 89px;
  font-size: 11px;
  font-weight: 500;
  line-height: 15px;
`;

const DetailName = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
`;

const DetailText = styled.span`
  font-size: 11px;
  font-weight: 500;
  line-height: 22px;
`;
