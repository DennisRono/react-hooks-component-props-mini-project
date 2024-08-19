import Article from './Article'

const ArticleList = ({ posts }) => {
    const articles = posts.map(p => <Article key={p.id} {...p} />)

    return (
        <main>
            {articles}
        </main>
)}

export default ArticleList