import { lazy, useEffect, useState } from "react"
import Header from '../../components/Header'
import { data } from "../../data/allData"
import "./DetailQuestions.scss"
import { useParams } from "react-router-dom"
import { AiOutlineArrowUp } from 'react-icons/ai'

const ResultModel = lazy(() => import('../../components/ResultModel'))

const DetailQuestions = () => {
    //States
    const [listQuestions, setListQuestions] = useState([])
    const { questionId, index } = useParams()
    const [values, setValues] = useState({})
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [showButton, setShowButton] = useState(false)
    // Effect
    useEffect(() => {
        setListQuestions(data[questionId][index])
    }, [questionId, index])
    const answersLength = Object.keys(values).length;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // Handlers
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (event) => {
        isOpen()
        event.preventDefault()
    };

    const isOpen = () => {
        setModalIsOpen(true)
    }
    const isClose = () => {
        setModalIsOpen(false)
    }

    // Goto Top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }



    return (
        <>
            <ResultModel isClose={isClose} modalIsOpen={modalIsOpen} answers={values} topic={questionId} />
            <div className="detail-questions ">
                <div className="top-detail-question d-flex align-items-center flex-column">
                    <Header />
                    <h3 className="my-4">Câu hỏi mảnh số <span className="fw-semibold p-2 bg-info text-white rounded-4">{questionId}</span ></h3>
                    <p className="totalQuestion mt-2 text-gray">Số câu hỏi {listQuestions.listGraft?.length}</p>
                    <p className="totalQuestion">Điểm số đỗ 8đ</p>
                </div>
                <form className="bottom-detail-question mt-5">
                    {listQuestions.listGraft?.map((question) => (
                        <div key={question.id} className="question-item mb-3">
                            <h5 className="question-title">{question.questionText}</h5>
                            <div className="question-options d-flex flex-column gap-2">
                                {question.answers?.map((answer, i) => (
                                    <label className="item-question d-flex align-items-baseline" key={i}>
                                        <input
                                            name={question.id}
                                            className="choose-input"
                                            type="radio"
                                            value={answer.isCorrect}
                                            onChange={handleInputChange}
                                        />
                                        <span className="label-questions w-75 ">{answer.answerText}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </form >
                <button type="submit" disabled={answersLength < listQuestions.listGraft?.length} onClick={handleSubmit} className="submit-questions border-0 bg-info text-white fw-semibold px-5 py-3 rounded-3 my-5">Gửi đáp án</button>
                <div
                    className="gotoTopButton"
                    style={{ display: showButton ? 'flex' : 'none' }}
                    onClick={scrollToTop}
                >
                    <AiOutlineArrowUp size="25" />
                </div>
            </div >
        </>
    )
}

export default DetailQuestions