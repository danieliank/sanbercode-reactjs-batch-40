/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable eqeqeq */
import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [dataJob, setDataJob] = useState(null);

  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setDataJob(res.data.data);
      });
  }, []);
  console.log(dataJob);

  function formatRupiah(angka, prefix){
    var number_string = angka.replace(/[^,\d]/g, '').toString(),
    split   		= number_string.split(','),
    sisa     		= split[0].length % 3,
    rupiah     		= split[0].substr(0, sisa),
    ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if(ribuan){
      let separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
  }

  const handleText = (param) => {
    if (param === null) {
      return "";
    } else {
      return param.slice(0,100) + "...";
    }
  };

  return (
    <>
      <h1 className="m-7 mb-10 text-2xl font-bold">Lowongan yang tersedia</h1>
      <div className="m-7 flex flex-wrap gap-6 justify-start items-center">
      {dataJob !== null &&
        dataJob.map((res) => {
          return (
            <div key={res.id} className="w-full lg:max-w-xs p-6 overflow-hidden bg-white shadow-lg rounded-xl">
              <div className="flex flex-col items-center justify-between md:flex-row">
                <div className="flex items-center justify-start flex-grow w-full">
                  <a href="#" className="relative block">
                    <img
                      alt="profile"
                      src={res.company_image_url}
                      className="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </a>
                  <div className="flex flex-col items-start ml-4">
                    <span className="text-gray-700">{res.company_name}</span>
                    <span className="text-sm font-light text-gray-400">
                      {res.company_city}
                    </span>
                  </div>
                </div>
                <div className="flex-none hidden md:block ">
                </div>
              </div>
              <p className="mt-4 mb-2 text-lg text-gray-800">
                {res.title}
              </p>
              <p className="text-sm font-normal text-gray-400">
                {handleText(res?.job_description)}
              </p>
              <div className="flex items-center justify-between p-2 my-6 bg-blue-100 rounded">
                <div className="flex items-start justify-between w-full">
                  <p className="flex-grow w-full text-xl text-gray-700">
                    <span className="font-light text-gray-400 text-md">IDR</span>
                    {formatRupiah(res.salary_min + "")}
                    <span className="text-sm font-light text-gray-400">
                      /Month
                    </span>
                  </p>
                  <span className="flex-none px-3 py-1 text-sm text-indigo-500 border border-indigo-500 rounded-full">
                    {res.job_tenure}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
    </>
  );
};

export default Dashboard;
