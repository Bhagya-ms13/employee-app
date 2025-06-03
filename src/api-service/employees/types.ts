export interface Address {
  line1: string;
  pincode: string;
  line2?: string;
  houseNo?: string;
}
export interface employeeResponse{
    
}
export interface Employee {
  id?: number; 
  name: string;
  email: string;
  age: number;
  role: string;
  password?: string; 
  department_id: number;
  employeeId: string; 
  dateOfJoining: string;
  experience: number;
  status:  string;
  address: Address;
}


export type employeeRequest = Employee;