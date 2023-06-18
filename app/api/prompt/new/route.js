import {connectToDB} from '@utils/database';
import Prompt from '@models/prompt'

export const POST = async (req) => {
   const {userId,prompt,tag} =  await  req.json();

   try{
    //connect to the Database
     await connectToDB();

     const newPrompt = new Prompt({
        creator:userId,
        prompt,
        tag
    })
    //Save the prompt in the Database
    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt),{status:201})
   } catch(error){
    return new Response("Fail to create a new prompt",{status:500})
   }
}