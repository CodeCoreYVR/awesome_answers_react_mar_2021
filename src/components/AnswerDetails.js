import React from 'react'

function AnswerDetails({ body, author, created_at, id, deleteAnswer }) {
  return (
    <div>
      <p
        style={{
          fontStyle: 'Roboto',
          fontSize: '12px'
        }}
      >
        {body}
      </p>
      <div>
        <small>By { author? author.full_name : null }</small>
        <small style={{ marginLeft: '20px' }}>
          Answered {created_at} ago
        </small>
      </div>
      <button onClick={ () => deleteAnswer(id) }>Delete</button>
    </div>
  )
}

export default AnswerDetails