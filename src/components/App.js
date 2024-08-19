import blogData from '../data/blog'
import Header from './Header'
import About from './About'
import ArticleList from './ArticleList'

const App = () => {
	return (
		<div className='App'>
      <Header name={blogData.name} />
      <About img={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
		</div>
)}

export default App