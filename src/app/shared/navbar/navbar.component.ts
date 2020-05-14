import { Component, OnInit, ElementRef, HostListener, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Location, LocationStrategy, PathLocationStrategy, DOCUMENT } from '@angular/common';


@Component({
  selector: 'ee-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('fade',
      [
        state('void', style({ opacity: 0 })),
        transition(':enter', [animate(300)]),
        transition(':leave', [animate(500)]),
      ]
    )]
})

export class NavbarComponent implements OnInit {
  private toggleButton: any;
  private sidebarVisible: boolean;
  public home: boolean = false;
  public LogoImg = 'assets/img/logo-150x50.png';

  public menus = [
    {
      title: 'Home',
      href: 'home'
    },
    {
      title: 'Serviços',
      href: 'servicos'
    },
    {
      title: 'Nossa História',
      href: 'nossa-historia'
    },
    {
      title: 'Notícias',
      href: 'noticias'
    },
    {
      title: 'Trabalhe Conosco',
      href: 'trabalhe-conosco'
    },
    {
      title: 'Contato',
      href: 'contato'
    }
  ];

  constructor(public location: Location, private element: ElementRef, @Inject(DOCUMENT) document) {
    this.sidebarVisible = false;
  };

  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    var title = this.location.prepareExternalUrl(this.location.path());
    if (title === '/home') {
      this.home = true;
    }
    console.log(this.home);
  };

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: Event) {
    if (this.home){
      if (window.pageYOffset > 50) {
        let element = document.getElementById('navbar');
        element.classList.add('bg-primary');
        element.classList.remove('navbar-transparent');
      } else {
        let element = document.getElementById('navbar');
        element.classList.remove('bg-primary');
        element.classList.add('navbar-transparent');
      }
    }
  };

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    // console.log(toggleButton, 'toggle');

    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');

    this.sidebarVisible = true;
  };

  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  };

  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  };

  isEmBreve() {
    var title = this.location.prepareExternalUrl(this.location.path());
    if (title === '/embreve') {
      return true;
    }
    else {
      return false;
    }
  };
}
