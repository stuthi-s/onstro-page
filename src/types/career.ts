export type Job = {
  id: number;
  title: string;
  location: Location;
  description: string;
  department: Department;
  applyUrl: string;
  type: string;
  responsibilities: string[];
  requirements: string[];
  company_id: number;
  function: FunctionRole;
};

export interface Department {
  id: number;
  title: string;
}

export interface Location {
  id: number;
  city: string;
  state: string;
  country: string;
}

export interface FunctionRole {
  id: number;
  title: string;
}

export interface ShareJobProps {
  jobTitle: string;
  jobUrl: string;
}

export type JobFiltersProps = {
  functions: FunctionRole[];
  departments: Department[];
  locations: Location[];
  onFunctionChange?: (value: number) => void;
  onDepartmentChange?: (value: number) => void;
  onLocationChange?: (value: number) => void;
};
