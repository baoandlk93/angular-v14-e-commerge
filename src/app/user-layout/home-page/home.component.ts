import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isShowMenu : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMenu(){
    this.isShowMenu = !this.isShowMenu;
  }

}
