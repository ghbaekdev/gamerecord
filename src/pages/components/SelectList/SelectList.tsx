import React from 'react';
import styled from 'styled-components';

const OPTION_DATA = ['Normal', 'SoloRank', 'FreeRank'];

interface ListType {
  handleSelected: (select: string) => void;
}

const SelectList = (props: ListType) => {
  const { handleSelected } = props;
  return (
    <SelectGame>
      {OPTION_DATA.map((option, index) => {
        return (
          <SelectOption value={option} key={index}>
            <button onClick={() => handleSelected(option)}>{option}</button>
          </SelectOption>
        );
      })}
    </SelectGame>
  );
};

export default SelectList;

export const SelectOption = styled.li`
  list-style: none;

  button {
    font-size: 12px;
    font-weight: 500;
    height: 32px;
    line-height: 32px;
    width: 100%;
    text-align: left;
    padding: 0 14px;
    border: 0;
    background: none;
    border-radius: 0;
    &::hover {
      background: #eeeeee;
    }
  }
`;
export const SelectGame = styled.ul`
  background: #f8f8f8;
  border-radius: 4px;
  padding: 8px 0;
  max-height: 112px;
  width: 120px;
  overflow: auto;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 34px;
  left: 0;
  margin: 0;
`;
