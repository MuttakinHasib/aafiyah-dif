"use client"
import NavBar from './navbar';
import TopBar from './top-bar';

export const Header = () => {
  return (
    <header>
      <TopBar />
      <NavBar />
    </header>
  );
};
