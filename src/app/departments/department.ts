
/* Define the Department entity */
export interface Department {
  departmentId: number;
  departmentName: string;
  departmentManager: string;
  departmentLocation: string;
}

export interface DepartmentRec {
  Department: Department;
  error?: any;
}
