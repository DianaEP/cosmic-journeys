import { deleteCuriosity, updateCuriosity } from "@/lib/curiosities";

export async function PUT(req,context){
    try{
        const params = await context.params;
        const { id } = params;
        const body = await req.json();
        const { text } = body;

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

export async function DELETE(req, context){
    
    const params = await context.params;
    const { id } = params;

    try{
        const deleted = deleteCuriosity(id);

        if(deleted){
            return new Response(
                JSON.stringify({ message: 'Curiosity deleted successfully' }), 
                {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
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