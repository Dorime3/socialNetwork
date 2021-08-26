import { React, useState } from 'react';
import s from './Pagginator.module.css'

const Pagginator = (props) => {
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
                        <span onClick={() => props.onPageChanged(p)} className={s.page + ' ' + (p === props.currentPage ? s.selectedPage : '')}>
                            {p + ' '}
                        </span>
                    )
                })}
            <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>
            {!(Math.ceil(portionNumber) == Math.ceil((pagesCount / props.portionUsers))) && <button onClick={() => setPortionNumber(portionNumber = pagesCount / props.portionUsers)}>Lastpage</button>}
        </div>
    )
}

export default Pagginator;