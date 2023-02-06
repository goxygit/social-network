import { useState } from 'react';
import styles from './Pagination.module.css'

type PropsType ={
 totalUsersCount: number,
 usersPage?: number,
 pageCurrent: number,
 onPageChanged: (p: number)=> void,
}

const Pagination: React.FC<PropsType> =({totalUsersCount, usersPage = 8, pageCurrent, onPageChanged})=>{
  let portionSize = 10
    let pageCount = Math.ceil(totalUsersCount / usersPage);
  let pages = [];
  for (let i = 1; i < pageCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pageCount/ portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber =portionNumber * portionSize
    return (
        <div>
          {portionNumber>1 && 
          <button onClick={()=>{ setPortionNumber(portionNumber -1)}}>prev</button> }
        {pages
        .filter(p => p>=leftPortionPageNumber && p <=rightPortionPageNumber)
        .map((p) => (
          <span
            className={pageCurrent === p ?  styles.current : null}
            onClick={() => {
              onPageChanged(p);
            }}
          >
            {p}
          </span>
        ))}
        {portionNumber < portionCount && 
          <button onClick={()=>{ setPortionNumber(portionNumber +1)}}>next</button> }
      </div>
    )
}
export default Pagination