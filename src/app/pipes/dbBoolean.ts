import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'dbBoolean'})
export class DBBooleanPipe implements PipeTransform {
    transform(value: boolean) {
        return value ? 'Connected' : 'Not Connected';
    }
}