import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries.i';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css',
})
export class CountryTableComponent {
  @Input()
  public countries: Country[] = [];
}
