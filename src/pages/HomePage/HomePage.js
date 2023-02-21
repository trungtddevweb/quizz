import { data } from '../../data/allData'
import { useContext } from 'react'
import { UserContext } from '../../context/context'
import './HomePage.scss'
import classnames from 'classnames'

const HomePage = () => {
    const { logout } = useContext(UserContext)

    // Handlers
    const handleLoggout = async (e) => {
        e.preventDefault()
        try {
            await logout()
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = (data) => {
        console.log(data)
    }


    return (
        <div className="homePage">
            <div className="mt-4 d-flex gap-2 mb-5">
                <button className="btn-home bg-success">Trang chủ</button>
                <button className="btn-home bg-warning" onClick={handleLoggout}>Đăng xuất</button>
            </div>
            <h3 className="heading-topic pt-5 pb-5 fw-bold">Danh sách chủ đề</h3>
            <div className="list d-flex gap-5">
                {data.map((item, index) => (
                    <div onClick={() => handleClick(item)} className="list-item" key={index} >
                        <div className={classnames("wrapper-number mb-2", {
                            lightGreen: index === 0,
                            green: index === 1,
                            lime: index === 2,
                            indigo: index === 3,
                            violet: index === 4,
                            rose: index === 5,
                            steal: index === 6,
                        })} >{index + 1}</div>
                        <div className="fw-semibold">Mảnh {index + 1}</div>
                    </div>
                ))}
            </div>
            <button className="btn-list-question mt-5 px-5 py-3 mb-5">Danh sách câu hỏi</button>
        </div>
    )
}

export default HomePage