import { FormMode } from './../../../../shared/constant/form-mode';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-training-class-crud',
  templateUrl: './training-class-crud.component.html',
  styleUrls: ['./training-class-crud.component.scss']
})
export class TrainingClassCrudComponent implements OnInit {

  mode!: FormMode;
  trainingClass!: {id: number; wave: string};
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.trainingClass = {
      id: this.route.snapshot.params['id'],
      wave: this.route.snapshot.params['wave']
    }

  }

}
