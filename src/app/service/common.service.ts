import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export class CommonService {
    protected handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return throwError(error.message);
    };
}
