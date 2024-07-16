export default function BlogPostPage({ params }) {
    return (
        <div>
            <h1>Blog Page</h1>
            <p>{params.slug}</p>
        </div>
    );
}