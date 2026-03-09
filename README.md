# GitHub Analytics Dashboard

A real-time analytics dashboard built with React and TypeScript that visualizes GitHub repository data including commit activity, language distribution, and contributor statistics.

🔗 **[Live Demo](https://github-analytics-dashboard-jarrett.vercel.app)**

## Features

- 🔍 **Repository Search** - Search any public GitHub repository by owner/name
- 📊 **Language Distribution** - Interactive pie chart showing programming languages used
- 👥 **Top Contributors** - Display of the most active contributors with contribution counts
- 📈 **Commit Activity** - 52-week commit history visualization with line chart
- ⚡ **Real-time Data** - Fetches live data directly from the GitHub API
- 🎨 **Modern UI** - Clean, responsive design with dark theme
- 🚀 **Fast Performance** - Built with Vite for optimal load times

## Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Data Visualization:** Recharts
- **Styling:** Tailwind CSS
- **HTTP Client:** Axios
- **Deployment:** Vercel
- **API:** GitHub REST API

## Getting Started

### Prerequisites

- Node.js 18+ installed
- GitHub Personal Access Token (for API authentication)

### Installation

1. Clone the repository

```bash
git clone https://github.com/JarrettWoo/github-analytics-dashboard.git
cd github-analytics-dashboard
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the project root

```bash
VITE_GITHUB_TOKEN=your_github_token_here
```

4. Start the development server

```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

### Getting a GitHub Token

1. Go to [GitHub Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens)
2. Generate a new token (classic)
3. Select the `public_repo` scope
4. Copy the token and add it to your `.env` file

## Project Structure

```
src/
├── components/
│   ├── CommitChart.tsx      # 52-week commit activity line chart
│   ├── ContributorList.tsx  # Top contributors display
│   ├── LanguageChart.tsx    # Language distribution pie chart
│   ├── LoadingSpinner.tsx   # Loading state component
│   ├── RepoOverview.tsx     # Repository stats display
│   └── RepoSearch.tsx       # Search input component
├── services/
│   └── githubAPI.ts         # GitHub API service layer
├── types/
│   └── github.ts            # TypeScript interfaces
├── App.tsx                  # Main application component
└── main.tsx                 # Application entry point
```

## Key Features Implementation

### Component Architecture

- **Separation of Concerns:** Each component has a single responsibility
- **Service Layer:** API calls isolated from UI components for better maintainability
- **Type Safety:** Full TypeScript coverage with strict typing

### Data Visualization

- **Recharts Integration:** Professional charts with interactive tooltips
- **Data Transformation:** Clean data pipelines from API to chart-ready format
- **Responsive Design:** Charts adapt to different screen sizes

### API Integration

- **Rate Limiting:** Authenticated requests for 5000 req/hour limit
- **Error Handling:** Graceful error states and loading indicators
- **Type-Safe Responses:** Full TypeScript interfaces for API data

## Deployment

The project is deployed on Vercel with automatic deployments on every push to the main branch.

To deploy your own instance:

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Add the `VITE_GITHUB_TOKEN` environment variable in Vercel's settings
4. Deploy!

## Learning Outcomes

This project was built as a learning exercise to demonstrate:

- Modern React development with TypeScript
- Component-based architecture and state management
- Data visualization with third-party libraries
- RESTful API integration and error handling
- Environment variable configuration
- CI/CD with Vercel

## Future Enhancements

- [ ] Add repository comparison feature
- [ ] Implement dark/light theme toggle
- [ ] Add more detailed analytics (issues, pull requests, releases)
- [ ] Include repository search history
- [ ] Add export functionality for charts

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Jarrett Woo

- GitHub: [@JarrettWoo](https://github.com/JarrettWoo)
- Project Link: [https://github.com/JarrettWoo/github-analytics-dashboard](https://github.com/JarrettWoo/github-analytics-dashboard)

---

Built with ❤️ using React, TypeScript, and Recharts
