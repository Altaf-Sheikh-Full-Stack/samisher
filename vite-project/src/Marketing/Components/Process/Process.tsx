
import Lead from "./Lead/Lead"
import Intent from "./Intent/Intent"
import Meeting from "./Meeting/Meeting"
import Closer from "./Closer/Closer"
import Collection from "./Collection/Collection"
import "./Process.css"


const Process = () => {
    return (
            <div className="Process-Stages">
                <Lead />
                <Intent />
                <Meeting />
                <Closer />
                <Collection />
            </div>

    )
        
}

export default Process