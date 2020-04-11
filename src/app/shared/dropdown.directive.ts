import { Directive, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: "[appDropdown]"
})
export class DropdownDirective {
    constructor(private renderer: Renderer2, private elRef: ElementRef) { }
    @HostBinding("class.open") isOpen: boolean = false;

    @HostListener("click") mouseclick (event: Event) {
        this.isOpen = !this.isOpen;
    }
}