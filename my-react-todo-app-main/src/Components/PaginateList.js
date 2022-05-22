import React, {useState, useEffect} from 'react'
import TodoItem from './TodoItem'

const PaginateList = (props) => {
    // state displayedItems dengan initial value sebuah array kosong
    const [displayedItems, setDisplayedItems] = useState([])
    // state currentPage dengan initial value props.initialPage
    const [currentPage, setCurrentPage] = useState(props.initialPage)

    useEffect(() => {
        const startingIndex = ( currentPage - 1 ) * props.itemPerPage
        const endIndex = startingIndex + props.itemPerPage
        const newDisplayedItems = 
        /* filter props.items untuk mendapatkan item dari index 'startingIndex' sampai dengan 1 index sebelum 'endIndex' */
        props.items.filter((item, index) =>
            index >= startingIndex && index < endIndex
        ) 
        setDisplayedItems(newDisplayedItems)
    }, [currentPage, props.itemPerPage, props.items])

    const totalPage = Math.ceil(props.items.length / props.itemPerPage)
    const goToPrev = () => {
    // If currentPage > 1 maka state currentPage ditambah 1
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const goToNext = () => {
    // If currentPage < totalPage maka state currentPage dikurangi 1
       if (currentPage < totalPage) {
           setCurrentPage(currentPage + 1)
       }
    }

    return (
    <>
        <ul className="list-group list-group-flush">
            {/* loop displayedItems untuk menampilkan komponen TodoItem dengan prop item adalah masing-masing item dari displayedItems (serupa dengan loop yang ada pada file TodoList.js) */}
            {displayedItems.map((item) => (
              <TodoItem item={item} key={item.id} />
            ))}
        </ul>
        {totalPage > 0 && (
            <div className="page-controller">
                <button className="page-btn" onClick={goToPrev}>Prev</button>
                page {currentPage} of {totalPage}
                <button className="page-btn" onClick={goToNext}>Next</button>
            </div>)
        }
    </>
    )
}

export default PaginateList