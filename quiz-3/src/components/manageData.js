import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import axios from 'axios';

const ManageData = () => {
  const { state, handleFunction } = useContext(GlobalContext);

  const { data, setData, input, fetchStatus, setFetchStatus } = state;

  const {
    handleInput,
    handleSubmit,
    handleDelete,
    handleEdit,
    truncateString,
  } = handleFunction;

  useEffect(() => {
    let fetchData = () => {
      axios
        .get(`https://backendexample.sanbercloud.com/api/mobile-apps`)
        .then((res) => {
          let resultData = res.data;
          console.log(resultData);
          setData([...resultData]);
        });
    };

    if (fetchStatus) {
      fetchData();
      setFetchStatus(false);
    }
  }, [fetchStatus, setData, setFetchStatus]);

  return (
    <div className="overflow-x-auto relative sm:rounded-lg mt-20 ml-[10%] mr-[10%]">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-white uppercase bg-purple-600">
          <tr>
            <th scope="col" className="py-3 px-6">
              NO
            </th>
            <th scope="col" className="py-3 px-6">
              NAMA
            </th>
            <th scope="col" className="py-3 px-6">
              KATEGORI
            </th>
            <th scope="col" className="py-3 px-6">
              DESCRIPTION
            </th>
            <th scope="col" className="py-3 px-6">
              PRICE
            </th>
            <th scope="col" className="py-3 px-6">
              RATING
            </th>
            <th scope="col" className="py-3 px-6">
              RELEASE YEAR
            </th>
            <th scope="col" className="py-3 px-6">
              SIZE
            </th>
            <th scope="col" className="py-3 px-6">
              IS_ANDROID_APP
            </th>
            <th scope="col" className="py-3 px-6">
              IS_IOS_APP
            </th>
            <th scope="col" className="py-3 px-6">
              ACTION
            </th>
          </tr>
        </thead>
        {data !== null &&
          data.map((res, index) => {
            return (
              <tbody>
                <tr key={res.id} className="bg-white border-b">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {index + 1}
                  </th>
                  <td className="py-4 px-6">{res.name}</td>
                  <td className="py-4 px-6">{res.category}</td>
                  <td className="py-4 px-6">
                    {truncateString(res.description, 25)}
                  </td>
                  <td className="py-4 px-6">{res.price}</td>
                  <td className="py-4 px-6">{res.rating}</td>
                  <td className="py-4 px-6">{res.release_year}</td>
                  <td className="py-4 px-6">{res.size}</td>
                  <td className="py-4 px-6">{res.is_android_app}</td>
                  <td className="py-4 px-6">{res.is_ios_app}</td>
                  <td className="py-4 px-6">
                    <button
                      onClick={handleEdit}
                      value={res.id}
                      className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={handleDelete}
                      value={res.id}
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        {data === null && <>{data === null ? 'NULL' : <p>Tidak ada data</p>}</>}
      </table>
      <form onSubmit={handleSubmit} className="mt-20">
        <h1 className="text-2xl font-bold">Create Data</h1>
        <div>
          <p className="mt-10">Gambar data Game</p>
          <hr></hr>
          <div className="mt-10">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Image URL
            </label>
            <input
              onChange={handleInput}
              value={input.image_url}
              name="image_url"
              type="text"
              id="image_url"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
        </div>
        <div>
          <p className="mt-10">Data Game</p>
          <hr></hr>
          <div className="mt-10">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Name
            </label>
            <input
              onChange={handleInput}
              value={input.name}
              name="name"
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mt-10">
            <label
              for="category"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Category
            </label>
            <input
              onChange={handleInput}
              value={input.category}
              name="category"
              type="text"
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mt-10">
            <label
              for="description"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Description
            </label>
            <textarea
              onChange={handleInput}
              value={input.description}
              name="description"
              type="text"
              id="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mt-10">
            <label
              for="price"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Price
            </label>
            <input
              onChange={handleInput}
              value={input.price}
              name="price"
              type="number"
              id="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mt-10">
            <label
              for="rating"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Rating
            </label>
            <input
              onChange={handleInput}
              value={input.rating}
              name="rating"
              type="number"
              id="rating"
              min="0"
              max="5"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mt-10">
            <label
              for="release_year"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Release Year
            </label>
            <input
              onChange={handleInput}
              value={input.release_year}
              name="release_year"
              type="number"
              id="release_year"
              min="2007"
              max="2021"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mt-10">
            <label
              for="size"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Size
            </label>
            <input
              onChange={handleInput}
              value={input.size}
              name="size"
              type="number"
              id="size"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
        </div>
        <div>
          <p className="mt-10">Jenis Perangkat</p>
          <hr></hr>
          <div className="mt-10">
            <label
              for="is_android_app"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Android ?
            </label>
            <input
              onChange={handleInput}
              value={input.is_android_app}
              name="is_android_app"
              type="number"
              id="is_android_app"
              min="0"
              max="1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mt-10">
            <label
              for="is_ios_app"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              IOS ?
            </label>
            <input
              onChange={handleInput}
              value={input.is_ios_app}
              name="is_ios_app"
              type="number"
              id="is_ios_app"
              min="0"
              max="1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
        </div>
        <div className="mt-10 mb-20">
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManageData;
