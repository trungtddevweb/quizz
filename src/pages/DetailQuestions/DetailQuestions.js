import { useEffect, useState } from "react"
import Header from '../../components/Header'
import { data } from "../../data/allData"
import "./DetailQuestions.scss"
import { useParams } from "react-router-dom"


const DetailQuestions = () => {
    const [listQuestions, setListQuestions] = useState([])
    const [answers, setAnswers] = useState([])
    const [value, setValue] = useState()
    const { questionId, index } = useParams()

    // console.log("Checked", checked)

    // const handleOptionChange = (event) => {
    //     setSelectedOptions([...selectedOptions, event.target.value]);
    // }

    // const [answers, setAnswers] = useState({});

    const handleSubmit = () => {
        console.log("answers", answers)
    }

    useEffect(() => {
        setListQuestions(data[questionId][index])
    }, [questionId, index])

    return (
        <div className="detail-questions ">
            <div className="top-detail-question d-flex align-items-center flex-column">
                <Header />
                <h3 className="my-4">Câu hỏi mảnh số <span className="fw-semibold p-2 bg-info text-white rounded-4">{questionId}</span ></h3>
                <p className="totalQuestion mt-2 text-gray">Số câu hỏi {listQuestions.listGraft?.length}</p>
                <p className="totalQuestion">Điểm số đỗ 80%</p>
            </div>
            <div className="bottom-detail-question mt-5">
                {listQuestions.listGraft?.map((question) => (
                    <div key={question.id} className="question-item mb-3">
                        <h5 className="question-title">{question.questionText}</h5>
                        <div className="question-options d-flex flex-column gap-2">
                            {question.answers?.map((answer, i) => (
                                <label className="d-flex align-items-baseline" key={i}>
                                    <input
                                        name={question.id}
                                        className="choose-input"
                                        type="radio"
                                        onChange={(e) => { setValue(e.target.value) }}
                                    />
                                    <span className="label-questions w-75 ">{answer.answerText}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div >
            <button type="submit" onClick={handleSubmit} className="submit-questions border-0 bg-info text-white fw-semibold px-5 py-3 rounded-3 my-5">Gửi đáp án</button>
        </div>
    )
}

export default DetailQuestions