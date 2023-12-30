import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";
import { NgForOf, NgIf } from "@angular/common";
import { RandomNumberDirective } from "./directives/random-number/random-number.directive";
import { InsertImageOnClickDirective } from "./directives/random-number/apply-circle-button.directive";

@Component({
  standalone: true,
  imports: [RandomNumberDirective, NgForOf, NgIf, InsertImageOnClickDirective],
  selector: "app-chessboard",
  templateUrl: "./chessboard.component.html",
  styleUrls: ["./chessboard.component.scss"],
})
export class ChessboardComponent {
  index: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  @ViewChild("circle") circle: ElementRef | null = null;
  @ViewChild("fullCircle") fullCircle: ElementRef | null = null;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  //TODO change Event type
  handle(whoTurn: "human" | "PC" | null, eventButton: any | null): void {
    if (!(whoTurn == null && eventButton == null)) {
      const buttonId = eventButton.target.id;
      console.log("valore buttonId" + buttonId);
      const match = buttonId.match(/\d+/);
      console.log(match);
      if (whoTurn == "human") {
        this.renderer.removeClass(buttonId.replace(/\d+/, +match[0] + 1), "invisible");
      } else if (whoTurn == "PC") {
        const imageElement: HTMLElement | null = document.querySelector(
          "#" + buttonId.replace(/\d+/, +match[0] + 2)
        );
        this.renderer.removeClass(imageElement, "invisible");
      }
    }
  }
}
