export type Job = {
    id: number;
    title: string;
    location: {  id: number; city: string; state: string; country: string };
    description: string;
    department: { id: number; title: string}
    applyUrl: string;
    type: string;
    responsibilities: string[];
    requirements: string[];
    created_at: string;
    updated_at: string;
    company_id: number;
    function: string;
    }

  export type Filters = {
    search?: string;
    function?: string;
    department?: string;
    location?: string;
    jobFunction: string;
  };