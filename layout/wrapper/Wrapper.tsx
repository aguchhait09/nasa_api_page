import Header from "../header/Header"

interface WrapperProps{
    children: React.ReactNode
}
const Wrapper = ({children, darkMode}: WrapperProps) => {
    
  return (
    <>
    <Header/>
        <main style={{height: "auto"}}>
            {children}
        </main>
    </>
  )
}

export default Wrapper