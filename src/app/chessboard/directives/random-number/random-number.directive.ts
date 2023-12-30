import { Directive, HostBinding } from "@angular/core";

@Directive({
  standalone: true,
  selector: "[appRandomNumber]",
})
export class RandomNumberDirective {
  private static idCounter: number = 0;

  @HostBinding("attr.id") randomId: string = "";

  constructor() {
    this.randomId = "button-" + RandomNumberDirective.idCounter;
    RandomNumberDirective.idCounter++;
  }
}
