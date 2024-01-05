import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { LandingPage } from "./pages/LandingPage/LandingPage.jsx"
import { LoginPage } from "./pages/LoginPage/LoginPage.jsx"
import { SignupPage } from "./pages/SignupPage/SignupPage.jsx"
import { CreateProfilePage } from "./pages/CreateProfilePage/CreateProfilePage.jsx"
import { HomePage } from "./pages/HomePage/HomePage.jsx"
import { NetworkPage } from "./pages/NetworkPage/NetworkPage.jsx"
import { UserPage } from "./pages/UserPage/UserPage.jsx"
import { ConnectPage } from "./pages/ConnectPage/ConnectPage.jsx"
import { ChatPage } from "./pages/ChatPage/ChatPage.jsx"
import { LunchPage } from "./pages/LunchPage/LunchPage.jsx"
import { ProfilePage } from "./pages/ProfilePage/ProfilePage.jsx"
import { SettingsPage } from "./pages/SettingsPage/SettingsPage.jsx"
import { ContactsPage } from "./pages/ContactsPage/ContactsPage.jsx"
import { LeaderboardPage } from "./pages/LeaderboardPage/LeaderboardPage.jsx"
import { Achievementspage } from "./pages/AchievementsPage/AchivementsPage.jsx"
import { LunchesPage } from "./pages/LunchesPage/LunchesPage.jsx"
import { EventsPage } from "./pages/EventsPage/EventsPage.jsx"

import { AdminEventsPage } from "./adminpages/AdminEventsPage/AdminEventsPage.jsx"

export const pages = [
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/signup",
    element: <SignupPage />
  },
  {
    path: "/createprofile",
    element: <CreateProfilePage />
  },
  {
    path: "/homepage",
    element: <HomePage />
  },
  {
    path: "/networkpage",
    element: <NetworkPage />
  },
  {
    path: "/userpage/:userid",
    element: <UserPage />
  },
  {
    path: "/connectpage",
    element: <ConnectPage />
  },
  {
    path: "/chatpage",
    element: <ChatPage />
  },
  {
    path: "/lunchpage",
    element: <LunchPage />
  },
  {
    path: "/profilepage",
    element: <ProfilePage />
  },
  {
    path: "/settingspage",
    element: <SettingsPage />
  },
  {
    path: "/contactspage",
    element: <ContactsPage />
  },
  {
    path: "/leaderboardpage",
    element: <LeaderboardPage />
  },
  {
    path: "/Achievementspage",
    element: <Achievementspage />
  },
  {
    path: "/Lunchespage",
    element: <LunchesPage />
  },
  {
    path: "/eventspage",
    element: <EventsPage />
  },
]

export const adminpages = [
  {
    path: "/admin/events",
    element: <AdminEventsPage />
  }
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: pages,
  }
])

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
