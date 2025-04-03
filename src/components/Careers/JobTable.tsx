"use client"
import React, { useState, useEffect } from "react";
import { Table, Radio, List, Input, Dropdown, Button, Modal, Checkbox, Space } from "antd";
import type { RadioChangeEvent, MenuProps } from 'antd';
import DOMPurify from "dompurify";
import JobCard from "./JobCard";
import { Job, Department, Location, FunctionRole, JobTableProps, FilterType } from "@/types/career";

const JobTable: React.FC<JobTableProps> = ({ 
  jobs, 
  departments, 
  locations, 
  functions,
  searchParams 
}) => {

  const [viewMode, setViewMode] = useState<'list' | 'table'>(searchParams.view === 'table' ? 'table' : 'list');
  const [selectedDepartment, setSelectedDepartment] = useState<number | null>(searchParams.department || null);
  const [selectedLocation, setSelectedLocation] = useState<number | null>(searchParams.location || null);
  const [selectedFunction, setSelectedFunction] = useState<number | null>(searchParams.function || null);
  const [searchTerm, setSearchTerm] = useState<string>(searchParams.search || '');
  const [isDescriptionModalVisible, setIsDescriptionModalVisible] = useState(false);
  const [selectedJobDescription, setSelectedJobDescription] = useState<string>('');
  const [visibleColumns, setVisibleColumns] = useState<Record<string, boolean>>({
    id: true,
    title: true,
    function: true,
    location: true,
    department: true,
    description: true
  });
  const [isColumnChooserVisible, setIsColumnChooserVisible] = useState(false);

  const allColumns = [
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
      render: (desc: string) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = DOMPurify.sanitize(desc);
        const plainText = tempDiv.textContent || tempDiv.innerText || '';
        const truncatedText = plainText.length > 50 ? `${plainText.substring(0, 50)}...` : plainText;
        
        return (
          <div>
            <div>{truncatedText}</div>
            {plainText.length > 50 && (
              <Button 
                type="link" 
                onClick={() => handleViewMoreDescription(desc)}
                className="p-0"
              >
                View More
              </Button>
            )}
          </div>
        );
      }
    }
  ];

  const visibleTableColumns = allColumns.filter(column => visibleColumns[column.key as string]);

  const filteredJobs = jobs.filter(job => {
    if (selectedDepartment && job.department.id !== selectedDepartment) return false;
    if (selectedLocation && job.location.id !== selectedLocation) return false;
    if (selectedFunction && job.function.id !== selectedFunction) return false;
    if (searchTerm && !job.title.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  const updateUrl = (params: Record<string, string | null>) => {
    const url = new URL(window.location.href);
    
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        url.searchParams.set(key, value);
      } else {
        url.searchParams.delete(key);
      }
    });
    
    window.history.pushState({}, '', url.toString());
  };

  const handleViewChange = (e: RadioChangeEvent) => {
    setViewMode(e.target.value as 'list' | 'table');
    updateUrl({ view: e.target.value });
  };

  const handleFilterChange = (value: number | null, filterName: FilterType) => {
    switch (filterName) {
      case 'department':
        setSelectedDepartment(value);
        break;
      case 'location':
        setSelectedLocation(value);
        break;
      case 'function':
        setSelectedFunction(value);
        break;
    }
    
    updateUrl({ [filterName]: value?.toString() || null });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    updateUrl({ search: value || null });
  };

  const resetAllFilters = () => {
    setSelectedDepartment(null);
    setSelectedLocation(null);
    setSelectedFunction(null);
    setSearchTerm("");
    
    updateUrl({ 
      department: null, 
      location: null, 
      function: null,
      search: null
    });
  };

  const handleColumnVisibilityChange = (columnKey: string, checked: boolean) => {
    setVisibleColumns(prev => ({
      ...prev,
      [columnKey]: checked
    }));
  };

  const handleViewMoreDescription = (description: string) => {
    setSelectedJobDescription(description);
    setIsDescriptionModalVisible(true);
  };

  useEffect(() => {
    if (selectedDepartment && !departments.some(dept => dept.id === selectedDepartment)) {
      setSelectedDepartment(null);
    }
    
    if (selectedLocation && !locations.some(loc => loc.id === selectedLocation)) {
      setSelectedLocation(null);
    }
    
    if (selectedFunction && !functions.some(func => func.id === selectedFunction)) {
      setSelectedFunction(null);
    }
  }, [departments, locations, functions, selectedDepartment, selectedLocation, selectedFunction]);

  const createMenuItems = (
    items: Array<{ id: number; title?: string; city?: string; state?: string; country?: string }>,
    filterType: FilterType,
    getLabel: (item: { id: number; title?: string; city?: string; state?: string; country?: string }) => string
  ): MenuProps['items'] => {
    return [
      {
        key: 'clear',
        label: 'Clear',
        onClick: () => handleFilterChange(null, filterType)
      },
      {
        type: 'divider'
      },
      ...items.map((item) => ({
        key: item.id.toString(),
        label: getLabel(item),
        onClick: () => handleFilterChange(item.id, filterType)
      }))
    ];
  };
 
  const functionMenu = createMenuItems(
    functions,
    'function',
    (func) => func?.title || "N/A"
  );

  const departmentMenu = createMenuItems(
    departments,
    'department',
    (dept) => dept?.title || "N/A"
  );
  
  const locationMenu = createMenuItems(
    locations,
    'location',
    (loc) => `${loc.city || "N/A"}, ${loc.state || "N/A"}, ${loc.country || "N/A"}`
  );
  
  const getSelectedText = (
    selectedId: number | null,
    items: Array<{ id: number; title?: string; city?: string; state?: string; country?: string }>,
    defaultText: string,
    getLabel: (item: { id: number; title?: string; city?: string; state?: string; country?: string }) => string
  ): string => {
    if (!selectedId) return defaultText;
    const item = items.find(i => i.id === selectedId);
    return item ? getLabel(item) : defaultText;
  };
  
  const getFunctionText = () => getSelectedText(
    selectedFunction,
    functions,
    "Select Function",
    (func) => func?.title || "N/A"
  );
  
  const getDepartmentText = () => getSelectedText(
    selectedDepartment,
    departments,
    "Select Department",
    (dept) => dept?.title || "N/A"
  );
  
  const getLocationText = () => getSelectedText(
    selectedLocation,
    locations,
    "Select Location",
    (loc) => `${loc.city || "N/A"}, ${loc.state || "N/A"}, ${loc.country || "N/A"}`
  );

  return (
    <div className="max-w-full mx-auto p-6">
      <h1 className="text-4xl font-bold mb-5 text-center">Current Openings</h1>
      
      <div className="mb-5">
        <Input
          type="text"
          placeholder="Search by job title"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full max-w-6xl"
          allowClear
        />
      </div>

      <div className="flex flex-wrap gap-4 mb-5 items-center">
        <div className="w-1/4">
          <Dropdown menu={{ items: functionMenu }} trigger={['click']}>
            <Button className="w-full text-left">
              {getFunctionText()} <span className="onstro-down align-middle text-sm md:text-xs lg:text-sm ml-1"></span>
            </Button>
          </Dropdown>
        </div>

        <div className="w-1/4">
          <Dropdown menu={{ items: departmentMenu }} trigger={['click']}>
            <Button className="w-full text-left">
              {getDepartmentText()} <span className="onstro-down align-middle text-sm md:text-xs lg:text-sm ml-1"></span>
            </Button>
          </Dropdown>
        </div>

        <div className="w-1/4">
          <Dropdown menu={{ items: locationMenu }} trigger={['click']}>
            <Button className="w-full text-left">
              {getLocationText()} <span className="onstro-down align-middle text-sm md:text-xs lg:text-sm ml-1"></span>
            </Button>
          </Dropdown>
        </div>
      
        <Button 
          onClick={resetAllFilters}
          title="Reset all filters">
          Reset Filters
        </Button>
      </div>

      <div className="mb-5 flex justify-between items-center">
        <Radio.Group value={viewMode} onChange={handleViewChange}>
          <Radio.Button value="list">List View</Radio.Button>
          <Radio.Button value="table">Table View</Radio.Button>
        </Radio.Group>
        
        {viewMode === 'table' && (
          <Dropdown
            open={isColumnChooserVisible}
            onOpenChange={setIsColumnChooserVisible}
            trigger={['click']}
            menu={{
              items: [
                {
                  key: 'column-chooser',
                  label: (
                    <div className="bg-white p-4 shadow-lg rounded-md min-w-[200px]">
                      <h3 className="font-medium mb-2">Select Columns</h3>
                      <Space direction="vertical">
                        {allColumns.map(column => (
                          <Checkbox
                            key={column.key as string}
                            checked={visibleColumns[column.key as string]}
                            onChange={(e) => handleColumnVisibilityChange(column.key as string, e.target.checked)}>
                            {column.title}
                          </Checkbox>
                        ))}
                      </Space>
                    </div>
                  )
                }
              ]
            }}
            placement="bottomRight"
            >
            <Button icon={<span className="onstro-down align-middle text-sm md:text-xs lg:text-sm"></span>}>
              Select Columns
            </Button>
          </Dropdown>
        )}
      </div>

      {viewMode === "list" ? (
        filteredJobs.length === 0 ? (
          <p className="text-gray-500">No jobs available</p>
        ) : (
          <List dataSource={filteredJobs} renderItem={(job: Job) => <JobCard key={job.id} job={job} />} />
        )
      ) : (
        <Table dataSource={filteredJobs} columns={visibleTableColumns} rowKey="id" />
      )}

      <Modal
        title="Job Description"
        open={isDescriptionModalVisible}
        onCancel={() => setIsDescriptionModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setIsDescriptionModalVisible(false)}>
            Close
          </Button>
        ]}
        width={700}>
        <div 
          className="rich-text-content"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(selectedJobDescription) }} />
      </Modal>
    </div>
  )
}

export default JobTable