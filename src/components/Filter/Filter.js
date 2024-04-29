import React, { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { useSelector } from 'react-redux';

const Filter = ({ type, dataSource, hasSearch, setter, objectName }) => {
    const [data, setData] = useState([])
    const FilterItem = useSelector((state) => state.filters)

    useEffect(() => {
        setData(dataSource)
    }, [dataSource])

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginBottom: "10px", minWidth: "150px" }}>
            {hasSearch &&
                <div className='search-bar' style={{ padding: "5px", display: "flex", justifyContent: "start", alignItems: "center", gap: "10px", background: "rgb(238 238 238 / 46%)", }}>
                    <CiSearch />
                    <input placeholder='Search'
                        onChange={(e) => {
                            setData(dataSource.filter((item) => item.toLowerCase().includes(e.target.value.toLowerCase())))
                        }}
                        type='text' style={{ width: "100%", border: "0", outline: "none", padding: "5px", backgroundColor: "transparent" }} />
                </div>}
            <div
            className='over-flow-menu' style={{
                overflowY: "scroll", width: "100%",
                height: type === 'radio' ? "auto" : "100px",
                marginTop: "10px",
            }}>
                {data.map((item, index) => (
                    <div className='.checkbox-wrapper-4' key={index} style={{ margin: '10px', display: "flex", justifyContent: "flex-start", gap: "5px", alignItems: "center", cursor: "pointer" }}>
                        <input className='inp-cbx' type={type} id={item} name={type} value={item}
                            defaultChecked={type === 'radio' ? item === FilterItem[objectName] : FilterItem[objectName]?.includes(item)}
                            onChange={(e) => {
                                setter(e.target)
                                console.log(e.target.ch)
                            }}
                        />
                        <label className='cbx' style={{ fontSize: "14px" }} htmlFor={item} onClick={(e) => e.preventDefault()}>{item}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Filter;
