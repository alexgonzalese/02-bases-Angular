import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
  standalone: false,
})

export class MainPageComponent {

    public character: Character[] = [{
        name: 'Goku',
        power: 100001
    }, {
        name: 'Vegeta',
        power: 9000
    },
    {
        name: 'Trunks',
        power: 10000
      }];
}
