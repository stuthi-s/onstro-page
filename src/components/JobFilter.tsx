import { useState, useEffect } from "react";
import { Job, Filters } from "@/types/career";

const API_URL = "https://teknorix.jobsoid.com/api/v1/jobs";

const useJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filters, setFilters] = useState<Filters>({
    search: "",
    department: "",
    location: "",
    jobFunction: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const queryParams = new URLSearchParams();

        if (filters.search) queryParams.append("search", filters.search);
        if (filters.department) queryParams.append("department", filters.department);
        if (filters.location) queryParams.append("location", filters.location);
        if (filters.jobFunction) queryParams.append("function", filters.jobFunction);

        const response = await fetch(`${API_URL}?${queryParams.toString()}`);
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [filters]); // Fetch data when filters change

  const updateFilter = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilter = (key: keyof Filters) => {
    setFilters((prev) => ({ ...prev, [key]: "" }));
  };

  return { jobs, loading, filters, updateFilter, clearFilter };
};

export default useJobs;
