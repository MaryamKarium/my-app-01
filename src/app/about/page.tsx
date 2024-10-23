import Header from "../componenets/Header"
import { Herosection} from "../componenets/Herosection"
import { Footer } from "../componenets/Footer"
export default function aboutUs () {
    return (
        <div>
            <Header/>
        <h1 className="text-fuchsia-950 font-serif">
            About Us
        </h1>
        <Herosection/>
        <Footer/>
        
        </div>
    )
}