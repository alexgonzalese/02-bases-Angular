import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Superman';
  public age: number = 30;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } is ${ this.age } years old.`;
  }

  ChangeHeroName(): void {
    this.name = 'Batman';
  }

  ChangeHeroAge(): void {
    this.age = 40;
  }
}
