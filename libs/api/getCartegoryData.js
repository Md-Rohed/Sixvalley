'use server';

export const getCategories = async () => {
  try {
    const response = await fetch('https://6valley.6amtech.com/api/v1/categories?guest_id=1', {next: { revalidate: 30000} });
    
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