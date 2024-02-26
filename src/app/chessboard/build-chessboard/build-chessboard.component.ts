import { Component, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: "app-build-chessboard",
  templateUrl: "./build-chessboard.component.html",
  styleUrls: ["./build-chessboard.component.scss"],
})
export class BuildChessboardComponent implements OnDestroy {
  readonly block: number[] = new Array(8);
  readonly chessboard: number[] = new Array(63);
  idButtonUnique: string = "button-";
  private idCounter: number = 0;
  colorChess: ("light" | "dark")[] = [];

  constructor() {
    this.buildArrayOfColorChess();
    console.log("valore della scacchiera");
    console.log(this.colorChess);
  }

  ngOnDestroy(): void {
    console.log("Method not implemented.");
  }

  assignmentIdButton(): string {
    return this.idButtonUnique.concat(String(this.idCounter++));
  }

  // private buildArrayOfColorChess(): void {
  //   let isDark: boolean = false;
  //   for (let i: number = 0; i < 63; i++) {
  //     if(i%8==0){
  //       isDark ? this.colorChess.push("light") : this.colorChess.push("dark");
  //     }else{
  //       isDark ? this.colorChess.push("dark") : this.colorChess.push("light");
  //       isDark = !isDark;
  //     }
  //   }
  // }

  private buildArrayOfColorChess(): void {
    let isDark: boolean = true;
    let activate: boolean = true;
    for (let y: number = 0; y < 8; y++) {
      if (!isDark) {
        this.colorChess.push("light");
        activate = false;
      } else {
        this.colorChess.push("dark");
        activate = false;
      }
      for (let x: number = 0; x < 8; x++) {
        console.log("entro nel secondo for");
        if (x > 0) {
          isDark ? this.colorChess.push("dark") : this.colorChess.push("light");
          isDark = !isDark;
          activate = true;
        }
      }
    }
  }
}
