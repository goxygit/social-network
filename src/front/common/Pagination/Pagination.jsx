import { useState } from 'react';
import styles from './Pagination.module.css'
const Pagination =(props)=>{
  let portionSize = 10
    let pageCount = Math.ceil(props.totalUsersCount / props.usersPage);
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
            className={props.pageCurrent === p ?  styles.current : null}
            onClick={() => {
              props.onPageChanged(p);
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