import { Component } from '@angular/core';
import { Iphotographs } from '../iphotographs';
import { photographs } from 'src/app/photographs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  photographsArr: Iphotographs[] = photographs;
}
