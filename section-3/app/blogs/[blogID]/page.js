import Link from "next/link";

//jab hume SSG me koi or extra page nahi karvana chate hai 
export const dynamicParams = false;

// ISR(Incremental Site Rendering)
export const revalidate = 5;

// Server Site Generation(SSG)
export async function generateStaticParams() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json()
    return data.map(({ id }) => ({ blogID:`${id}`}));
 
}

const Blog = async ({ params }) => {
  const { blogID } = await params;
  console.log("blogID: ", blogID);
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="nav-link active">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Welcome to Our Blog {blogID}</h1>
        <h2>Date: {new Date().toLocaleString()}</h2>
        <p>This is blog {blogID} page.</p>
      </div>
    </>
  );
};

export default Blog;
