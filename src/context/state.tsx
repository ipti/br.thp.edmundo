import { useEffect, useState } from "react";
import { User } from "../page/profile/service/types";
import { useFetchRequestFindOneUser } from "../page/profile/service/query";
import { GetIdUser } from "../service/localstorage";


const AplicationState = () => {

    const [user, setuser] = useState<User | undefined>();


    const { data: userRequest } = useFetchRequestFindOneUser(GetIdUser()!)



    useEffect(() => {
      
        if (userRequest) {
            setuser(userRequest)
        }
    }, [userRequest])

    return {
        user
    }
}

export default AplicationState;