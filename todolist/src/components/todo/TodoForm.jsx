const TodoForm = () => {
  const onSunmit = (e) => {
    e.preventDeafault();

    const formData = new FormData(e.target);
    const title = new formData.get("title");
    const content = new formData.get("content");

    if (!title.trim() || !content.trim())
      return alert("제목과 내용을 입력해주세요.")

    const nextTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      idDone: false,
    };

    setTodos(( prev ) => [nextTodo, ...prev]);

    e.target.reset();
  };

  return(
    <div>
      <form onSubmit={onsubmit}>
        <input type="text" placeholder="제목" name="tilte" />
        <input type="text" placeholder="내용" name="content" />

        <button type="submit">추가</button>
        </form>
    </div>
  )
};

export default TodoForm;
