export interface Job {
    id: string;
    title: string;
    location: string;
    description: string;
    department: string;
    applyUrl: string;
}

export interface Lookups {
    departments: string[];
    locations: string[];
}

export interface Filters {
    department?: string;
    location?: string;
    search?: string;
}
