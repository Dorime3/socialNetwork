import React from 'react';
import { useState } from 'react';
import s from './Pagginator.module.css'
import cn from 'classnames'


type PropsType = {
    usersCounts: number,
    pageSize: number,
    portionUsers: number,
    currentPage: number,
    onPageChanged: (pageNum: number) => void
}
const Pagginator: React.FC<PropsType> = (props) => {
    let pagesCount = Math.ceil(props.usersCounts / props.pageSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * props.portionUsers + 1;
    let rightPortionNumber = portionNumber * props.portionUsers;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={s.pagginator}>
            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>}
            {pages
                .filter(el => el >= leftPortionNumber && el <= rightPortionNumber)
                .map(p => {
                    return (
                        <span onClick={() => props.onPageChanged(p)} className={cn(s.page, { [s.selectedPage]: (props.currentPage === p) })
                        }>
                            {p + ' '}
                        </span>
                    )
                })}
            <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>
            {!(Math.ceil(portionNumber) == Math.ceil((pagesCount / props.portionUsers))) && <button onClick={() => setPortionNumber(portionNumber = pagesCount / props.portionUsers)}>Lastpage</button>}
        </div >
    )
}

export default Pagginator;