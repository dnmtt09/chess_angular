import { Component, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Subject, takeUntil } from "rxjs";
import { AngularSvgIconModule } from "angular-svg-icon";

enum typeChess {
  light = "light",
  black = "black",
}
//
enum player {
  red = "red",
  blue = "blue",
}
//
// interface chessboardOption {
//   typeChess: typeChess[];
//   player?: player;
//   id?: string;
// }

interface chessboardOption {
  typeChess: typeChess;
  player: player | null;
  id: string | null;
}

@Component({
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule],
  selector: "app-build-chessboard",
  templateUrl: "./build-chessboard.component.html",
  styleUrls: ["./build-chessboard.component.scss"],
})
export class BuildChessboardComponent implements OnDestroy {
  readonly block: number[] = new Array(8);

  isReady: boolean = false;
  chessboard: chessboardOption[] = [];
  idButtonUnique: string = "button-";
  private chess: Subject<boolean> = new Subject<boolean>();
  private $unsubscribe: Subject<void> = new Subject<void>();
  private idCounter: number = 0;
  private initializeChessboard: typeChess[] = [];

  constructor() {
    this.initializeVariableChessboard();
    this.chessboardIsReady();
    this.positionPieces();
    this.settingsId();
    this.buildArrayOfColorChess();
  }

  ngOnDestroy(): void {
    this.$unsubscribe.next();
    this.$unsubscribe.complete();
  }

  assignmentIdButton(): string {
    let v = this.idCounter++;
    console.log("valore di this.idCounter  ", this.idCounter++);
    return this.idButtonUnique.concat((this.idCounter++).toString());
  }

  private initializeVariableChessboard(): void {
    for (let i = 0; i < 4; i++) {
      this.initializeChessboard.push(typeChess.black);
      this.initializeChessboard.push(typeChess.light);
    }
  }

  private chessboardIsReady(): void {
    this.chess.pipe(takeUntil(this.$unsubscribe)).subscribe(result => {
      this.isReady = result;
      console.log("valore scacchiera   ", this.chessboard);
    });
  }

  private buildArrayOfColorChess(): void {
    for (let i: number = 0; i < 8; i++) {
      this.initializeChessboard.forEach(initializeChess => {
        console.log("valore di initialize  ", initializeChess);
        this.chessboard.push({
          typeChess: initializeChess,
          player: null,
          id: null,
        });
      });
      this.initializeChessboard.reverse();
    }

    this.chess.next(true);
  }

  private positionPieces(): void {
    this.chess.pipe(takeUntil(this.$unsubscribe)).subscribe(result => {
      if (result) {
        let index: number = 0;
        this.chessboard.flatMap(chess => {
          if (index > 0 && index <= 14) {
            if (chess.typeChess === typeChess.light) {
              chess.player = player.red;
            }
          } else if (index > 48 && index < 65) {
            if (chess.typeChess === typeChess.light) {
              chess.player = player.blue;
            }
          }

          index++;
        });
      }
    });
  }

  private settingsId(): void {
    let index: number = 0;
    const prefixId: string = "buttonId-";
    this.chess.pipe(takeUntil(this.$unsubscribe)).subscribe(result => {
      if (result) {
        this.chessboard.flatMap(chess => {
          chess.id = prefixId.concat(index.toString());
          index++;
        });
      }
    });
  }
  // TODO to optimize
  protected readonly typeChess = typeChess;
  protected readonly player = player;
}
