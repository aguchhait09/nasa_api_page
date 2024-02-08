import Header from "../header/Header"

interface WrapperProps{
    children: React.ReactNode
}
const Wrapper = (props: WrapperProps) => {
    const {children} = props
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