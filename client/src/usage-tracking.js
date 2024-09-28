import mixpanel from "mixpanel-browser";


export const track = (event , details) => {
    const isSuperAdmin = localStorage.getItem("isSuperAdmin") === "true" || process.env.REACT_APP_SUPER_ADMIN ==="true" ;
    if(isSuperAdmin){
        console.log("superAdmin", event, details);
       return;
    }
    try {
        mixpanel.track(event, details)
    }
    catch(err){
        console.warn("Error tracking ", err);
    } 
}