import { promises} from 'fs';

export default async function deleteFile(path: string){
    try{
        await promises.stat(path);
    }catch{
        return;
    }
    await promises.unlink(path);

}