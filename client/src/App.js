import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  useNavigate,
} from "react-router-dom";
import GameMenu from "./components/GameMenu";
import CreateGame from "./components/CreateGame";
import JoinGame from "./components/JoinGame";
import socket from "./socketConfig";
import TypeRacer from "./components/TypeRacer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Compete from "./components/Compete";
import styles from "./index.css"
function App() {
  const [gameState, setGameState] = useState({
    _id: "",
    isOpen: false,
    players: [],
    words: [],
  });
  const navigate = useNavigate();

  useEffect(() => {
    socket.on("updateGame", (game) => {
      console.log(game);
      setGameState(game);
    });

    return () => {
      socket.removeAllListeners();
    };
  }, []);

  useEffect(() => {
    if (gameState._id !== "") navigate(`/game/${gameState._id}`);
  }, [gameState._id, navigate]);

  return (
    <>
      <Header></Header>
      <div className="grid justify-center items-center p-28">
        <Routes>
          <Route path="/" element={<GameMenu />} />
          <Route path="/game/create" element={<CreateGame />} />
          <Route path="/game/compete" element={<Compete />} />
          <Route path="/game/join" element={<JoinGame />} />
          <Route
            path="/game/:gameID"
            element={<TypeRacer gameState={gameState} />}
          />
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;

