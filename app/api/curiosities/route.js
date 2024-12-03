import { addCuriosity, getCuriosities } from "@/lib/curiosities";

// HTTP method handlers

export async function GET(){
    try{
        const curiosities = getCuriosities();
        return new Response(JSON.stringify(curiosities), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }catch(error){
        return new Response('Something went wrong', {
            status: 500
        })
    }
}

// -------------------------------------------------------------------

export async function POST(req){
    const { text } = await req.json();
    try{
        const {id, text: addedText} = addCuriosity(text);
        return new Response(JSON.stringify({id, text: addedText}), {
            status: 201,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }catch(error){
        return new Response('Something went wrong', {
            status: 500
        })
    }

}

// -----------------------------------------------------------------------

