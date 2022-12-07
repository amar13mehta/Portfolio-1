import "./topbar.scss"
import {Person,Mail} from "@mui/icons-material"

export default function Topbar({menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="warpper">
                <div className="left">
                     <a href="#intro" className="logo">
                         Amar.
                     </a>
                     <div className="itemcontainer">
                        <Person className="icon"/>   
                        <span>+91 7599957651</span>
                     </div>
                     <div className="itemcontainer">
                        <Mail className="icon"/>
                        <span>amar13iam@gmail.com</span>
                     </div>
                </div >
                
                <div className="right">

                     <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                          <span className="line1"></span>
                          <span className="line2"></span>
                          <span className="line3"></span>

                     </div>                    
                </div>
                 
            </div>
        </div>
    )
}
