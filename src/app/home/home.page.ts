import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { WeatherService, WeatherData, CityData } from '../services/weather/weather.service';

const DEFAULT_CITIES = ['London', 'Paris', 'Berlin'];

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage implements OnInit {
  public cities: CityData[] = [];

  constructor(private service: WeatherService) {}

  ngOnInit() {
    this.checkSvedCities();
    this.fetchWeather();
  }

  private fetchWeather() {
    this.service.getCityWeather().subscribe((data) => console.log('data => ', data));
  }

  private checkSvedCities(): void {
    const saved: CityData[] = JSON.parse(localStorage.getItem('cities'));

    if (saved && saved.length) {
      this.cities = [...saved];
      return;
    }

    for (const name of DEFAULT_CITIES) {
      this.cities.push({ name });
    }

    localStorage.setItem('cities', JSON.stringify(this.cities));
  }

  private londonWeather(): CityData {
    return {
      name: 'London',
    };
  }
}
