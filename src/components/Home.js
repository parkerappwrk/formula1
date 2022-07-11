import React from "react";
import Todo from './todo/todo';
import Navbar from './navbar/navbar';
import ViewplayerProfile from './viewplayerProfile';

export default function Home() {
    return (
      <>
        <Navbar></Navbar>
        <Todo></Todo>
        <ViewplayerProfile></ViewplayerProfile>
      </>
    )
}