import { dateFormat } from "../utils/utils";
export default function Events ({posts})  {
  return (
    <div className="container mx-auto p-10">
      <div className="md:masonry-2-col lg:masonry-3-col box-border mx-auto before:box-inherit after:box-inherit">
      {posts.map(post => (
            <div className="break-inside shadow-xl rounded-lg m-9" key={post.id}>
              <img
                className="max-w-full h-auto rounded-lg"
                src={post.image}
              />
              <div className="px-6 py-4">
                <div className="text-white 
                inline-block
                bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                  {dateFormat(post.date).fulldate}
                </div>
                <p className="font-bold text-xl mb-2">
                  {post.title}
                </p>
                <div className="flex items-center mt-8">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src={post.image}
                  />
                  <div className="text-sm">
                    <p className="text-gray-900 leading-none">
                      {post.speaker}
                    </p>
                    <p className="text-gray-600">Speaker</p>
                  </div>
                </div>
          </div>
          </div>
          ))}
        </div>
    </div>
  );
};


export async function getStaticProps() {
  const fs = require('fs')
  const matter = require('gray-matter')
  const uniqid = require('uniqid')

  const postsDir = `${process.cwd()}/posts`

  const files = fs.readdirSync(postsDir, 'utf-8')
  const posts = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const rawContent = fs.readFileSync(`${postsDir}/${file}`, { encoding: 'utf8' })
      const { data } = matter(rawContent)

      return { ...data, id: uniqid()}
    })

  return {
    props: { posts }
  }
}
