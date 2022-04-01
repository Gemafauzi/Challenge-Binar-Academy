import React from 'react'
import style from './burger.module.css'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: white;
  padding-left: 0px;
`

const Bun = (props) => {

  let bunClass;

  switch (props.type) {
    case 'top':
      bunClass = style.bun_top;
      break;
    case 'insert':
      bunClass = style.bun_insert;
      break;
    default:
      bunClass = '';
  }

  return (
    // a. Default styling (melalui CSS)
    // <div className={`${style.bun} ${bunClass}`}></div>

    // b. Inline class styling
    // <div className={`${style.bun} ${bunClass}`} style={{ paddingLeft: '0px' }}></div>

    // c. Styled components
    // (Install dulu dengan npm install styled-components)

    <div className={`${style.bun} ${bunClass}`}>
      {/* <button> */}
      {/* <StyledButton>
        Button
      </StyledButton> */}
      {/* </button> */}
    </div>
  )
}

export default Bun