import React,{useEffect,useState} from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import axios from 'axios'
import ZoomIn from 'react-medium-image-zoom'
import { useRouter } from "next/router";
import 'react-medium-image-zoom/dist/styles.css'

const Student = () => {

  const router = useRouter()

  // const {studentId} = router.query.id

  console.log(router.query)

  const [students, setStudents] = useState([])

  useEffect( () => {
    axios.get(` https://fejs-c7-api.herokuapp.com/api/students/${router.query.id}?populate=*`)
  .then( res => {
    setStudents([res.data.data])
  })
  })

  return (
          <div className='justify-content-center'>
        {students.map((student) => {
          return(
            <div key={student.id} style={{width:'300px'}} className="m-5">
                  <div className={styles.card}>
                  { student.attributes.photo.data !== null &&
                        <ZoomIn>
                          <img className="card-img-top rounded"src={student.attributes.photo.data.attributes.url} style={{width:"300px", height:"400px", border:"white"}} /> 
                        </ZoomIn>
                      }
                      <div className="card-body">
                        <p className="card-text">First Name: {student.attributes.firstname}</p>
                        <p className="card-text">Last Name: {student.attributes.lastname}</p>
                        <p className="card-text">Location: {student.attributes.location}</p>
                      </div>
                </div>
              </div>
          )
      })}
      </div>
  )
}

export default Student