import { useEffect, useState } from 'react'
import { data } from '../../data/allData'
import { Link, useParams } from 'react-router-dom'
import './ListQuestions.scss'

const ListQuestions = ({ dataQuestion }) => {
    const [listQuestions, setListQuestions] = useState([])
    const { questionId } = useParams()
    useEffect(() => {
        setListQuestions(data[dataQuestion])
    }, [dataQuestion])

    // Handler


    return (
        <div className="mt-5 d-flex flex-column gap-1">
            {listQuestions.map((q, i) => (
                <Link to={`/detail-questions/${questionId}/${i}`} key={i}>
                    <button className="item-list-questions bg-success border-0 text-white fw-semibold py-2 rounded" >
                        {q?.title}
                    </button>
                </Link>
            ))}
        </div>
    )
}

export default ListQuestions