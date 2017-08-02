import { Component, OnInit } from '@angular/core';

class MenuItem {
  constructor(public caption: string, public link: any[]) { }
}

@Component({
  selector: 'sew-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  menuItems: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.menuItems = [
      { caption: 'Projects', link: ['/projects'] },
      { caption: 'PV Design', link: ['/pvdesign'] },
      { caption: 'Admin', link: ['/admin'] },
      { caption: 'Login', link: ['/login'] },
    ];
  }

}
