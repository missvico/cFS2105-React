function Pagination ({pagesCount,handleChangePage, currPage}){

    function createPages (pages){
        const newArray = []
        for(let i = 1; i<=pages; i++){
            const className = currPage == i? "currPage" : ""
            newArray.push(
                <li><button className={className} onClick={()=>handleChangePage(i)}>{(i)}</button></li>
            )
        }
        return newArray
    }

    return(
        <ul style={{display: "flex"}}>
            <li><button onClick={()=>handleChangePage(currPage-1)}>{"<<"}</button></li>
            {createPages(pagesCount)}
            <li><button onClick={()=>handleChangePage(currPage+1)}>{">>"}</button></li>
        </ul>
    )
}

export default Pagination;