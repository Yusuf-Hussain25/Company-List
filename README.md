# Stock Chart Web Application

This is a React-based web application that allows users to view stock price charts of various companies. The application fetches data from a CSV file, processes it, and displays a list of companies. When a user clicks on a company name, a chart of that company's stock price is displayed on the right-hand side.

## Features

- **Company List**: A sidebar displays a list of companies loaded from a CSV file.
- **Chart Display**: Upon clicking a company name, a chart displaying its stock prices (closing values) is shown.
- **Dynamic Data**: The data is fetched from a remote CSV file, processed, and displayed dynamically.

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **Chart.js**: Library to render interactive charts.
- **PapaParse**: A library to parse CSV data.
- **Vite**: A fast build tool for modern web development.
- **React-Chartjs-2**: A React wrapper for Chart.js.

## Setup Instructions

### Prerequisites

Ensure that you have the following installed:
- **Node.js** (version 16 or higher)
- **npm** (Node Package Manager)

### Steps to Run the Application

1. **Clone the repository**:
   ```bash
   git clone <https://github.com/Yusuf-Hussain25/Company-List>
   ```

2. **Navigate to the project directory**:
   ```bash
   cd stock-chart
   ```

3. **Install dependencies**:
   Run the following command to install all required dependencies:
   ```bash
   npm install
   ```

4. **Start the development server**:
   To start the application locally, run:
   ```bash
   npm run dev
   ```
   This will start the development server, and you can access the app in your browser at `http://localhost:3000`.

### Application Layout

- **Left Sidebar**: Displays a list of companies fetched from the CSV file. Users can click on a company name to view the stock chart for that company.
- **Right Chart Area**: Displays the stock price chart of the selected company.

### CSV File

The application fetches the stock data from the following CSV file:
```
https://raw.githubusercontent.com/shaktids/stock_app_test/refs/heads/main/dump.csv
```
This file contains stock data, including the `index_name` (company name), `index_date`, and `close_index_value` (stock closing price).

### Example

The user will see a list of companies on the left side. Upon clicking on a company name, the stock chart for that company will appear on the right side, showing the stock's closing prices over time.

## Project Structure

```plaintext
stock-chart/
├── src/
│   ├── components/
│   │   └── Chart.js      # Component to render the chart
│   ├── App.js           # Main app component
│   └── main.js          # Entry point for React app
├── public/
│   └── index.html       # HTML template
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration file
└── .gitignore           # Git ignore file
```

## Commands

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run preview`: Previews the production build locally.
- `npm run lint`: Runs ESLint to check code quality.

## Troubleshooting

1. **Missing `package.json`**: If you encounter issues with missing `package.json`, ensure you're in the correct directory.
2. **Missing Dependencies**: If dependencies are not installing correctly, delete the `node_modules` folder and try running `npm install` again.

## Contributing

Feel free to fork this repository and submit pull requests for improvements or bug fixes. Make sure to follow the existing code structure and add appropriate tests.

## License

This project is licensed under the MIT License.

---
