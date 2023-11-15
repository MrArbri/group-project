import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectC';
  showAll = true;
  blnAwards:boolean = false;

  constructor(private router:Router, private route: ActivatedRoute){
    router.events.subscribe((val)=>{
      if(val instanceof NavigationEnd){

        if (val.url.includes("awards")){
          this.blnAwards = true
        }
        else{
          this.blnAwards = false
        }
        // console.log(val.url)

        if(val.url == "/about" || val.url == "/contact" || this.blnAwards){
          this.showAll = false;
        }else{
          this.showAll = true;
        }
      }
    })
  }
}