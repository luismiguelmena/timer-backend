import * as database from '../adapters/index';
import * as T from '../../types'

const getData = async (): Promise<T.Time> => {
  return await database.getData();
};

const saveData = async (body: T.Time): Promise<T.Time> => {
  return await database.saveData(body);
}

export { getData, saveData };
