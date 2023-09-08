import SearchResult from "@/src/components/SearchResult/SearchResult";
import Head from "next/head";

const SearchResults = ({ queryParam }) => {
  return (
    <>
      <Head>
        <title>Search result</title>
        <meta
          name="description"
          content="Here you will find all results for your search"
        ></meta>
      </Head>
      <SearchResult queryParam={queryParam} />
    </>
  );
};

export async function getServerSideProps(context) {
  const queryParam = context.query.name;
  return { props: { queryParam: queryParam } };
}

export default SearchResults;
