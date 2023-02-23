import { useEffect, useState } from "react"
import Header from '../../components/Header'
import { data } from "../../data/allData"
import "./DetailQuestions.scss"
import { useParams } from "react-router-dom"


const DetailQuestions = () => {
    const [listQuestions, setListQuestions] = useState([])
    const { questionId, index } = useParams()

    useEffect(() => {
        setListQuestions(data[questionId][index])
    }, [questionId, index])

    console.log("ListQuestions", listQuestions)
    return (
        <div className="detail-questions">
            <div className="top-detail-question d-flex align-items-center flex-column">
                <Header />
                <h3>Câu hỏi mảnh số <span className="fw-semibold p-2 bg-info text-white rounded-4">{questionId}</span ></h3>
                <p className="totalQuestion mt-2 text-gray">Số câu hỏi {listQuestions.listGraft?.length}</p>
                <p className="totalQuestion">Điểm số đỗ 80%</p>
            </div >
            <div className="bottom-detail-question mt-5">
                {listQuestions.listGraft?.map((question) => (
                    <div key={question.id} className="question-item mb-3">
                        <h5 className="question-title">{question.questionText}</h5>
                        <div className="question-options d-flex flex-column gap-2">
                            {question.answers?.map((answer, i) => (
                                <div className="d-flex align-items-baseline" key={i}>
                                    <input id="" className="choose-input" type="radio" />
                                    <label className="label-questions w-75 ">{answer.answerText}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div >
        </div>
    )
}

export default DetailQuestions