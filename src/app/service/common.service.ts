import { HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

export class CommonService {
    protected handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error(error.error.message);
        }
        return new ErrorObservable(`${error.status} - unable to get data`);
    }
}
