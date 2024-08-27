import {Component, OnInit} from '@angular/core';
import {DateUtilService} from "../../services/date-util.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  output = '';

  constructor(private dateUtilService: DateUtilService) {
  }

  ngOnInit(): void {
  }

  onChange(value: any) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }
}
