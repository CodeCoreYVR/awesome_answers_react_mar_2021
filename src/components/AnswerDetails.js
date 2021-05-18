import React from 'react'

function AnswerDetails({ body, author, created_at }) {
  return (
    <div>
      <p>
        {body}
      </p>
      <div>
        <small>By {author.full_name}</small>
        <br />
        <small>Answered {created_at}</small>
      </div>
    </div>
  )
}

export default AnswerDetails