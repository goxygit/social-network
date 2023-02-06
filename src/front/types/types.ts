export type UsersType ={
    id: number,
    name: string,
    status: string,
    photos: {
      small: string | null,
      large: string | null
    }
  }
export type ContactsType ={
    github: string,
    vk: string
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string
}
export type UserProfileType ={
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType,
    photos: {
      small: string | null,
      large: string | null
    }
}
export type ArrayPostType ={
    id: number ,
    post: string,
    like: number
  } 