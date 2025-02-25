# Modern Index Dashboard

A modern, visually appealing dashboard that displays index data using Node.js, Express, and Chart.js. The dashboard reads a raw CSV file containing index data and provides an interactive UI with smooth animations, attractive gradient charts, and responsive design.

## Features

- **Interactive Sidebar:** Select from a list of index names.
- **Dynamic Chart:** Displays a line chart of the closing index value over time with smooth animations, gradient fill, and polished tooltip styling.
- **Modern UI:** Clean, modern design using Bootstrap 5 and custom CSS for smooth transitions and hover effects.
- **Responsive:** Optimized for desktop and mobile devices.
  

## CSV File Format

The CSV file should have the following columns:

- `index_name`
- `index_date`
- `open_index_value`
- `high_index_value`
- `low_index_value`
- `closing_index_value`
- `points_change`
- `change_percent`
- `volume`
- `turnover_rs_cr`
- `pe_ratio`
- `pb_ratio`
- `div_yield`

## Setup & Run Instructions

### 1. Clone the Repository


git clone https://github.com/yourusername/stock-dashboard.git
cd stock-dashboard

### 2. Install Dependencies
Ensure you have Node.js installed. Then run:

```bash
npm init -y
npm install express cors csv-parser
node server.js

