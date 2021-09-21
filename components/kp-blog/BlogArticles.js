import Link from 'next/link';
import BlogPost from './BlogPost';
import BlogSearchBar from './BlogSearchBar';
import NoArticleResults from './NoArticleResults';

function BlogArticles({ blogPosts, filteredPosts, search, setSearch, filterBy, setFilterBy }) {
	return (
		<section className=' bg-main-light lg:px-0 lg:pt-24 lg:pb-32 px-4 pt-20 pb-24'>
			<div className=' lg:max-w-3xl container text-gray-100'>
				<BlogSearchBar
					search={search}
					setSearch={setSearch}
					filterBy={filterBy}
					setFilterBy={setFilterBy}
				/>
				<div className='mt-12'>
					{search === '' &&
						blogPosts.map(post => {
							return (
								<BlogPost
									key={post.title}
									title={post.title}
									excerpt={post.excerpt}
									read_time={post.read_time}
									date={new Date(post.date).toUTCString().slice(5, 16)}
									author={post.author}
									labels={post.labels}
									url={post.url}
								/>
							);
						})}

					{search !== '' &&
						filteredPosts.length !== 0 &&
						filteredPosts.map(post => {
							return (
								<BlogPost
									key={post.title}
									title={post.title}
									excerpt={post.excerpt}
									read_time={post.read_time}
									date={new Date(post.date).toUTCString().slice(5, 16)}
									author={post.author}
									labels={post.labels}
									url={post.url}
								/>
							);
						})}

					{search !== '' && filteredPosts.length === 0 && (
						<NoArticleResults setSearch={setSearch} filterBy={filterBy} />
					)}
				</div>
				<div className='mt-16 text-center'>
					<Link href={`/`}>
						<a
							title='Go back to the main website'
							className=' hover:underline hover:text-green-400 text-2xl font-semibold cursor-pointer'>
							Back to Website{' '}
						</a>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default BlogArticles;
