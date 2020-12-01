import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { WeatherData } from '../../interfaces/weather-data';

export * from '../../interfaces/weather-data';

const { API_KEY, API_URL } = environment;
const URL = `${API_URL}forecast.json?key=${API_KEY}`;

// https://api.weatherapi.com/v1/forecast.json?key=76540263ab194accb0f82640200112&q=London&days=1

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  public getCityWeather(city: string = 'London', days: number = 1): Observable<WeatherData> {
    return this.http.get<WeatherData>(`${URL}&q=${city}&days=${days}`);
  }
}
