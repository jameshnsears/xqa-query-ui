import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export class CommonService {
    protected handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error(error.error.message);
        }
        return throwError(`${error.status} - unable to get data`);
    }
}
