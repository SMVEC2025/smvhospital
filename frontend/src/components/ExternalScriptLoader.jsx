import { useEffect } from "react";

const ExternalScriptLoader = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://node.healthray.com/user_inquiry_form/loadScript.js";
        script.charset = "UTF-8";
        script.setAttribute("data-token", "abb004085ae6b30be7a9e96c87812abcf80b37cd18d3d12b4a7c2d288c3d1810");
        script.setAttribute("id", "loadScript");
        document.body.appendChild(script);

        return () => {
            document.getElementById("loadScript")?.remove(); // Cleanup when component unmounts
        };
    }, []);

    return (
        <div>
            <h1>Book an Appointment</h1>
            {/* Your page content here */}
        </div>
    );
};
export default ExternalScriptLoader;
