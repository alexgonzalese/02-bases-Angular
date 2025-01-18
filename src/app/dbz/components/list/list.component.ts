import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: 'list.component.html',
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    { name: 'Goku', power: 100001 },

  ];
}
