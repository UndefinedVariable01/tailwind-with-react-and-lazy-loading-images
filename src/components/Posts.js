import Post from "./Post"
import firstPostImg from "../media/first-post.jpg"
import secondPostImg from "../media/second-post.jpg"
import thirdPostImg from "../media/third-post.jpg"
import forthPostImg from "../media/forth-post.jpg"
import fifthPostImg from "../media/fifth-post.jpg"
import sixthPostImg from "../media/sixth-post.jpg"

export default function Posts() {
    const posts = [
        { id: 1, src: firstPostImg, title: "If You Like Tuna And Tomato Sauce- Try Combining The Two" },
        { id: 2, src: secondPostImg, title: "It’s Really Not As Bad As It Sounds" },
        { id: 3, src: thirdPostImg, title: "Your Girlfriend Bought Your Favorite Cookie Crisp Cereal" },
        { id: 4, src: forthPostImg, title: "She Looked Into The Mirror And Saw Another Person" },
        { id: 5, src: fifthPostImg, title: "I Liked Their First Two Albums" },
        { id: 6, src: sixthPostImg, title: "Behind The Window Was A Reflection That Only Instilled Fear" },
    ]

    return (
        <div className="grid md:grid-cols-2 gap-x-9 xl:gap-x-14 gap-y-10 xl:gap-y-16 mb-32 md:mb-44 xl:mb-56">
            {posts.map((post) => (
                <Post key={post.id} imgSrc={post.src} title={post.title} />
            ))}
        </div>
    )
}
