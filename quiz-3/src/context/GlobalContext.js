import axios from 'axios';
import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [data, setData] = useState(null);

  const [input, setInput] = useState({
    name: '',
    description: '',
    category: '',
    release_year: 2007,
    size: '',
    rating: '',
    image_url: '',
    is_android_app: '',
    is_ios_app: '',
    price: '',
  });

  const [fetchStatus, setFetchStatus] = useState(true);

  const [currentId, setCurrentId] = useState(-1);

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let {
      name,
      description,
      category,
      release_year,
      size,
      rating,
      image_url,
      is_android_app,
      is_ios_app,
      price,
    } = input;

    if (currentId === -1) {
      axios
        .post(`https://backendexample.sanbercloud.com/api/mobile-apps`, {
          name,
          description,
          category,
          release_year,
          size,
          rating,
          image_url,
          is_android_app,
          is_ios_app,
          price,
        })
        .then((res) => {
          console.log(res);
          setFetchStatus(true);
        });
    } else {
      axios
        .put(
          `https://backendexample.sanbercloud.com/api/mobile-apps/${currentId}`,
          {
            name,
            description,
            category,
            release_year,
            size,
            rating,
            image_url,
            is_android_app,
            is_ios_app,
            price,
          }
        )
        .then((res) => {
          console.log(res);
          setFetchStatus(true);
        });
    }
    setInput({
      name: '',
      description: '',
      category: '',
      release_year: 2007,
      size: '',
      rating: '',
      image_url: '',
      is_android_app: '',
      is_ios_app: '',
      price: '',
    });
  };

  const handleDelete = (event) => {
    let idData = event.target.value;
    axios
      .delete(
        `https://backendexample.sanbercloud.com/api/mobile-apps/${idData}`
      )
      .then((res) => {
        setFetchStatus(true);
        console.log(res);
      });
  };

  const handleEdit = (event) => {
    let idData = event.target.value;
    setCurrentId(data);
    axios
      .get(`https://backendexample.sanbercloud.com/api/mobile-apps/${idData}`)
      .then((res) => {
        console.log(res.data);
        let data = res.data;
        setInput({
          name: data.name,
          description: data.description,
          category: data.category,
          release_year: data.release_year,
          size: data.size,
          rating: data.rating,
          image_url: data.image_url,
          is_android_app: data.is_android_app,
          is_ios_app: data.is_ios_app,
          price: data.price,
        });
      });
  };

  // Validation and Several Needed Function
  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  const priceToRupiah = (num, prefix) => {
    if (num === 0) {
      return 'FREE';
    } else {
      var number_string = num.replace(/[^,\d]/g, '').toString(),
        split = number_string.split(','),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);
      if (ribuan) {
        var separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
      }
      rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
      return prefix === undefined ? rupiah : rupiah ? 'Rp. ' + rupiah : '';
    }
  };

  const mbToGb = (num) => {
    if (num < 1000) {
      return num + 'MB';
    } else {
      return num / 1000 + 'GB';
    }
  };

  const gamePlatform = (android, ios) => {
    if (android === 1 && ios === 1) {
      return 'Android & IOS';
    } else if (android === 1 && ios === 0) {
      return 'Android';
    } else if (android === 0 && ios === 1) {
      return 'IOS';
    } else {
      return '???';
    }
  };

  let state = {
    data,
    setData,
    input,
    handleInput,
    fetchStatus,
    setFetchStatus,
    currentId,
    setCurrentId,
  };

  let handleFunction = {
    handleInput,
    handleSubmit,
    handleDelete,
    handleEdit,
    truncateString,
    priceToRupiah,
    mbToGb,
    gamePlatform,
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        handleFunction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
