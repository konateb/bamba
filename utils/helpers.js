import axios from "axios";


const getRandomID = (x1, x2) => {
    x1 = Math.ceil(x1);
    x2 = Math.floor(x2);
  return  Math.floor(Math.random() * (x2-x1) + x1);
};

const getRandom = () => {
    return Math.random() * 100 + 1;
};

const sub = (x1, x2) => {
  return parseInt(x1) - parseInt(x2);
};
 let getData = async function(city) {
  const options = {
    method: "GET",
    url: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather",
    params: { city: "Seattle" },
    headers: {
      "X-RapidAPI-Key": "5205134cc4msh162dd5923a882b1p1233cfjsn283ae7d00a67",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    // console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export { getRandom, getRandomID, sub };