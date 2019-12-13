import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Orderitem} from '../models/orderitem';
import {Additem} from '../models/additem';

@Injectable()
export class ConfigService {

  // Restock item data
  private restock: 'data/restockitem.json';

  // Adding item data
  private added: any;

  constructor(private httpclient: HttpClient) {
  }

  // allstockeditems
  getItems(): Observable<any> {
    return this.httpclient.get('http://jsonplaceholder.typicode.com/posts/1/comments').pipe(catchError(this.handleError));
  }

  sentToRestock(warehouseitem: Orderitem): Observable<any> {
    return this.httpclient.post('', this.restock).pipe(catchError(this.handleError));
  }

  addNewItem(item: Additem): Observable<any> {
    return this.httpclient.post('', this.added).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
