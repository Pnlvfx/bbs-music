import { catchError } from "../../config/common"

type UserIPinfo = {
  businessName: string
  businessWebsite: string
  city: string,
  continent: string
  country: string
  countryCode: string
  ipName: string
  ipType: string
  isp: string
  lat: string
  lon: string
  org: string
  query: string
  region: string
  status: string
}

export const getUserIP = async ():Promise<UserIPinfo> => {
    try {
      const IP_API_KEY = process.env.IP_LOOKUP_API_KEY;
      const url = `https://extreme-ip-lookup.com/json?key=${IP_API_KEY}`
      const res = await fetch(url, {
        method: 'get',
      })
      const userIpInfo = await res.json();
      if (!res.ok) {
        throw new Error(userIpInfo?.msg);
      } else {
        return userIpInfo;
      }
    } catch (err) {
      throw catchError(err);
    }
}