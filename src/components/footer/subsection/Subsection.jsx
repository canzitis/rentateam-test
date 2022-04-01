import React from 'react';
import s from './Subsection.module.scss'

const Subsection = ({item}) => {
    return (
        <>
            {item.subsection && item.subsection.map((subsection, index) => {
                return <div className={s.itemSubsection} key={index}>{subsection.subsectionName}</div>
            })}
        </>
    )
}
export default Subsection;
