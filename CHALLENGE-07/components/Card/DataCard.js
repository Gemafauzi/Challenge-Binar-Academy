import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import styles from '../../styles/card.module.css'
import axios from "axios";
import Zoom from "react-medium-image-zoom";
import { useRouter } from "next/dist/client/router";
import "react-medium-image-zoom/dist/styles.css";

export default function dataCard() {

  const router = useRouter();

  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("https://fejs-c7-api.herokuapp.com/api/students/?populate=*")
      .then((res) => {
        setStudents([...res.data.data]);
        console.log(res);
      });
  }, []);

  return (
    <div>
      {students.map((student) => {
        <div
          key={student.id}
          onClick={() => router.push(`/student/${student.id}`)}
        >
          <Zoom>
            {student.attributes.photo.data === null && (
              <img src="/image/duck.jpg" alt="student" width="100" />
            )}
            {student.attributes.photo.data !== null && (
              <img
                src={student.attributes.photo.data.attributes.url}
                alt="student"
                width="100"
              />
            )}
          </Zoom>
          <div className={styles.dataCard}>
            <div className='row'>
              <div className='col'>
                <Card style={{ width: '20rem' }}>
                  <Card.Img src={student.attributes.photo.data.attributes.url} />
                  <Card.Body>
                    <Card.Title>{student.attributes.firstname}</Card.Title>
                    <Card.Text>{student.attributes.lastname}</Card.Text>
                    <Card.Text>{student.attributes.location}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      })}

    </div>
  )
}
