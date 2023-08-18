import { Navbar, Footer, BlogContent } from "../components"

const BlogContentPage = ({blogs}) => {
  console.log("Blog Content Page")
  console.log(blogs)

  return (
    <div>
      <Navbar />
      <BlogContent blogs={blogs} />
      <Footer />
    </div>
  )
}

export default BlogContentPage
