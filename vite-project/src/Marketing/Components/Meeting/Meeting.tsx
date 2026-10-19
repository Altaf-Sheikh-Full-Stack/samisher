
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";


const Meeting = () => {

      useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "demo" });
            cal("ui", { "theme": "light", "cssVarsPerTheme": { "light": { "cal-brand": "#292929" }, "dark": { "cal-brand": "#df00ff" } }, "hideEventTypeDetails": false, "layout": "column_view" });
        })();
    }, [])


    return (
        <Cal namespace="demo"
            calLink="samisher/demo"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ "layout": "column_view", "useSlotsViewOnSmallScreen": "true", "theme": "light" }}


        />
    )   
}

export default Meeting



