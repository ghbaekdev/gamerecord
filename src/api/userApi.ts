import { instance } from './api';

export const getUserRecord = async (gameType: string) => {
  const response = await instance.get(
    `/hide on bush?matchCategory=${gameType}&lane=Mid`
  );
  return response;
};

export const getLaneRecord = async (gameType: string, lane: string) => {
  const response = await instance.get(
    `/hide on bush?matchCategory=${gameType}&lane=${lane}`
  );
  return response;
};

export const getChampRecord = async (
  gameType: string,
  champ: string,
  lane: string
) => {
  const response = await instance.get(
    `/hide on bush?matchCategory=${gameType}&champion=${champ}&lane=${lane}`
  );
  return response;
};
