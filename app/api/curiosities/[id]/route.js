import { deleteCuriosity, updateCuriosity } from "@/lib/curiosities";

export async function PUT(req,{params}){
    try{
        
        const{ id } = params;
        const { text } = await req.json();
       
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

export async function DELETE(req, { params }){
    // const { id } = await req.json();
    const{ id } = params;

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