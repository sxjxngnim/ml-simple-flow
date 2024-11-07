# MLSimpleFlow Frontend

Welcome to the **MLSimpleFlow** frontend repository! This application is a web-based platform designed to automate and manage the steps involved in developing machine learning models for tabular data. It provides a user-friendly interface for managing data collection tasks, machine learning pipelines, and model versioning.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Data Collection Management](#data-collection-management)
  - [Pipeline Management](#pipeline-management)
  - [Model Versioning](#model-versioning)
- [Technology Stack](#technology-stack)

## Features

- **Data Collection Management**
  - View, add, edit, and delete automated data collection tasks.
  - Support for multiple data sources:
    - Relational databases (MySQL, PostgreSQL)
    - APIs
    - CSV and XLSX (Excel) files
    - Web crawlers

- **Pipeline Management**
  - Create, view, edit, and delete machine learning pipelines.
  - Schedule pipelines to run automatically or execute them immediately.
  - Automatically generate data preprocessing steps based on data analysis.
  - Support for various machine learning algorithms:
    - Linear Regression
    - Random Forest
    - K-Nearest Neighbors (KNN)
    - Neural Networks
    - XGBoost
    - LightGBM
    - ExtraTrees
  - Define hyperparameter search spaces with automatic suggestions.

- **Model Versioning**
  - Track changes in model architecture, parameters, training data, and configurations.
  - Compare performance across different model versions on test datasets.
  - Easily select suitable model versions for deployment.

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**

 ```bash
git clone https://github.com/sxjxngnim/mlsimpleflow-frontend.git
cd mlsimpleflow-frontend
```

2. **Install dependencies**

Using `npm`

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open the application on browser**

Navigate to `http://localhost:5173` in your web browser.

## Usage

### Data Collection Management

- Navigate to the Data Collection section.
- Create a new data collection task by specifying the data source and parameters.
- Supported data sources:
  - Relational Databases: Provide connection details for MySQL or PostgreSQL.
  - APIs: Enter the API endpoint and necessary authentication.
  - Files: Upload CSV or XLSX files.
  - Web Crawlers: Define crawling parameters and target websites.
- Manage existing tasks: view details, edit configurations, or delete tasks.

### Pipeline Management

- Go to the Pipelines section to manage machine learning pipelines.
- Create a new pipeline:
  - Select a data collection task.
  - Choose the problem type: Regression or Classification.
- Select a machine learning algorithm from the supported list.
- Define or adjust hyperparameter search spaces.
- Schedule execution:
  - Set up a schedule for automatic execution.
  - Or run the pipeline immediately.
- Pipeline Execution:
  - The application automatically:
  - Splits the data into training and testing sets (default 80%-20%, adjustable between 60%-80%).
  - Generates data preprocessing steps based on data analysis.
  - Trains the model and optimizes hyperparameters.
- View execution results, including success or failure notifications.

### Model Versioning

- Access the Model Versions section to track and manage different versions.
- Features:
  - Compare model performance metrics like Accuracy, Precision, Recall, F1 Score (for classification), and MAE, MSE, RMSE (for regression).
  - Visualize differences in optimized hyperparameters.
  - Select the best-performing model version for deployment.

## Technology Stack

- Frontend Framework: React.js
- UI Library: Ant Design
- Charts and Visualization: ApexCharts (react-apexcharts)
- State Management: Redux or Context API (depending on implementation)
- Icons: @iconify/react
- HTTP Client: Axios or Fetch API






