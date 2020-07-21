import { Injectable } from '@angular/core';

@Injectable()
export class UserData{
    loadUsers(): string[]{
        return ['Manager123',
        'Developer',
        'Supervisor']
    }
} 