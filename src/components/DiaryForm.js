import React, { useState } from 'react'

export default function DiaryForm({ addItem }) {
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [text, setText] = useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        let itemObject = {
            title: title,
            date: date,
            text: text
        }
        addItem(itemObject)
        setTitle("")
        setText("")
        setDate("")
    }

                    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="diary-form">
                    <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Give an heading" className="diary-input"  required/>
                    <input value={date} onChange={(event) => setDate(event.target.value)} type="date" className="diary-date-input"  required/>
                </div>
                <textarea value={text} onChange={(event) => setText(event.target.value)} rows="2" placeholder='Write here' className="diary-textarea"  required>
                </textarea>
                <button type="submit" className="diary-button">Add Item To Diary</button>
            </form>
        </div>
    )
}