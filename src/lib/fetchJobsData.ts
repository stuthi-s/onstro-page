import { Job } from "@/types/career";

export const fetchJobsData = async (
  searchTerm = "", 
  departmentId?: number, 
  locationId?: number, 
  functionId?: number, 
  page = 1, 
  pageSize = 10
) => {
  try {
    const [jobsRes, departmentsRes, locationsRes, functionsRes] = await Promise.all([
      fetch("https://teknorix.jobsoid.com/api/v1/jobs", { next: { revalidate: 3600 } }),
      fetch("https://teknorix.jobsoid.com/api/v1/departments", { next: { revalidate: 3600 } }),
      fetch("https://teknorix.jobsoid.com/api/v1/locations", { next: { revalidate: 3600 } }),
      fetch("https://teknorix.jobsoid.com/api/v1/functions", { next: { revalidate: 3600 } }),
    ]);

    if (!jobsRes.ok || !departmentsRes.ok || !locationsRes.ok || !functionsRes.ok) {
      throw new Error("One or more requests failed");
    }

    const [jobs, departments, locations, functions] = await Promise.all([
      jobsRes.json(),
      departmentsRes.json(),
      locationsRes.json(),
      functionsRes.json(),
    ]);

    let filteredJobs = jobs as Job[];

    if (searchTerm) {
      filteredJobs = filteredJobs.filter((job) => job.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    if (departmentId) filteredJobs = filteredJobs.filter((job) => job.department.id === departmentId);
    if (locationId) filteredJobs = filteredJobs.filter((job) => job.location.id === locationId);
    if (functionId) filteredJobs = filteredJobs.filter((job) => job.function.id === functionId);

    const totalJobs = filteredJobs.length;
    filteredJobs = filteredJobs.slice((page - 1) * pageSize, page * pageSize);

    return { jobs: filteredJobs, departments, locations, functions, totalJobs };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { jobs: [], departments: [], locations: [], functions: [], totalJobs: 0 };
  }
}; 