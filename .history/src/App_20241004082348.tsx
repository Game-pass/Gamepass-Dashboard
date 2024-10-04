import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./ui/SignIn";
import Dashboard from "./ui/Dashboard";
import { ThemeProvider } from "./component/theme-provider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-[#000]">
        <BrowserRouter>
          <Routes>
            {/* Route for SignIn page */}
            <Route path="/" element={<SignIn />} />

            {/* Route for Dashboard page */}
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
