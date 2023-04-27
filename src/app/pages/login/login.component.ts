import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* => *', [
        query(':enter, :leave', style({ position: 'fixed' }), {
          optional: true,
        }),
        group([
          query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate(
              '0.2s ease-in-out',
              style({ transform: 'translateX(-220%)' })
            ),
          ]),
          query(
            ':enter',
            [
              style({ transform: 'translateX(220%)' }),
              animate(
                '0.3s ease-in-out',
                style({ transform: 'translateX(0%)' })
              ),
            ],
            {
              optional: true,
            }
          ),
        ]),
      ]),
    ]),
  ],
})
export class LoginComponent {
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
