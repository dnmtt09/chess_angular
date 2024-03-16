import { Component, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Subject, takeUntil } from "rxjs";

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
  imports: [CommonModule],
  selector: "app-build-chessboard",
  templateUrl: "./build-chessboard.component.html",
  styleUrls: ["./build-chessboard.component.scss"],
})
export class BuildChessboardComponent implements OnDestroy {
  readonly block: number[] = new Array(8);

  isReady: boolean = false;
  chessboard: chessboardOption[] = [];
  private chess: Subject<boolean> = new Subject<boolean>();
  private $unsubscribe: Subject<void> = new Subject<void>();
  private initializeChessboard: typeChess[] = [];
  private makeMove: string = "";
  private from: string = "";
  private to: string = "";
  private set isMoved(value: boolean) {
    if (!value) {
      console.log("entro mai?");
      this.from = this.makeMove;
    } else if (value) {
      this.to = this.makeMove;
      this.chessboard.flatMap(chess => {
        if (chess.id == this.from) {
          chess.player = null;
        } else if (chess.id == this.to) {
          this.makeMove = "";
          console.log("if di else");
          chess.player = player.blue;
        }
      });
    }
  }

  constructor() {
    this.initializeVariableChessboard();
    this.chessboardIsReady();
    this.positionPieces();
    this.settingsId();
    this.buildArrayOfColorChess();
  }

  //PointerEvent
  takeMove(event: string | null): void {
    if (event != null && this.makeMove == "") {
      this.makeMove = event;
      this.isMoved = false;
    } else if (event != null && this.makeMove != "") {
      this.makeMove = event;
      this.isMoved = true;
    }
  }

  ngOnDestroy(): void {
    this.$unsubscribe.next();
    this.$unsubscribe.complete();
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
          //TODO to optimize code
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
