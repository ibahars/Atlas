import Home from "./pages/MainHome";
import { useState } from "react";
import Welcome from "./pages/Welcome";
function App() {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <>{isStarted ? <Home /> : <Welcome onStart={() => setIsStarted(true)} />}</>
  );
}

export default App;
