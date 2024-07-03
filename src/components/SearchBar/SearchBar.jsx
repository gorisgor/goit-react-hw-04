import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({ onSearch }) {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const { query } = form.elements;
    if (!query.value) {
      toast.error('Please, fulfill query');
      return;
    }
    onSearch(query.value);
    form.reset();
  }

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
      <Toaster />
    </header>
  );
}
