import appwriteService from '../appwrite/configure'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`} className="group block">
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
                <div className="aspect-video overflow-hidden bg-slate-700">
                    <img
                        src={appwriteService.getFilePreview(featuredImage)}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="p-5">
                    <h2 className="text-white font-semibold text-lg leading-snug group-hover:text-indigo-400 transition-colors duration-200 line-clamp-2">
                        {title}
                    </h2>
                    <p className="mt-2 text-indigo-400 text-sm font-medium flex items-center gap-1">
                        Read more
                        <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default PostCard
