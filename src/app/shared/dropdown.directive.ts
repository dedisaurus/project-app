import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirectives{
@HostBinding('class.open') isOpen = false;

//Host Binding help to binding to properties of the element, disini kita mem binding class
    
//change css code element directives by clicked 
@HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
}
//click adalah nama event

}