import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  title = 'app-header';

  @Output() featureSelected = new EventEmitter < string > ();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
