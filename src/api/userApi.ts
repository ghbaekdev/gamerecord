import { instance } from './api';

export const getUserRecord = async (selectGame: string) => {
  const response = await instance.get(
    `/hide on bush?matchCategory=${selectGame}&champion=hide on bush&lane=Mid`
  );
  return response;
};
