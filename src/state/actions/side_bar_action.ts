export function openSideBar (){
    console.log('fireng');
    return (dispatch:any)=>{
        return dispatch({type: "OPEN_SIDEBAR"})
    }
}

    