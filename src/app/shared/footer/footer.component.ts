import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'ee-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public location: Location) { }

  ngOnInit(): void {
  }

  isEmBreve() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee === '/embreve') {
      return true;
    }
    else {
      return false;
    }
  };
}
