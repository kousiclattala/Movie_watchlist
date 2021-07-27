import React from "react";
import noposter from "../assests/no-poster.png";
import isoConv from "iso-language-converter";

const MovieCard = ({ data }) => {
  const image_url = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      {data ? (
        <div className="container mb-3">
          <div className="row">
            <div className="col col-4">
              <div className="card">
                {data?.poster_path ? (
                  <img
                    className="card-img-top w-auto h-50"
                    src={`${image_url}/${data?.poster_path}`}
                    alt="Movie Poster"
                  />
                ) : (
                  <img
                    className="card-img-top w-auto h-50"
                    src={noposter}
                    alt="No Poster"
                  />
                )}
              </div>
            </div>
            <div className="col col-8">
              <table className="table table-bordered">
                <tbody>
                  <tr className="text-white">
                    <th scope="row">Title</th>
                    <td>{data?.title ?? "N/A"}</td>
                  </tr>
                  <tr className="text-white">
                    <th scope="row">Language</th>
                    <td>
                      {data?.original_language
                        ? isoConv(data?.original_language)
                        : "N/A"}
                    </td>
                  </tr>
                  <tr className="text-white">
                    <th scope="row">Overview</th>
                    <td>{data?.overview ?? "N/A"}</td>
                  </tr>
                  <tr className="text-white">
                    <th scope="row">Release</th>
                    <td>{data?.release_date ?? "N/A"}</td>
                  </tr>
                  <tr className="text-white">
                    <th scope="row">Vote Average</th>
                    <td>{data?.vote_average ?? "N/A"}</td>
                  </tr>
                  <tr className="text-white">
                    <th scope="row">Vote Count</th>
                    <td>{data?.vote_count ?? "N/A"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <h1>No movies to show</h1>
      )}
    </>
  );
};

export default MovieCard;
