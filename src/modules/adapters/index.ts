// JSON Localstorage

import * as fs from 'fs';
import * as T from '../../types/index'

export const getData = async (): Promise<T.Time> => {
  if (fs.existsSync('./data/database.json')) {
    const rawdata:any = fs.readFileSync('./data/database.json');
    return JSON.parse(rawdata);
  }

  fs.writeFileSync('./data/database.json', JSON.stringify({time:0}))

  return {time:0}
}

export const saveData = async (data: T.Time): Promise<T.Time> => {
  const rawdata:any = fs.readFileSync('./data/database.json');
  const parsed:any = JSON.parse(rawdata);
  parsed.time=data.time

  fs.writeFileSync('./data/database.json', JSON.stringify(parsed))
  return parsed;
}
