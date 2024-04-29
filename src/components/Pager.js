import { parseInt, set } from 'lodash';
import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector } from 'react-redux';
const Pager = (props) => {
    const FilterItem = useSelector((state) => state.filters)
    const { totalItems, itemsPerPage, currentPage, setCurrentPage, dataSource } = props

    let last = Math.ceil(dataSource.length / 12);

    let pageItems = Array.from({ length: last === 0 ? 12 : last }, (_, index) => index + 1);

    const [visible, setVisible] = useState(Array.from({ length: 3 }, (_, index) => index + 1))

  
    const Pager = () => {

        if (last < -1) {
            return (
                <>
                    {pageItems.map((item, index) => {
                        return <button
                            key={index}
                            className={currentPage === item ? "selected-page" : "unselected-page"}
                            onClick={() => setCurrentPage(item)}
                        >
                            {item}
                        </button>
                    })}
                </>)
        }
        else {
            return (
                <>
                    {pageItems.map((item, index) => {
                        if (index + 1 == 1 || index + 1 == last) {
                            return <button
                                key={index}
                                className={currentPage === item ? "selected-page" : "unselected-page"}
                                onClick={() => {
                                    setCurrentPage(item);
                                    if (index + 1 == 1) setVisible([1, 2, 3])
                                    else setVisible([last - 2, last - 1, last])
                                }}
                            >
                                {item}
                            </button>
                        } else if (visible.includes(index + 1)) {

                            return <button
                                key={index}
                                className={currentPage === item ? "selected-page " : "unselected-page "}

                                onClick={() => {
                                    setCurrentPage(item);
                                    setVisible([index, index + 1, index + 2])
                                }}
                            >
                                {item}
                            </button>
                        }
                        else {
                            return " . . "
                        }
                    }
                    )}

                </>
            )

        }

    }

    return (
        <>{dataSource.length > 0 &&
            <div className="pagination" style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                <button
                    onClick={() => {
                        setCurrentPage((currentPage) => currentPage - 1)
                        setVisible([currentPage - 2, currentPage - 1, currentPage])
                    }}
                    disabled={currentPage === 1}
                >
                    <IoIosArrowBack />
                </button>
                <Pager />
                <button
                    onClick={() => {
                        setVisible([currentPage, currentPage + 1, currentPage + 2])
                        setCurrentPage((currentPage) => currentPage + 1)
                    }}
                    disabled={currentPage === last}
                >
                    <IoIosArrowForward />
                </button>
            </div>}
        </>
    )
}

export default Pager