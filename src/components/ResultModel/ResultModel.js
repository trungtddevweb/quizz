import './ResultModel.scss'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'

const ResultModel = ({ answers, modalIsOpen, isClose, topic }) => {
    const customStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            overflow: 'auto',
            padding: '20px',
        }

    };

    let count = 0;
    const answersLength = Object.keys(answers).length;

    for (let key in answers) {
        if (answers[key] === 'true') {
            count++
        }
    }
    const countResult = ((count * 100) / answersLength)

    const reFreshPage = () => {
        window.location.reload()
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            closeTimeoutMS={500}
            ariaHideApp={modalIsOpen ? false : true}
            style={customStyles}
            onRequestClose={isClose}
        >
            <p className='result-text text-white px-4 py-1 rounded-5'>
                Kết quả bài thi
            </p>
            <div className="content">
                {
                    countResult < 80 ? (
                        <div className='text-center'>
                            <h4 className='text-secondary'>Rất tiếc!</h4>
                            <h5>
                                Bạn đã không đạt yêu cầu về điểm số để hoàn thành bài thi về chủ đề  <span className='text-primary'>{topic} </span> với tổng số điểm là <span className='text-secondary'>{countResult.toPrecision(2) || 0} điểm</span>.
                            </h5>
                        </div>

                    ) : (
                        <div className='text-center'>
                            <h4 className='text-success'>
                                Xin chúc mừng!
                            </h4>
                            <h5>Bạn đã hoàn thành bài thi về chủ đề <span className='text-primary'>{topic} </span>với tổng số điểm là <span className='text-danger'>{countResult.toPrecision(2) || 0} điểm</span>.</h5>
                        </div>
                    )
                }
            </div>
            <div className="buttons mt-4">
                <Link to="/">
                    <button className='button rounded-3 bg-success'>Trang chủ</button>
                </Link>
                <button onClick={reFreshPage} className='button rounded-3 bg-secondary'>Thi lại</button>
            </div>
        </Modal>
    )
}

export default ResultModel