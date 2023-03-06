import { useState, useEffect, useRef } from "react";
import axios from "axios";

import Feed from "./Feed";

export default function InstagramFeed({ token }) {
  const [feeds, setFeedsData] = useState([]);
  const [nubOfPosts, setNubOfPosts] = useState(16);

  const showMorePosts = () => {
    setNubOfPosts(nubOfPosts + 4);
  };

  const accessToken = token;

  //use useRef to store the latest value of the prop without firing the effect
  const tokenProp = useRef(token);
  tokenProp.current = token;

  useEffect(() => {
    // this is to avoid memory leaks
    const abortController = new AbortController();

    async function fetchInstagramPost() {
      try {
        axios
          .get(
            `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${nubOfPosts}&access_token=${accessToken}`
          )
          .then((resp) => {
            setFeedsData(resp.data.data);
          });
      } catch (err) {
        console.log("error", err);
      }
    }

    // manually call the fecth function
    fetchInstagramPost();

    return () => {
      // cancel pending fetch request on component unmount
      abortController.abort();
    };
  }, [nubOfPosts]);

  return (
    <div className="">
      <div className="mb-20 mt-10">
        <div className="flex flex-col">
          <h1 className="font-poppins mb-10 flex justify-center text-xl md:text-2xl lg:mb-14">
            <a
              href="https://www.instagram.com/atelier_beaute_oslo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center justify-center text-gray-700">
                <h1 className="font-lustria relative z-10 flex text-2xl md:text-4xl">
                  <p className="font-poppins font-light">#</p>
                  <p className="font-poppins font-normal italic">
                    atelier_beaute_oslo
                  </p>
                </h1>
              </div>
            </a>
          </h1>
          <div className="grid grid-cols-2 justify-center gap-1 md:grid-cols-3 lg:grid-cols-4">
            {feeds.map((feed) => (
              <Feed key={feed.id} feed={feed} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="font-poppins mb-20 rounded border border-gray-900 bg-gray-900 px-10 py-2 text-xs uppercase
          text-white shadow transition duration-300 ease-in-out hover:bg-white hover:text-gray-900 lg:text-sm"
          onClick={showMorePosts}
        >
          Se Mer
        </button>
      </div>
    </div>
  );
}
