import { Component, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries.i';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css',
})
export class ByCountryPageComponent {
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByCountry(term: string) {
    this.countriesService.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
