import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChessboardComponent } from "./chessboard/chessboard.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ChessboardComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
