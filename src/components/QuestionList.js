import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({setQuestions, questions, handleDeleteItem, handleUpdateQuestion}) {

  
  useEffect(()=>{
    fetch("http://localhost:4000/questions").
    then((r) => r.json())
    .then((questions) => setQuestions(questions))}
    ,[])

  const questionLineItem = questions.map((question) => 
        <QuestionItem key={question.id} question={question} handleDeleteItem={handleDeleteItem} handleUpdateQuestion={handleUpdateQuestion}/>)
            
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionLineItem}</ul>
    </section>
  );
}

export default QuestionList;
