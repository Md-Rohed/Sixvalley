

export const getProductsListApi = async () => {
  try {
    const response = await fetch('https://6valley.6amtech.com/api/v1/products/top-rated?guest_id=1&limit=10&offset=1');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return { error: 'Failed to fetch products' };
  }
};