import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-4 pt-1 font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? ' font-bold text-slate-800 focus:border-indigo-700 '
                    : 'text-slate-400 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
