import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VacancyService } from '../../services/vacancy.service';
import { Vacancy } from '../../models/vacancy';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
  vacancies: Vacancy[] | undefined;

  constructor(private vacancyService: VacancyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const companyId = this.route.snapshot.params['id'];
    this.vacancyService.getVacanciesByCompany(companyId).subscribe(vacancies => {
      this.vacancies = vacancies;
    });
  }
}
