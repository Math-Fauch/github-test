import 'dotenv/config';

export async function getWeather(): Promise<string> {
    const key = process.env.OPENWEATHERMAP_API_KEY;
    const response = await fetch("https://api.openweathermap.org/data/3.0/onecall?lat=46.85165&lon=-70.969717&appid=" + key);



    return '';
}
getWeather()