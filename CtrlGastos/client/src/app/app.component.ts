import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CtrlGastos-App';

  showHead: boolean = false;

   ngOnInit() {}

   constructor(private router: Router) {
      // on route change to '/login', set the variable showHead to false
      router.events.forEach((event) => {
         if (event instanceof NavigationStart) {
            if (event['url'] == '/login') {
               this.showHead = false;
            } else if (event['url'] == '/welcome') {
               this.showHead = false;
           } else if (event['url'] == '/signup') {
            this.showHead = false;
           } else if (event['url'] == '/') {
            this.showHead = false;
           } else {
               this.showHead = true;
            }
         }
      });
    } 

}

