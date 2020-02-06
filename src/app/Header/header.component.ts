import { Component, OnInit, EventEmitter,  Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() MenuEventClick: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  SelectMenu(menuItem: string) {
    this.MenuEventClick.emit(menuItem);
  }

}
