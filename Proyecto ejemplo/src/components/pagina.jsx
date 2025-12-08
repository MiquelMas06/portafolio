import Top from "./Top.jsx"
import Header from "./Header.jsx"
import Main from "./Main.jsx"
import Footer from "./Footer.jsx"

export default function App(){
    return(
        <>
            <div style={{maxWidth: "500px"}}>
                <Top/>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </>
    )
}
