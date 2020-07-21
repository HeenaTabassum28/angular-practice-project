import { Injectable } from '@angular/core';

@Injectable()
export class Department{
    loadDepartment():string[]{
        return ['DeptManager', 'Developer', 'Supervisor']
    }
}