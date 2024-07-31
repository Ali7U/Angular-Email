import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map, take, skipWhile } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.signedIn$.pipe(
    skipWhile((value) => value === null),
    take(1),

    map((isSignedIn): any => {
      if (!isSignedIn) {
        router.navigateByUrl('/');
        return false;
      }
    })
  );
};
