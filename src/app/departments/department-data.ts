import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Department, DepartmentRec } from './department';

export class DepartmentData implements InMemoryDbService {

  createDb(): { departments: Department[]} {
    const departments: Department[] = [
      {
        departmentId:       1,
        departmentName:     'Network',
        departmentManager:  'Adam',
        departmentLocation: 'Paris'
      },
      {
        departmentId: 2,
        departmentName: 'DevOps',
        departmentManager: 'Leila',
        departmentLocation: 'Rome'
      },
      {
        departmentId: 1,
        departmentName: 'Database',
        departmentManager: 'Fatima',
        departmentLocation: 'France'

      },
      {
        departmentId: 1,
        departmentName: 'IT Support',
        departmentManager: 'Ryan',
        departmentLocation: 'Casablanca'
      }
    ];
    return { departments };
  }
}
