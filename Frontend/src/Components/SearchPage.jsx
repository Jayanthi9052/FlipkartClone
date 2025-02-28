import { useLocation } from 'react-router-dom';
import Card from './Card';

const SearchPage = () => {
  const location = useLocation();
  const results = location.state?.results || [];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Search result for {results[0].title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {results.length > 0 ? (
          results.map((item) => <Card key={item.title} items={item} />)
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
