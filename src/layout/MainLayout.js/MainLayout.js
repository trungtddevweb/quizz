import { Outlet } from 'react-router-dom'
import topLeft from '../../assets/images/img-top-left.svg'
import topRight from '../../assets/images/top-right.svg'
import BottomLeft from '../../assets/images/bottom-left.svg'
import BottomRight from '../../assets/images/bottom-right.svg'
import './MainLayout.scss'


const MainLayout = () => {
    return (
        <div className="main">
            <div className="header w-100%">
                <div className='w-100'>
                    <img className='image-layout left' src={topLeft} alt="" />
                    <img className='image-layout right p-4' src={topRight} alt="" />
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-center"><Outlet /></div >
            <div>
                <div className='footer'>
                    <img className='image-layout bottom p-4' src={BottomLeft} alt="" />
                    <img className='image-layout bottom right' src={BottomRight} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MainLayout