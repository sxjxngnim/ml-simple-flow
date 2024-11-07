import { Icon } from "@iconify/react";

export const SIDEBAR_MENUITEMS = [
  {
    key: "dashboard",
    label: "Dashboard",
  },
  {
    key: "data_source",
    label: "Data Source",
  },
  {
    key: "dataset",
    label: "Dataset",
  },
  {
    key: "experiment",
    label: "Experiment",
  },
  {
    key: "model",
    label: "Model",
  },
  {
    key: "setting",
    label: "Setting",
  }
];

export const SUPPORTED_DATASOURCE_TYPES = [
  {
    key: "database",
    label: "Database",
    icon: "bi:database",
    description: "Collect data directly from relational databases like MySQL or PostgreSQL.",
  },
  {
    key: "api",
    label: "API",
    icon: "material-symbols:cloud-outline",
    description: "Fetch data from external APIs using RESTful endpoints.",
  },
  {
    key: "file_upload",
    label: "File Upload",
    icon: "bi:file-earmark-arrow-up",
    description: "Upload CSV or Excel files directly from your device.",
  },
  {
    key: "web_scraping",
    label: "Web Scraping",
    icon: "akar-icons:html-fill",
    description: "Collect data from websites through web scraping techniques.",
  }
];