import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent {

  @Input()
  public url!: string;

  @Input()
  public textAlt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit(){
    if( !this.url ) throw new Error('URL property is required');
  }

  onLoad(){
    setTimeout(() => {
      this.hasLoaded = true;
    }, 100);
  }

}
