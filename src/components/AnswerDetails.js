import React from 'react'

function AnswerDetails({ body, author, created_at }) {
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
        <small>By {author.full_name}</small>
        <small style={{ marginLeft: '20px' }}>
          Answered {created_at} ago
        </small>
      </div>
    </div>
  )
}

export default AnswerDetails