import "dotenv/config";

export async function getWeatherInspirationMessage(lat: number, lon: number): Promise<string> {
  const key = process.env.OPENWEATHERMAP_API_KEY;
  let request: string =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    key;

  const response = await fetch(request);

  if (!response.ok) {
    throw new Error(`HTTP error! ${response.status}`);
  }

  const data = await response.json();
  let weatherId: number = data.weather[0].description;

  return evaluateWeatherQuality(weatherId);
}

function evaluateWeatherQuality(weatherId: number): string {
  if (weatherId < 300) {
    return "You could have lost this programming time :/";
  } else if (weatherId < 600) {
    return "You are a rat that could have gone outside...";
  } else if (weatherId < 700) {
    return "You spent way too much time on this project...";
  } else if (weatherId < 800) {
    return "How can this happen here O.o";
  } else {
    return "You could have gotten climbing...";
  }
}

