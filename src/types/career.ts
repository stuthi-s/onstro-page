export interface Job {
    id: number;
    title: string;
    location: string;
    description: string;
    department: string;
    applyUrl: string;
    type: string;
}

export interface Lookups {
    departments: string[];
    locations: string[];
}

export interface Filters {
    search?: string;
    function?: string;
    department?: string;
    location?: string;
}