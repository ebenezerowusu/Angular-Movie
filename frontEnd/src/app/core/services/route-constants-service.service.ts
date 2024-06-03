import { ABOUT_PATH, CONTACT_PATH } from './../../app-routes.constants';
import { Injectable } from '@angular/core';
import * as Routes from '../../app-routes.constants';

@Injectable({
  providedIn: 'root'
})
export class RouteConstantsServiceService {
  HOME_ROUTE = Routes.HOME_PATH;
  ABOUT_PATH = Routes.ABOUT_PATH;
  CONTACT_PATH = Routes.CONTACT_PATH;
}
