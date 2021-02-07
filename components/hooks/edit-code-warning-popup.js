import { useState } from 'react';
import { API_URL } from '../../src/config';
// import { getToken } from '../../src/lib/token';
import { useRouter } from 'next/router';

const useEditCodeWarningPopup = () => {
  const [code, setCode] = useState();
  const router = useRouter();

  const createGame = ({ name, gameIsPublic }) => {
    // добавить description, players
    fetch(`${API_URL}/games`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        public: gameIsPublic,
      }),
    })
      .then((res) => res.json()) // вернёт Promise
      .then((data) => {
        const { item, hash } = data;
        setCode(item.code);
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log({name, gameIsPublic})
  };

  const enterGame = (hash, nickname) => {
    router.push(`/code?hash=${hash}&nickname=${nickname}`);
  };

  return { code, createGame, enterGame };
};

export default useEditCodeWarningPopup;
