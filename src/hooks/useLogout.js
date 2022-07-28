import { Auth } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from "../fireBase/config";

export const useLogout=()=>{

const logout=()=>{
    signOut(auth)
    .then(()=>{
        console.log('çıkış yapıldı');
    })
    .catch((err)=>{
        console.log(err.message)
    })
}

return {logout}

}