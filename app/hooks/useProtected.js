import { useRouter } from "next/navigation";
import { useTokenStorage } from "./useTokenStorage";



/**
 * check if the user as a Token if not
 * send the user back to the route login 
 * but if the user the token just return 
 * this hook must be called in a useEffect 
 */

const useProtected = () => {
    router = useRouter()
    //if the user as token 
    const {token} = useTokenStorage();

    if (!token)
       return route.push("/login")
    return 
}


export default useProtected;
