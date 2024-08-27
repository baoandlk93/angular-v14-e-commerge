import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isShowMenu : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMenu(){
    this.isShowMenu = !this.isShowMenu;
  }
}
