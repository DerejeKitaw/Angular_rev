import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'sew-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

   constructor(

    private route: ActivatedRoute,
    private router: Router,
    ) { }


  ngOnInit() {
  }

}
