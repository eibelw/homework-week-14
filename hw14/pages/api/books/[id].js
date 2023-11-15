import { Book } from '../../../database/models/books';

export default async function handler(req, res) {
  const { id } = req.query;
  try {
    switch (req.method) {
      case 'GET':
        const book = await Book.findByPk(id);
        res.json({ book });
        break;
      case 'PUT':
        const { title, author, publisher, year, pages } = req.body;
        const [updatedRows, [updatedBook]] = await Book.update(
          {
            title,
            author,
            publisher,
            year,
            pages,
          },
          {
            where: { id },
            returning: true,
          }
        );
        res.json({ book: updatedBook });
        break;
      case 'DELETE':
        const deletedBook = await Book.destroy({
          where: { id },
        });
        res.json({ book: deletedBook });
        break;
      default:
        res.status(400).json({ message: 'Invalid request method' });
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Something went wrong' });
  }
}
