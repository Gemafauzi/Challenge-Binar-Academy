import React, { useState } from 'react'
import Burger from '../Components/Burger/Burger'
import Controller from '../Components/Burger/Controller'

import style from './burgerMaker.module.css'

const BurgerMaker = () => {

  // Inisiasi state 'ingredients' dan setter 'setIngredients'
  const [ingredients, setIngredients] = useState([])

  // Handler untuk menambahkan ingredient
  const addIngredientsHandler = (ingredient) => {
    console.log('ini ingredient:', ingredient)
      setIngredients( prevState => {
          const newState = [ingredient, ...prevState]
          // console.log('ini prevsate bro:', prevState)
          // console.log('nanti ngereturn newState: ', newState)
          return newState
      })
      // console.log('ini ingredients:', ingredients)
  }

  // Handler untuk mengurangi ingredient
  const removeIngredientsHandler = (index) => {
    // Menjalankan setter 'setIngredients' dengan callback function
    setIngredients( prevState => {
      // Menduplikasi state 'ingredients' lama
      const newState = [...prevState]
      // Menghapus ingredient pada state 'ingredients' berdasarkan indexnya
      newState.splice( index, 1 )
      // Mereturn data baru untuk state 'ingredients'
      return newState
    })
  }

  // Handler untuk menggeser ingredient ke atas 1 tingkat
  const moveUpIngredientsHandler = (index) => {
    // Menjalankan setter 'setIngredients' dengan callback function
    setIngredients ( prevState => {
      // Menduplikasi state 'ingredients' lama
      const newState = [...prevState]
      // Menduplikasi item pada index sebelum index ingredient yang akan digeser keatas dan disimpan di variabel 'temp'
      const temp = newState[index-1]
      // Mengassign ingredient yang akan digeser ke index sebelum index saat ini
      newState[index-1] = newState[index]
      // Mengassign variabel 'temp' ke index saat ini
      newState[index] = temp
      // newState[index] = tempMereturn state baru
      return newState
    })
  }

  // Handler untuk menggeser ingredient ke bawah 1 tingkat
  const moveDownIngredientsHandler = (index) => {
    // Menjalankan setter 'setIngredients' dengan callback function
    setIngredients ( prevState => {
      // Menduplikasi state 'ingredients' lama
      const newState = [...prevState]
      // Menduplikasi item pada index sebelum index ingredient yang akan digeser kebawah dan disimpan di variabel 'temp'
      const temp = newState[index+1]
      // Mengassign ingredient yang akan digeser ke index sebelum index saat ini
      newState[index+1] = newState[index]
      // Mengassign variabel 'temp' ke index saat ini
      newState[index] = temp
      // newState[index] = tempMereturn state baru
      return newState
    })
  }
  
  return (
    // Route cara 1:
    // <Layout>
    //   <Burger/>
    // </Layout>

    // Route cara 2: Layout diletakan pada App.js
      // <Burger/>
      
    <div className={style.burgermaker_container}>
      <div className={style.controller}>
          <Controller ingredients={ingredients} 
            addIngredientsHandler={addIngredientsHandler} 
            removeIngredientsHandler={removeIngredientsHandler} 
            moveDownIngredientsHandler={moveDownIngredientsHandler} 
            moveUpIngredientsHandler={moveUpIngredientsHandler}
          />
      </div>
      <div className={style.burger_display}>
          <Burger ingredients={ingredients}/>
      </div>
    </div>
  )
}

export default BurgerMaker