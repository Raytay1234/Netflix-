import React, { useState } from "react";
import Layout from "./components/Layout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Profiles from "./pages/Profiles";
import Account from "./pages/Account";
import MyList from "./pages/MyList";
import LandingPage from "./pages/LandingPage"; // NEW

// Placeholder pages
const TVShows = () => (
  <div className="min-h-screen pt-20 px-6 text-white bg-gray-900">
    <h1 className="text-4xl font-bold mb-4">TV Shows</h1>
    <p>All your favorite TV shows in one place.</p>
  </div>
);

const Movies = () => (
  <div className="min-h-screen pt-20 px-6 text-white bg-gray-900">
    <h1 className="text-4xl font-bold mb-4">Movies</h1>
    <p>Browse the latest and classic movies.</p>
  </div>
);

const NewAndPopular = () => (
  <div className="min-h-screen pt-20 px-6 text-white bg-gray-900">
    <h1 className="text-4xl font-bold mb-4">New & Popular</h1>
    <p>See what’s trending now!</p>
  </div>
);

export default function App() {
  const [page, setPage] = useState("landing"); // START ON LANDING PAGE
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);

  const pages = {
    landing: <LandingPage setPage={setPage} darkMode={darkMode} />,
    signin: <SignIn setPage={setPage} setUser={setUser} darkMode={darkMode} />,
    signup: <SignUp setPage={setPage} setUser={setUser} darkMode={darkMode} />,
    home: <Home darkMode={darkMode} />,
    profile: <Profile setPage={setPage} user={user} darkMode={darkMode} />,
    account: <Account setPage={setPage} setUser={setUser} user={user} darkMode={darkMode} />,

    mylist: <MyList darkMode={darkMode} />,
    profiles: (
      <Profiles
        setPage={setPage}
        user={user}
        setUser={setUser}
        darkMode={darkMode}
      />
    ),
    tvshows: <TVShows />,
    movies: <Movies />,
    new: <NewAndPopular />,
  };

  return (
    <Layout
      user={user}          // <-- IMPORTANT FIX
      page={page}
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      setPage={setPage}
    >
      {pages[page] || <SignIn setPage={setPage} setUser={setUser} />}
    </Layout>
  );
}
