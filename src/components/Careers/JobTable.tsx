"use client";
import React, { useState, useEffect } from "react";
import { Table, Tooltip, Radio, List, Input, Select, Pagination } from "antd";
import DOMPurify from "dompurify";
import JobCard from "./JobCard";
import { Job, Department, Location, FunctionRole } from "@/types/career";

interface JobTableProps {
  jobs: Job[];
  departments: Department[];
  locations: Location[];
  functions: FunctionRole[];
}

const { Option } = Select;
const JobTable = ({ jobs, departments, locations, functions }: JobTableProps) => {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
  const [view, setView] = useState("list");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDepartment, setSelectedDepartment] = useState<number | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  const [selectedFunction, setSelectedFunction] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const pageSize = 10;
  const paginatedJobs = filteredJobs.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  useEffect(() => {
    let filtered = jobs;

    if (selectedFunction) filtered = filtered.filter((job) => job.function.id === selectedFunction);
    if (selectedDepartment) filtered = filtered.filter((job) => job.department.id === selectedDepartment);
    if (selectedLocation) filtered = filtered.filter((job) => job.location.id === selectedLocation);

    if (searchTerm) {
      const searchRegex = new RegExp(searchTerm, "i");
      filtered = filtered.filter((job) => searchRegex.test(job.title)); 
    }

    setFilteredJobs(filtered);
    setCurrentPage(1);
  }, [selectedDepartment, selectedLocation, selectedFunction, jobs, searchTerm]);

  const availableDepartments = Array.from(new Set(filteredJobs.map((job) => job.department.id)))
    .map((id) => departments.find((dept) => dept.id === id))
    .filter(Boolean) as Department[]; 

  const availableLocations = Array.from(new Set(filteredJobs.map((job) => job.location.id)))
    .map((id) => locations.find((loc) => loc.id === id))
    .filter(Boolean) as Location[]; 

  const availableFunctions = Array.from(new Set(filteredJobs.map((job) => job.function.id)))
    .map((id) => functions.find((func) => func.id === id))
    .filter(Boolean) as FunctionRole[]

  const columns = [
    { title: "Job ID", dataIndex: "id", key: "id" },
    { title: "Title", dataIndex: "title", key: "title" },
    {
      title: "Function",
      dataIndex: "function",
      key: "function",
      render: (func: FunctionRole) => func?.title || "N/A", 
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      render: (location: Location) =>
        location ? `${location.city || "N/A"}, ${location.state || "N/A"}, ${location.country || "N/A"}` : "N/A",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
      render: (department: Department) => department?.title || "N/A", 
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (desc: string) => (
        <Tooltip title={<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(desc) }} />}>
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(desc.length > 50 ? `${desc.substring(0, 50)}...` : desc) }} />
        </Tooltip>
      )
    }
  ]

  return (
    <div className="max-w-full mx-auto p-6">
      <h1 className="text-4xl font-bold mb-5 text-center">Current Openings</h1>

      <div className="mb-5">
        <Input
          type="text"
          placeholder="Search by job title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-6xl"
        />
      </div>

      <div className="flex flex-wrap gap-4 mb-5">
        <Select
          placeholder="Select Function"
          className="w-1/4"
          onChange={(value) => setSelectedFunction(value)}
          allowClear
        >
          {availableFunctions.map((func) => (
            <Option key={func.id} value={func.id}>{func?.title || "N/A"}</Option> 
          ))}
        </Select>

        <Select
          placeholder="Select Department"
          className="w-1/4"
          onChange={(value) => setSelectedDepartment(value)}
          allowClear
        >
          {availableDepartments.map((dept) => (
            <Option key={dept.id} value={dept.id}>{dept?.title || "N/A"}</Option> 
          ))}
        </Select>

        <Select
          placeholder="Select Location"
          className="w-1/4"
          onChange={(value) => setSelectedLocation(value)}
          allowClear
        >
          {availableLocations.map((loc) => (
            <Option key={loc.id} value={loc.id}>
              {`${loc.city || "N/A"}, ${loc.state || "N/A"}, ${loc.country || "N/A"}`}
            </Option>
          ))}
        </Select>
      </div>

      <Radio.Group onChange={(e) => setView(e.target.value)} value={view} className="mb-5">
        <Radio.Button value="list">List View</Radio.Button>
        <Radio.Button value="table">Table View</Radio.Button>
      </Radio.Group>

      {view === "list" ? (
        filteredJobs.length === 0 ? (
          <p className="text-gray-500">No jobs available</p>
        ) : (
          <List dataSource={paginatedJobs} renderItem={(job: Job) => <JobCard key={job.id} job={job} />} />
        )
      ) : (
        <Table dataSource={filteredJobs} columns={columns} rowKey="id" />
      )}

      {view === "list" && filteredJobs.length > pageSize && (
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredJobs.length}
          onChange={(page) => setCurrentPage(page)}
          className="mt-5 text-center"
        />
      )}
    </div>
  )
}

export default JobTable