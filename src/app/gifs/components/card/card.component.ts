import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
})
export class CardComponent {

  @Input()
  public gif!: Gif;

  ngOnInit(){
    if( !this.gif ) throw new Error('Gif property is required');
  }

}
