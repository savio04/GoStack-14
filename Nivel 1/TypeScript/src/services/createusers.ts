interface TechProps{
    title:string;
    experience:number
}

interface CreateUsersdata{
    name: string;
    email:string;
    password:string;
    techs?: string[];
}

export function createUsers({ email,name,password }:CreateUsersdata){
    const users = {
        name,
        email,
        password,
    }

    return users
}