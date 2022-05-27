import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import axios from "axios";

export default function Student() {

    const [students, setStudents] = useState(null)
    const router = useRouter()
    const {id} = router.query

    useEffect(() => {
        axios
            .get(`https://fejs-c7-api.herokuapp.com/api/students/${id}?populate=*`)
            .then((res) => {
                setStudents([...res.data.data])
            })
    }, [])

  return (
            <div>
                {students.map((student) => {
                    return(
                        <div key={student.id}>
                            <Zoom>
                            <img src={student.attributes.photo.data.attributes.url} width="200"/>
                            </Zoom>
                            <ul>
                            <li>First Name: {student.attributes.firstname}</li>
                            <li>Last Name: {student.attributes.lastname}</li>
                            <li>Location: {student.attributes.location}</li>
                            </ul>
                        </div>
                    )
                })}
            </div>
  )
}
