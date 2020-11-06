import {FireStore} from "../FireBase/firebase"


export const startFetchAds = ()=>{

    return {
        type: "START_FETCH_ADS",
    }
}
export const getAds = (ads)=>{

return {
    type: "GET_ADS",
    payload: ads
}

}
export const errorFetchInAds = (err)=>{

    return {
        type: "ERROR_IN_FETCH",
        payload: err
    }
    
    }

export const asyncAdsFetch = ()=>{

return (dispatch)=>{

dispatch(startFetchAds())

FireStore.collection("ads").get()
.then((querySnapShot)=> 
 querySnapShot
.forEach((doc)=>dispatch(getAds(doc.data()))))



}

}    

export const is_Category = (category)=>{
    return {
        type: "IS_CATEGORY",
        payload: category
    }
}