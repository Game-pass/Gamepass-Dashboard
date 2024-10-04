
import SignIn from "./ui/SignIn"
import { ThemeProvider } from "./component/theme-provider"
import Dashboard from "./ui/Dashboard"


const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-[#000]"  >
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
        </BrowserRouter>
        
        <SignIn />
      {/* < Dashboard /> */}
      {/* <AuthForm /> */}
      

    </div>
    </ThemeProvider>
    
  )
}

export default App
