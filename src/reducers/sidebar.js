const sidebar = (state = "open", action) => {
    switch (action.type) {
        case 'TOGGLE_NOTEBOOK':
            console.log(state)
            if(state=="open"){
                return "close"
            }
            return "open"
        default:
            return state
    }
}

export default sidebar;
