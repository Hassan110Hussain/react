import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-700/50 py-12">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex flex-wrap -m-6">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex items-center gap-2 mb-4">
                            <Logo width="32px" />
                            <span className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                MegaBlog
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            A modern blogging platform for sharing ideas and stories with the world.
                        </p>
                        <p className="text-slate-500 text-xs mt-6">
                            &copy; {new Date().getFullYear()} MegaBlog. All rights reserved.
                        </p>
                    </div>

                    {[
                        { title: 'Company', links: ['Features', 'Pricing', 'Affiliate Program', 'Press Kit'] },
                        { title: 'Support', links: ['Account', 'Help', 'Contact Us', 'Customer Support'] },
                        { title: 'Legals', links: ['Terms & Conditions', 'Privacy Policy', 'Licensing'] },
                    ].map((section) => (
                        <div key={section.title} className="w-full p-6 md:w-1/2 lg:w-2/12">
                            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <Link to="/" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-200">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
