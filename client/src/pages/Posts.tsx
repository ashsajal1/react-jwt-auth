import { Card } from "@radix-ui/themes"
import { useEffect, useState } from "react"
import { useAuth } from "../hooks/useAuth"

export default function Posts() {
    const [posts, setPosts] = useState<any[]>([])
    const { state } = useAuth()

    const getPosts = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/posts", {
                headers: {
                    "Authorizationi": `Bearer ${state.user.token}`
                }
            })
            const data = await response.json()
            console.log("posts :", data)
            setPosts(data.posts)
        } catch (error: any) {
            console.error("Error fetching posts:", error)
        }
    }

    useEffect(() => {
        if (state.user) {
            getPosts()
        }

    }, [state.user])

    if (!posts) {
        return (
            <div>
                No post found!
            </div>
        )
    }

    return (
        <div>
            <h2>Posts</h2>
            {posts.map((post: any) => (
                <Card key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.content}</p>
                </Card>
            ))}
        </div>
    )
}