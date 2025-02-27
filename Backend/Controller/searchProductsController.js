import { products } from "../data.js";
export const searchProducts = (req, res) => {
    const { query } = req.query; // Get search query from request

    if (!query) {
        return res.status(400).json({ message: 'Search query is required' });
    }

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.sub_category.toLowerCase().includes(query.toLowerCase())
    );

    res.json(filteredProducts);
};
