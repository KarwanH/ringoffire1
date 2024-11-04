import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent implements OnInit {

  @Input() name:string = "";
  constructor(){}
  ngOnInit(): void {
    
  }
}
