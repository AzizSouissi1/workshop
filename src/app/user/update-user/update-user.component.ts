import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})

export class UpdateUserComponent implements OnInit {
  id!: Number;
  fid!: Number;
  constructor(private actR: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getParam();
  }

  getParam() {
    this.actR.paramMap.subscribe(data => this.id = Number(data.get('param')));
    this.actR.queryParamMap.subscribe(data => this.fid = Number(data.get('fid')))
    this.fid = Number(this.actR.snapshot.paramMap.get('param'))
  }

}



