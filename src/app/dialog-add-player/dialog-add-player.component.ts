import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';


@Component({
  selector: 'app-dialog-add-player',
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent implements OnInit{
  name : string = "";
  constructor(){}
  ngOnInit(): void {
  }

  onNoClick(){
    
  }

}
