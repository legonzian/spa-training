import {Component} from '@angular/core';
import {AuthService, RoutingService} from "@spartacus/core";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'auto-logout',
  templateUrl: './auto-logout.component.html',
  styleUrls: ['./auto-logout.component.scss']
})
export class AutoLogoutComponent {
  private logoutTimeoutId: number;

  constructor(private authService: AuthService, private routingService: RoutingService) {
    this.routingService.isNavigating().pipe(
      map(isNavigating =>
        !isNavigating ?
          this.logoutTimeoutId = setTimeout(() => this.authService.logout(), 15000)
          : clearTimeout(this.logoutTimeoutId))
    ).subscribe();
  }
}
