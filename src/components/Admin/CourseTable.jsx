import React, {useState} from 'react';
import Pagination from "../Common/Pagination";
import {paginate} from "../../utils/paginate";

function CourseTable({courses}) {
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage, setPerPage] = useState(5)

    const handlePageChange = page => {
        setCurrentPage(page)
    }

    const courseData = paginate(courses, currentPage, perPage)
    return (
        <section style={{marginTop: "5em", marginRight: "2em"}}>
            <div>
                <div>
                    <h3 className="alert alert-info text-center">
                        لیست دوره ها
                    </h3>
                    <div className="row">
                        <button className="btn btn-primary">
                            <span className="fa fa-plus" style={{verticalAlign: "middle", marginLeft: "1rem"}}/>
                            اضافه کردن دوره جدید
                        </button>
                        <input type="text"
                               className="form-control"
                               placeholder="جستجوی دوره"
                               style={{width: "50%", float: "left", marginLeft: "2em"}}/>
                    </div>

                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">
                                عنوان دوره
                            </th>

                            <th scope="col">
                                تصویر دوره
                            </th>

                            <th scope="col">
                                قیمت دوره (تومان)
                            </th>

                            <th scope="col">
                                ویرایش
                            </th>

                            <th scope="col">
                                حذف
                            </th>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            courseData.map(item =>
                                <tr key={item._id}>
                                    <td>{item.title}</td>
                                    <td>
                                        <a
                                            href={`https://toplearnapi.ghorbany.dev/${item.imageUrl}`}
                                            target="_blank"
                                            className="btn btn-info btn-sm"> نمایش تصویر </a>
                                    </td>

                                    <td>
                                        {item.price === 0 ? "رایگان" : `${item.price}`}
                                    </td>

                                    <td>
                                        <button className="btn btn-warning">
                                            ویرایش
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-warning">
                                            حذف
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
                <div className="text-center footer">
                    <Pagination onPageChange={handlePageChange}
                                totalCourses={courses.length}
                                currentPage={currentPage}
                                perPage={perPage}/>
                </div>
            </div>
        </section>
    );
}

export default CourseTable;