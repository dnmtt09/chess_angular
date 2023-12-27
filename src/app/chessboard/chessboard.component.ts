import {Component, ElementRef} from '@angular/core';
import {RandomNumberDirective} from "../directives/random-number/random-number.directive";
import {NgForOf, NgIf} from "@angular/common";

@Component({
    standalone: true,
    imports: [RandomNumberDirective, NgForOf, NgIf],
    selector: 'app-chessboard',
    templateUrl: './chessboard.component.html',
    styleUrls: ['./chessboard.component.scss']
})
export class ChessboardComponent {
    index: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
    visible: boolean = false;

    constructor(private elementRef: ElementRef) {}

    //TODO change Event type
    handleClickButton(event: any):void {
        this.setFullCircle(event.target.id);
    }

    private setFullCircle(idButton: string) : void {
    }
}
