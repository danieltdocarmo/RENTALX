declare namespace Express{
    export interface Request{
        user:{
            id: string;
        }
    }
}

declare namespace jest{
    export interface Matchers<R>{
     compareArrayToCategory_id(received: Car[])
        }
}