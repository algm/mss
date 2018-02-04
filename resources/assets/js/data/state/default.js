export default {
    user: {
        loggedIn: false,
        data: null
    },
    time: {
        current: window.MSS_VARS.time || 0,
        factor: window.MSS_VARS.timeFactor || 1
    }
};