import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  function handleAddQuestion(question) {
    setQuestions([...questions, question])
  }

  function handleDeleteItem(id) {
    const updatedQuestions = questions.filter((question) => question.id !== id)
    setQuestions(updatedQuestions)
  }

  function handleUpdateQuestion(updatedItem) {
    const updatedQuestions = questions.map((question) => {
      if (question.id === updatedItem.id) {
        return updatedItem;
      }
      else {
        return question
      }
    })
    setQuestions(updatedQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handleAddQuestion={handleAddQuestion}/> : 
      <QuestionList setQuestions={setQuestions} questions={questions} handleDeleteItem={handleDeleteItem} handleUpdateQuestion={handleUpdateQuestion}/>}
    </main>
  );
}

export default App;
