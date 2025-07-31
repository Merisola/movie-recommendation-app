# 🎬 Movie Recommendation App

A modern movie discovery web app built with **Next.js** and **TypeScript**. It fetches real-time trending and searched movie data from [TMDb API](https://www.themoviedb.org/), styled with **Styled Components**.

---

## 🚀 Features Implemented So Far

- ✅ Next.js + TypeScript project setup
- ✅ Folder structure for clean architecture
- ✅ Git & GitHub repo initialized and connected
- ✅ TMDb API integration
  - Trending movies
  - Search functionality (coming soon!)
- ✅ Environment variable setup for secure API key loading
- ✅ Styled with `styled-components`
- ✅ Error and loading states handled
- ✅ Responsive movie card grid layout (with hover effects)

---

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/) (App Router + TypeScript)
- [Styled Components](https://styled-components.com/)
- [Axios](https://axios-http.com/)
- [TMDb API](https://developer.themoviedb.org/)
- TypeScript for type safety

---

## 📁 Folder Structure

movie-recommendation-app/
│
├── app/ or pages/ # Main routing pages
├── components/ # Reusable UI components (planned)
├── services/ # API functions (Axios)
│ └── movieService.ts
├── styles/ # Global styles / themes
├── types/ # TypeScript interfaces
│ └── movie.ts
├── utils/ # Utility functions (planned)
├── .env.local # Your TMDb API Key (not committed)

yaml
Copy
Edit

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/movie-recommendation-app.git
cd movie-recommendation-app
2. Install dependencies
bash
Copy
Edit
npm install
3. Set up environment variables
Create a .env.local file in the root:

ini
Copy
Edit
NEXT_PUBLIC_API_KEY=your_tmdb_api_key_here
You can get your API key by signing up at https://www.themoviedb.org/.

4. Run the development server
bash
Copy
Edit
npm run dev
Visit http://localhost:3000 to view the app in your browser.