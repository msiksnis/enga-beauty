import { useState, useEffect, useRef } from "react";
import axios from "axios";

import Feed from "./Feed";

export default function InstagramFeed({ token, ...props }) {
  const [feeds, setFeedsData] = useState([]);

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
            `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${
              props.limit
            }&access_token=${"IGQVJWcGRDYlZAOOEN5dHdmSU9iVUVrUHBTZAjg1NDVGb01XMDJxNlBUQWtqNDR5T1B5UTdsanZAlbmRFTnJHZAnRObC02bjVrR0p2WWNpeUdNcEtCUWk2UHF6dExycUFmVWpYTEk0di1JdDdnSjZACMjdjcwZDZD"}`
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
  }, [props.limit]);

  return (
    <div className="container">
      {feeds.map((feed) => (
        <Feed key={feed.id} feed={feed} />
      ))}
    </div>
  );
}
