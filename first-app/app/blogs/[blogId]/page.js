
 export default async function BlogId ({params}){
    console.log(await params);
    const {blogId}  = await params;
    
  return (
    <div>Blog {blogId}</div>
  )
}
