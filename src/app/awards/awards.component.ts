import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 

import { photographs } from '../photographs';
import { Iphotographs } from '../iphotographs';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})

export class AwardsComponent implements OnInit{
  data_photographs: Iphotographs[] = photographs;
  s_photographer: string = "";
  strSymbolStar:string = "&#9733;"
  strSymbolStarEmpty:string = "&#9734;"

  constructor(private route: ActivatedRoute) { }

  rating(rating:number){
    let stars:string = ""

    for(let i=0; i < rating ; i++){
      stars += this.strSymbolStar
    }

    for(let i=0; i < (5 - rating) ; i++){
      stars += this.strSymbolStarEmpty
    }

    return stars;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.s_photographer = params['Photographer'];

      this.data_photographs = photographs.filter(function(record){  
        return record.photographer == params['Photographer'];
      });
    })

    
      scrollTo({top:0})
    
  }
}
