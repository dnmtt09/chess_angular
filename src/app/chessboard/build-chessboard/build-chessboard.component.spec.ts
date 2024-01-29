import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BuildChessboardComponent } from "./build-chessboard.component";

describe("BuildChessboardComponent", () => {
  let component: BuildChessboardComponent;
  let fixture: ComponentFixture<BuildChessboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildChessboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildChessboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
