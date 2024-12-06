import json from '../parser.js';
import read from '../reader.js';

export default class GameSavingLoader {
  static load() {
    const data = read();
    data.then((response) => {
    return json(response);
    }).then((value) => {
      resolve(value);
    });
  };
}

    
   