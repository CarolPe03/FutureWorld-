interface CategoryProps {
  params: {
    categories: string[];
    searchParams: string;  // Corregir "searhParams" a "searchParams"
  };
}

export default function Category(props: CategoryProps) {
  console.log(props);
  const { categories, searchParams } = props.params;  // Corregir aquí
  console.log(categories);

  return (
    <h1>{`Categoría dinámica: ${categories}`}</h1>

  );
}
