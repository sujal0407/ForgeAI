import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Dashboard />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#18181B",
            color: "#fff",
            border: "1px solid #27272A",
          },
        }}
      />
    </>
  );
}

export default App;