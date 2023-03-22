import { CAP_NHAT_EMAIL } from "../reducers/infoReducers"

export default updateEmail = (user)=>async dispatch=>{
    try {
       await new Promise((resolve, reject) => {
            setTimeout (()=>{
                resolve()
            },500)
        })
       
        dispatch({
            type: CAP_NHAT_EMAIL,
            id: user.id,
            email: user.email,
            userInfo: user
            
        })
        console.log("ĐÃ lấy thông tin từ sever")
    } catch (error) {
       console.log(error)
    }
}