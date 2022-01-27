

export interface IUser {
    name: string
    image: string
    email: string
}

export interface IVideo {
    title: string
    likes: IUser[]
    videoUrl: string
    subscriber: IUser[]
    desc: string
}