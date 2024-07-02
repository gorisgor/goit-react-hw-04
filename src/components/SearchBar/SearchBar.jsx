export default function SearchBar({ onSearch }) {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.query.value;
    if (query.trim() === "") {
      alert("Please, type your query");
      return;
    }
    onSearch(query);
    form.reset();
  }

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
