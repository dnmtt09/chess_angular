import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  standalone: true,
  selector: '[appInsertImageOnClick]' // Il selettore che attiva la direttiva
})
export class InsertImageOnClickDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  /*@HostListener('click') onClick() {
    // Creazione dell'elemento immagine
    /!*const img = this.renderer.createElement('img');

    this.renderer.addClass(img, 'max-w-3.5');
    // Impostazione dell'attributo src dell'immagine (sostituiscilo con il tuo percorso immagine)
    this.renderer.setAttribute(img, 'src', 'assets/svg/full-circle.svg');
    // Aggiunta dell'immagine all'elemento contenitore (il pulsante cliccato)
    this.renderer.appendChild(this.el.nativeElement, img);*!/
    if(!(this.whoTurn == null && this.buttonId == null)) {
      const button = this.renderer.selectRootElement('#' + this.buttonId.target.id);
      if(this.whoTurn == "human") {
          this.renderer.removeClass(button,"invisible");
      }else if(this.whoTurn == "PC"){
        this.renderer.removeClass(button,"invisible");
      }
    }
  }*/
}