import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `

    <h1>{{ title }}</h1>
    <p>Counter: {{ counter }}</p>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="reset()">reset</button>
  `,
  standalone: false,
})
export class CounterComponent {
  public title = 'Counter';
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }
  reset(): void {
    this.counter = 0;
  }
}
