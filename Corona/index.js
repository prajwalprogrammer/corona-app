import axios from "axios";

export const fetchdailydata = async () => {
  try {
    const {
      data: TotalConfirmed,
      TotalRecovered,
      TotalDeaths,
    } = await axios.get("https://api.covid19api.com/world/total");
    const world = {
      confirmed: TotalConfirmed,
      recovered: TotalRecovered,
      Death: TotalDeaths,
    };
    return data;
  } catch (error) {
    console.log(error);
  }
};
