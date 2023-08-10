import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tassignpdf',
  templateUrl: './tassignpdf.component.html',
  styleUrls: ['./tassignpdf.component.css']
})
export class TassignpdfComponent implements OnInit{
  
  constructor(private activateRout:ActivatedRoute){}
  ngOnInit(): void {
    
  }

  classId = this.activateRout.snapshot.paramMap.get('clsId') ?? ''
  a = this.activateRout.snapshot.paramMap.get('apath') ?? ''
}
