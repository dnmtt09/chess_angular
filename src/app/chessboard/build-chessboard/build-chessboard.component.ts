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
  readonly block: number[] = new Array(8);
  idButtonUnique: string = "button-";
  private idCounter: number = 0;
  colorChess: ('light' | 'dark')[] | null = null;

  constructor() {
    this.buildArrayOfColorChess();
    /*for (let i:number =0; i<8; i++) {
      for (let y: number = 0; y < 8; y++) {
        console.log(this.colorChess[]);
      }
    }*/
  }

  assignmentIdButton() : string {
    return this.idButtonUnique.concat(String(this.idCounter++));
  }

  private buildArrayOfColorChess(): void {
    for (let i:number =0; i<8; i++){
      for (let y:number =0; y<8; y++){
        let valueOfY: number = y%2;
        if(!!this.colorChess){
          if(valueOfY == 0){
            this.colorChess[valueOfY] = 'dark';
          }else {
            this.colorChess[valueOfY] = 'light';
          }
        }
      }
    }
  }

}
