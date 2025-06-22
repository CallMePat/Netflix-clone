# Netflix Clone

A full-featured Netflix clone built with modern web technologies. This project aims to replicate the core functionality and user experience of Netflix, including user authentication, movie browsing, watchlists, and video streaming.

## Features

- 🔐 **User Authentication**: Secure signup, login, and logout functionality.
- 🎬 **Movie & TV Show Catalog**: Browse and search a variety of movies and TV shows.
- ⭐ **Watchlist**: Add movies and shows to your personal watchlist.
- 📺 **Video Streaming**: Stream trailers or full movies (demo/sample content).
- 🔍 **Search**: Search for your favorite movies and TV shows.
- 🎨 **Responsive UI**: Clean, modern, and responsive design.

## Tech Stack

- **Frontend**: React.js, Redux, Tailwind CSS (or other CSS framework)
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT, bcrypt
- **API**: TMDb API or custom REST API
- **Deployment**: Vercel, Heroku, or Netlify

## Getting Started

### Prerequisites

- Node.js >= 14.x
- npm or yarn
- MongoDB database (local or cloud)

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/CallMePat/Netflix-clone.git
    cd Netflix-clone
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up environment variables:**
    - Copy `.env.example` to `.env` and fill in the required values (API keys, DB connection, etc).

4. **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app.

## Folder Structure

```
/client      # Frontend React app
/server      # Backend Express server
/public      # Static assets
.env         # Environment variables
```

## API Configuration

- You may need to obtain a free API key from [The Movie Database (TMDb)](https://www.themoviedb.org/documentation/api) for movie data.
- Update your `.env` file with the TMDb API key and other required secrets.

## Demo video
[![Watch the demo](https://img.youtube.com/vi/o1cHKJbdh2g/0.jpg)](https://youtu.be/o1cHKJbdh2g)


## Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check [issues page](https://github.com/CallMePat/Netflix-clone/issues).

## License

[MIT](LICENSE)

---

> _This project is for educational purposes and does not host or distribute pirated content. All media is sourced from public APIs or for demonstration only._
