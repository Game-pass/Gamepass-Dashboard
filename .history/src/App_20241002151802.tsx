
// import AuthForm from "./ui/AuthForm"
import { ThemeProvider } from "./component/theme-provider"
import Dashboard from "./ui/Dashboard"


const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-[#1F2937]"  >
      < Dashboard />
      {/* <AuthForm /> */}
      

    </div>
    </ThemeProvider>
    
  )
}

export default App
