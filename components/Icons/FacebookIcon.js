import { FiFacebook } from "react-icons/fi";

export default function FacebookIcon() {
  return (
    <div className="opacity-70 transition-all duration-300 hover:scale-110 hover:opacity-100">
      <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
        <FiFacebook />
      </a>
    </div>
  );
}
