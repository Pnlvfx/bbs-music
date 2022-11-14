import { SearchTrack } from "../../../@types/search";
import { catchError } from "../../config/common"
import { BASE_URL } from "../../config/config";

const trackapis = {
    search: async (text: string) => {
        try {
            const url = `${BASE_URL}/music/search?text=${text}`;
            const headers = {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            };
            const res = await fetch(url, {
                method: 'get',
                headers,
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data?.msg)
            } else {
                return data as SearchTrack
            }
        } catch (err) {
            throw catchError(err);
        }
    }
}

export default trackapis;