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
        <DetailName>
          {laning.toFixed(1)}:{10 - laning.toFixed(1)}
        </DetailName>{' '}
        <DetailText>라인전</DetailText>
      </DetailBox>
      <DetailBox>
        <DetailName>{kda.toFixed(2)}</DetailName> <DetailText>KDA</DetailText>
      </DetailBox>
    </DetailWrap>
  );
};

export default Average;

export const DetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 22px;
`;

export const DetailBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 99px;
  font-size: 11px;
  font-weight: 500;
  line-height: 15px;
`;

export const DetailName = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
`;
const DetailText = styled.span`
  width: 30px;
  margin-left: auto;
  font-size: 11px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
`;
