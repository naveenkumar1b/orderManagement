import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'order-management';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  ngOnInit() {
    this.router.navigate(['./login'], { relativeTo: this.route });
  }
}
