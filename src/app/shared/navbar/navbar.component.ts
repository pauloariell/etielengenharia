import { AfterViewInit, Component, OnInit, ElementRef, HostListener, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Router, RouterLink } from '@angular/router';
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

  ngAfterViewInit() {
    const burguer = this.element.nativeElement.querySelector('.burguer');
    const nav = this.element.nativeElement.querySelector('ul');
    const navLinks = this.element.nativeElement.querySelectorAll('ul.nav-etiel li');
    // .addEventListener('click', this.onClick.bind(this));
    burguer.addEventListener('click', () => {
      //toggle nav
      nav.classList.toggle('nav-active');

      // //Animate links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ''
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
        }
      });

      //Burguer animation
      burguer.classList.toggle('burguer-close');
    });

  };

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: Event) {
    if (this.home) {
      if (window.pageYOffset > 50) {
        let element = document.getElementById('navbar-etiel');
        // element.classList.add('bg-primary');
        element.classList.remove('navbar-transparent');
      } else {
        let element = document.getElementById('navbar');
        // element.classList.remove('bg-primary');
        element.classList.add('navbar-transparent');
      }
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
