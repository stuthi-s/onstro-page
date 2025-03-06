"use client"
import { useState } from "react";
import { FaSearch, FaFilter, FaMapMarkerAlt, FaBuilding, FaRedo } from "react-icons/fa";

type Filters = {
  search?: string;
  function?: string;
  department?: string;
  location?: string;
}

export default function FilterBar({ onFilter }: { onFilter: (filters: Filters) => void }) {
  const [filters, setFilters] = useState<Filters>({});

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value || undefined }));
    onFilter({ ...filters, [name]: value || undefined });
  };

  const handleReset = () => {
    setFilters({});
    onFilter({});
  };

  return (
    <div className="bg-blue-50 p-4 shadow-md rounded-lg">
      <div className="flex items-center border p-2 rounded-lg w-full mb-4">
        <FaSearch className="mr-2" />
        <input
          type="text"
          name="search"
          placeholder="Search"
          value={filters.search || ""}
          onChange={handleChange}
          className="outline-none flex-1 bg-blue-50"/>
      </div>
      
      <div className="flex gap-4 items-center flex-wrap">
        <div className="flex items-center border p-2 rounded-lg bg-blue-50">
          <FaFilter className="mr-2"/>
          <select name="function" value={filters.function || ""} onChange={handleChange} className="outline-none bg-blue-50">
            <option value="">All Functions</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Sales">Sales</option>
            <option value="Business Development">Business Development</option>
            <option value="Arts and Design">Arts & Design</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>

        <div className="flex items-center border p-2 rounded-lg">
          <FaBuilding className="mr-2" />
          <select name="department" value={filters.department || ""} onChange={handleChange} className="outline-none bg-blue-50">
            <option value="">All Departments</option>
            <option value="Engineering">Engineering</option>
            <option value="Sales & Marketing">Sales & Marketing</option>
            <option value="Content and Design">Content & Design</option>
          </select>
        </div>

        <div className="flex items-center border p-2 rounded-lg">
          <FaMapMarkerAlt className="mr-2" />
          <select name="location" value={filters.location || ""} onChange={handleChange} className="outline-none bg-blue-50">
            <option value="">All Locations</option>
            <option value="Goa">Teknorix HQ - Verna, Goa, India </option>
            <option value="Leiria">Marinha Grande - Leiria, Leiria, Portugal</option>
          </select>
        </div>
   
        <button onClick={handleReset} className="flex items-center rounded-lg text-gray-600 hover:text-gray-800">
          <FaRedo className="mr-2"/> 
        </button>
      </div>
    </div>
  )
}
