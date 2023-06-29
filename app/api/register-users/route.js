import { app } from "@utils/firebase";
import {getAuth,createUserWithEmailAndPassword , sendEmailVerification } from "firebase/auth";
import { getFirestore, setDoc , doc } from "firebase/firestore"

//intialize the db 
export const POST = async (req, res) => {
    //get the database
    const db = getFirestore(app);


    const auth = getAuth();

    const { email, username, password } = await req.json();
   
    console.log("*******");
    console.log(email);
    console.log("*******")
    
    try{
    
     const userCredential= await createUserWithEmailAndPassword(auth,email,password);
      
        const uid = userCredential.user.uid
       
        const data ={
            id:uid,
            email:email,
            name:username,
        }


        //create the ref
        const ref = doc(db, 'userDatabase',uid);
         
        try {

         //store the data in firebase
         await setDoc (ref,data);

         return new Response("user Create successfully",{status:200});
            
        } catch (error) {
            return new Response("unable to store the user",{status:500})
        }
       

    }catch(error){

    //Handling the error code of the user    
    const errorCode = error.code;
    const errorMessage = error.message;

    return new Response(`Fail to create the user${errorMessage}`,{status:500});
    }
    
  };


  