import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: 'list.component.html',
  styleUrl: './list.component.css',
  standalone: false,
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    { name: 'Goku', power: 100001 },

  ];

  @Output()
  public onDeleteIndex: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    //TODO: Emitir el ID del personaje a eliminar
    if (!id) return;

    console.log('Deleting character', id);

    this.onDeleteIndex.emit(id);
  }
}
