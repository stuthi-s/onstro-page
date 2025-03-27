// types/career.ts

export type Location = {
  id: number;
  city: string;
  state: string;
  country: string;
};

export type Department = {
  id: number;
  title: string;
};

export type FunctionRole = {
  id: number;
  title: string;
};

export type Job = {
  id: number;
  title: string;
  description: string;
  department: Department;
  location: Location;
  function: FunctionRole;
  applyUrl: string;
  type: string;
};

export type ShareJobProps = {
  jobTitle: string;
  jobUrl: string;
};


