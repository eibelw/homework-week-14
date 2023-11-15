// pages/index.js
import Wrapper from '../components/Wrapper';
import Books from '../components/Books';
import { Book } from '../database/models/books';

export default function Homepage(props) {
  return (
    <Wrapper>
      {props?.books?.map((book) => (
        <Books key={`${book.id} ${book.title}`} {...book} />
      ))}
    </Wrapper>
  );
}

export async function getServerSideProps() {
  try {
    const books = await Book.findAll({
      order: [['title', 'ASC']],
    });

    return {
      props: {
        books: books.map((book) => book.toJSON()),
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        books: [],
      },
    };
  }
}
