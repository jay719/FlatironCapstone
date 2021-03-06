import {combineReducers} from 'redux'


const tripName = (state='', action) =>{
    switch(action.type){
        case"SET_NAME":
            return action.name
         default:
            return state
    }
}
const latitude = (state='', action) =>{
    switch(action.type){
        case"SET_LATITUDE":      
            return action.latitude  
        default:
            return state
    }   
}
const longitude = (state='', action) => {
    switch(action.type){
        case"SET_LONGITUDE":
            return action.longitude
        default:
            return state
    }
}

const start = (state='', action) => {
    switch(action.type){
        case "SET_START":
            return action.start
        default:
            return state
    }
}
const end = (state='', action) => {
    switch(action.type){
        case "SET_END":
            return action.end
        default:
            return state
    }
}

const generatedRestaurants = (state=[],action) => {
    switch(action.type){
        case"SET_GENERATED_RESTAURANTS":
            return action.food
        default:
            return state
    }
}
const generatedUserObject = (state=[], action) => {
    switch(action.type){
        case"SET_GENERATED_USER":
            return action.userObject
        default:
            return state
    }
}
const currentUser = (state="", action) => {
    switch (action.type){
        case"SET_CURRENT_USER":
            return action.currentUser
        default:
            return state
    }
}
const currentUserID = (state="", action) => {
    switch (action.type){
        case"SET_CURRENT_ID":
            return action.currentID
        default:
            return state
    }
}
const currentIcon = (state="", action) => {
    switch(action.type){
        case"SET_ICON":
            return action.icon
        default:
            return state
    }
}
const tripDescription = (state='N/A', action) => {
    switch(action.type){
        case"SET_DESCRIPTION":
            return action.description
        default:
            return state
    }
}
const tripRestaurants = (state=[],action) => {
    switch(action.type){
        case"SET_FOOD":
            return [...state, action.food]
        default:
            return state
    }
}
const tripPhoto = (state='N/A', action) => {
    switch(action.type){
        case"SET_PHOTO":
            return action.trip
        default:
            return state
    }
}
export default combineReducers({ 
    latitude, 
    longitude,
    start,
    end,
    tripName,                  
    generatedRestaurants,
    generatedUserObject,
    currentUser,
    currentUserID,
    tripDescription,
    currentIcon,
    tripPhoto,
    tripRestaurants
})
