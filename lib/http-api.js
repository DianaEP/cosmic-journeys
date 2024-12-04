const API_URL = '/api/curiosities';

// GET
export async function httpGetCuriosities(){
    try{
        const response = await fetch(API_URL);

        if(!response.ok){
            throw new Error('Failed to fetch curiosities');
        }

        return await response.json();
    }catch(error){
        console.error(error);
    }
}

// POST
export async function httpPostCuriosity(text){
    try{
        const response = await fetch(API_URL,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text})
        });

        if(!response.ok){
            throw new Error('Failed to add curiosities');
        }

        return await response.json();
    }catch(error){
        console.error(error);
    }
}

// PUT
export async function httpPutCuriosity(id, text){
    try{
        const response = await fetch(`/api/curiosities/${id}`,{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text})
        });

        if(!response.ok){
            throw new Error('Failed to update curiosities');
        }

        const data =  await response.json();

        return data;
    }catch(error){
        console.error(error);
    }
}

// DELETE
export async function httpDeleteCuriosity(id){
    try{
        const response = await fetch(`/api/curiosities/${id}`,{
            method: 'DELETE',
        });

        if(!response.ok){
            throw new Error('Failed to update curiosities');
        }
        const data = await response.json();
        return data;
    }catch(error){
        console.error(error);
    }
}

