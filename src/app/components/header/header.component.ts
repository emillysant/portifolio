import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  route!: Subscription;
  routeProject!: boolean;

  constructor(private router: Router) {
    this.route = router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
       console.log("rota projetos",this.router.url.includes('projects'))
        this.routeProject = this.router.url.includes('projects')
      }
    })
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
   this.route.unsubscribe()
  }

  irParaTelaInicial() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate(['home'])
  }

  irParaProjetos() {
    this.router.navigate(['projects'])
  }

}
