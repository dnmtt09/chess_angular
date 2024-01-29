import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BuildChessboardComponent } from "./chessboard/build-chessboard/build-chessboard.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BuildChessboardComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
