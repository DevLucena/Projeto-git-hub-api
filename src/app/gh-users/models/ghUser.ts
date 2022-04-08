export interface GhUser {

    id:string;
    name:string
    login: string
    avatar_url:string
    html_url:string
    repos_url:string
    location:string
    bio:string
    public_repos: number
    followers:number
    following: number
    created_at:Date // Date é uma classe/objeto e por isso devemos usa-lo com o 'D' maisculo
    organizations_url: string;
    company:string;
}