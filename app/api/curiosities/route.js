import { addCuriosity, deleteCuriosity, getCuriosities, updateCuriosity } from "@/lib/curiosities";

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

export async function PUT(req){
    const { id, text } = await req.json();
    try{
        const updated = updateCuriosity(id, text);

        if(updated){
            return new Response(JSON.stringify({id, text}), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }else{
            return new Response('Curiosity not found', {
                status: 404
            })
        }
    }catch(error){
        return new Response('Something went wrong', {
            status: 500
        })
    }
}


// -------------------------------------------------------------------------------------

export async function DELETE(req){
    const { id } = await req.json();

    try{
        const deleted = deleteCuriosity(id);

        if(deleted){
            return new Response('Curiosity deleted successfully', {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }else{
            return new Response('Curiosity not found', {
                status: 404
            })
        }
    }catch(error){
        return new Response('Something went wrong', {
            status: 500
        })
    }
}