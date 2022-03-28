import { map } from 'rxjs';
import { TokenService } from './../../../core/services/token.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {

  constructor(private auth:TokenService) { }

  ngOnInit(): void {
  }
  isAuthurised(){
    
   return true;
  }
}
