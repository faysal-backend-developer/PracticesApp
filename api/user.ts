import axios from "axios";

export const getUser = async() => {
    const res = await fetch("https://bep2-mdfaysal22-md-faysals-projects.vercel.app/user/get-users", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "no-cors"
    })
    return res.json()
};
type IUser = {
    email: string;
    password: string;
}

export const getUserData = async() => {
    try {
        const res = await axios.get("https://bep2-mdfaysal22-md-faysals-projects.vercel.app/user/get-users");
        console.log(res)
        return res.data;
    } catch (error) {
        console.error(error)
    }
}

// https://bep2-mdfaysal22-md-faysals-projects.vercel.app/user/get-users:--- 


export const postUser = async(user:IUser) => {
    const res = await fetch("https://bep2-mdfaysal22-md-faysals-projects.vercel.app/user/create-users", {
        mode: 'no-cors',
        method: 'POST',
        body: JSON.stringify(user)
    });
    return res.json()
}