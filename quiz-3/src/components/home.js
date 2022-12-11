import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Home = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const { data, setData, fetchStatus, setFetchStatus } = state;

  const { priceToRupiah, mbToGb, gamePlatform, truncateString } =
    handleFunction;

  useEffect(() => {
    let fetchData = () => {
      axios
        .get(`https://backendexample.sanbercloud.com/api/mobile-apps`)
        .then((res) => {
          let resultData = res.data;
          console.log(resultData);
          setData(...resultData);
        });
    };

    if (fetchStatus) {
      fetchData();
      setFetchStatus(false);
    }
  }, [fetchStatus, setData, setFetchStatus]);

  return (
    <>
      <section className="bg-gray-200 p-5">
        <div className="container mx-auto mt-10">
          <h1 className="text-xl font-bold">Find your data that you need!</h1>
        </div>
        <div className="container mx-auto flex-wrap flex gap-10 items-center justify-start">
          {data !== null &&
            data.map((res) => {
              // Start Card Section
              return (
                <div className="mt-10 h-72 flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
                  <img
                    src={res.image_url}
                    alt="Data Img"
                    className="w-1/3 bg-cover bg-center bg-landscape"
                  />
                  <div className="w-2/3 p-4">
                    <h1 className="text-gray-900 font-bold text-2xl">
                      {res.name}
                    </h1>
                    <small>{res.release_year}</small>
                    <p className="mt-2 text-gray-600 text-sm">
                      {truncateString(res.description, 250)}
                    </p>
                    <div className="item-center mt-2 text-gray-500">
                      <span>{res.category} </span>
                      <span>{mbToGb(res.size)}, </span>
                      <span>
                        {gamePlatform(res.is_android_app, res.is_ios_app)}
                      </span>
                    </div>
                    <div className="flex item-center justify-between mt-3">
                      <h1 className="text-gray-700 font-bold text-xl">
                        {priceToRupiah(res.price, 'Rp. ')}
                      </h1>
                      <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                        {res.rating} RATINGS
                      </button>
                    </div>
                  </div>
                </div>
              );
              // End Card Section
            })}{' '}
          {data === null && (
            <>{data === null ? 'NULL' : <p>Tidak ada data</p>}</>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
