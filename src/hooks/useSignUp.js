import { useState } from "react";

import {auth} from "../fireBase/config";

import {createUserWithEmailAndPassword} from 'firebase/auth';


export const useSignUp=()=>{

    const [error,setError]=useState(null);

    const signup=(email,password)=>{
        setError(null)
        createUserWithEmailAndPassword(auth,email,password)
            .then((res)=>{
                console.log('kullanıcı oluşturuldu',res.user);
            })
            .catch((err)=>{
                setError(err.message)
            })
    }

    return {error,signup}
}