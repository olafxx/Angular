import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

 
export class InfoGuard implements CanActivate{

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> | boolean {

      return confirm("Grt access by page/private/info?");

    }

}
 
 