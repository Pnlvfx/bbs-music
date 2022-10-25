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
    const IP_API_KEY = 'qi3o1QBRtOMYtcYuTLVb'
    const url = `https://extreme-ip-lookup.com/json?key=${IP_API_KEY}`
    const res1 = await fetch(url, {
      method: 'get',
    })
    const userIpInfo = await res1.json();
    return userIpInfo
}