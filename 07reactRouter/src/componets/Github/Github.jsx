import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Hassan110Hussain')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])

    return (
        <>
            <div className="text-center m-4 bg-orange-500 text-white p-4 text-3xl">Github bio: {data?.bio}</div>
            <img className="mx-auto block m-4 border-10 border-orange-500 rounded-lg" src={data?.avatar_url} alt="git" width={500} />
            <div className="text-center m-4 bg-orange-500 text-white p-4 text-3xl">Github public repos: {data?.public_repos}</div>
        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Hassan110Hussain')
    return response.json()
}
