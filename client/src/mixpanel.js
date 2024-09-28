import mixpanel from "mixpanel-browser";

mixpanel.init(process.env.REACT_APP_MIX_PANEL_TOKEN, {
    debug: false,
    track_pageview: true,
    persistence: "localStorage",
    ignore_dnt: true
});