import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../components/movie-info";
import MoiveVideos from "../../../components/movie-videos";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h3>Movie Detail Page</h3>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <h3>Movie Detail Videos</h3>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MoiveVideos id={id} />
      </Suspense>
    </div>
  );
}
