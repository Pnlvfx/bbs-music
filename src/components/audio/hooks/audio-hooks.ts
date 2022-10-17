import { BASE_URL } from "../../../config/config";

const audio = {
    getSongs: async (callback: Function) => {
        try {
          const url = `${BASE_URL}/music/all`;
          const res = await fetch(url, {
            method: 'GET',
          });
          const data = await res.json();
          return callback(data);
        } catch (err) {
          console.log(err);
        }
      }
}

export default audio;
