import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { tilteListQuestions } from '../../data/allData'
import './HomePage.scss'
import classnames from 'classnames'
import { useLayoutEffect } from 'react'

const HomePage = () => {
    // useLayoutEffect(() => {

    // })

    return (
        <div className="homePage">
            <Header />
            <h3 className="heading-topic pt-5 pb-5 fw-bold">Danh sách chủ đề</h3>
            <div className="list d-flex gap-5">
                {tilteListQuestions.map((item, index) => (
                    <Link key={index} to={`/list-questions/m${index + 1}`}>
                        <div className="list-item" >
                            <div className={classnames("wrapper-number mb-2", {
                                lightGreen: index === 0,
                                green: index === 1,
                                lime: index === 2,
                                indigo: index === 3,
                                violet: index === 4,
                                rose: index === 5,
                                steal: index === 6,
                            })} >{index + 1}</div>
                            <div className="fw-semibold">{item}</div>
                        </div>
                    </Link >
                ))}
            </div>
            <Link to="/list-questions/m1">
                <button className="btn-list-question mt-5 px-5 py-3 mb-5">Danh sách câu hỏi</button>
            </Link>
        </div>
    )
}

export default HomePage