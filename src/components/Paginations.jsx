import React from 'react'

export const Paginations = ({ productsPerPage, totalProducts, currentPage, setCurrentPage }) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }

    const onPreviusPage = () => {

        setCurrentPage(currentPage - 1);
    }

    const onNextPage = () => {

        setCurrentPage(currentPage + 1);
    }

    const onSpecificPage = (n) => {

        setCurrentPage(n);
    }


    return (

        <div className='p-5'>
            <nav aria-label="Page navigation example">

                <ul className="flex items-center -space-x-px h-8 text-sm">

                    <li>
                        <button
                            onClick={currentPage === 1 ? null : onPreviusPage}
                            className={`flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                            disabled={currentPage === 1}
                        >
                            <span className="sr-only">Previous</span>
                            <svg className="w-2.5 h-2.5 text-amber-600 dark:text-yellow-400" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                        </button>
                    </li>

                    {pageNumbers.map(noPage => (
                        <li key={noPage}>
                            <a
                                onClick={() => onSpecificPage(noPage)}
                                className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300
                                    ${currentPage === noPage
                                        ? 'bg-amber-600 text-white dark:bg-yellow-400 dark:text-pearl-950' // Estilos para la página actual
                                        : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-pearl-950 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                                    }`}
                            >
                                {noPage}
                            </a>
                        </li>
                    ))}

                    <li>
                        <button
                            onClick={currentPage >= pageNumbers.length ? null : onNextPage}
                            className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark-text-gray-400 dark:hover:bg-gray-700 dark:hover-text-white`}
                            disabled={currentPage >= pageNumbers.length}
                        >
                            <span className="sr-only">Next</span>
                            <svg className="w-2.5 h-2.5 text-amber-600 dark:text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </button>

                    </li>

                </ul>
            </nav>
        </div>
    )
}
