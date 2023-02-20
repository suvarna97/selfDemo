import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag1',
  templateUrl: './tag1.component.html',
  styleUrls: ['./tag1.component.scss']
})
export class Tag1Component implements OnInit {
  value = 'Clear me';
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  constructor() { }

  ngOnInit(): void {
  }

}
