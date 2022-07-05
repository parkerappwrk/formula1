import React from "react";
import Fialogo from '../images/fia_logo.png';
import Todo from './todo/todo';
import ViewplayerProfile from './viewplayerProfile';
export default function Home(props) {
    return (
        <>
      <Todo></Todo>
      <ViewplayerProfile></ViewplayerProfile>
      </>
    )
}