import React from 'react'
import FormErrors from './FormErrors'

const NewQuestionForm = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const params = {
            title: formData.get('title'),
            body: formData.get('body')
        }
        props.createQuestion(params)
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input name="title" id="title"/>
                <FormErrors forField="title" errors={props.errors}/>
                <br/>
            </div>
            <div>
                <label htmlFor="body">Body</label>
                <textarea name="body" id="body"/>
                <FormErrors forField="body" errors={props.errors}/>
                <br/>
            </div>
            <div>
                <input type="submit" value="Submit"/>
            </div>
        </form>
    )
}

export default NewQuestionForm;

