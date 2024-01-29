import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: "app-build-chessboard",
  templateUrl: "./build-chessboard.component.html",
  styleUrls: ["./build-chessboard.component.scss"],
})
export class BuildChessboardComponent{
  readonly row: number[] = new Array(63).fill(0);
  idButtonUnique: string = "button-";
  private idCounter: number = 0;

  constructor() {}

  assignmentIdButton() : string {
    return this.idButtonUnique.concat(String(this.idCounter++));
  }

  private populateChessboard(): void {

  }

}
