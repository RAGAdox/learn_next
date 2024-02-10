const Docs = ({ params }: { params: { slug?: string[] } }) => {
  if (params.slug?.length === 2)
    return (
      <h1>
        Viewing Docs for feature {params.slug[0]} concept {params.slug[1]}
      </h1>
    );
  if (params.slug?.length === 1)
    return <h1>Viewing Docs for feature {params.slug[0]}</h1>;
  return <h1>Viewing Docs homepage</h1>;
};

export default Docs;
