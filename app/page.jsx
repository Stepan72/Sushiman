export default async function Home() {
  const response = await fetch('https://swapi.dev/api/people/1', {
    next: {
      revalidate: 2,
    },
  });
  const data = await response.json();

  return (
    <>
      <p>{data.name}</p>
      Check
    </>
  );
}
