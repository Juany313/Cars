import React from 'react'
import Navbar from './components/Navbar/Navbar'




const App = () => {

  /* Dark Mode */
  const [theme, setTheme]=React.useState(localStorage.getItem("theme")?
    localStorage.getItem("theme"): "light");

  const element = document.documentElement;

  React.useEffect(()=>{
    if(theme == "dark"){
      element.classList.add("dark");
      localStorage.setItem("theme","dark")
    }else {
      element.classList.remove("dark");
      localStorage.setItem("theme","light")
    }
  },[theme])

  return (
    <div className=''>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App