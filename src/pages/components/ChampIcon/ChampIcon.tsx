import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

interface UrlType {
  url: {
    url: string;
  };
  lane: {
    lane: string;
  };
}

const ChampIcon = ({ url, lane }: UrlType) => {
  return (
    <ImgWrap>
      <IconImage src={`/assets/${lane.toLowerCase()}.svg`} />
      <ChampImg src={url} />
    </ImgWrap>
  );
};

export default ChampIcon;

const ImgWrap = styled.div`
  position: relative;
  top: 6px;
`;

const ChampImg = styled.img`
  width: 32px;
  height: 32px;
  border: noen;
  border-radius: 2px;
`;

const IconImage = styled.img`
  position: absolute;
  top: 20px;
  left: 18px;
  filter: invert(100%);
  width: 14px;
  height: 14px;
`;
