// 自作モジュール
import { codetext } from "./styleHyper.js";

// ボタンの設定
document.getElementById("nagoyaBtn").addEventListener("click", showNagoya);
document.getElementById("shizuokaBtn").addEventListener("click", showShizuoka);

// 名古屋の天気
async function showNagoya() {
  const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=35.18&longitude=136.91&current_weather=true");
  const data = await response.json();
  const temp = data.current_weather.temperature;
  const weather = codetext(data.current_weather.weathercode);

  document.getElementById("temp").textContent = `名古屋\n${weather}\n気温 ${temp}℃`;
}

// 静岡の天気
async function showShizuoka() {
  const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=34.97&longitude=138.38&current_weather=true");
  const data = await response.json();
  const temp = data.current_weather.temperature;
  const weather = codetext(data.current_weather.weathercode);

  document.getElementById("temp").textContent = `静岡\n${weather}\n気温 ${temp}℃`;
}