import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: { delay: 0.3 },
  },
};

export default function Modal({ showModal, setShowModal }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="bg-black/50 fixed top-0 left-0 z-50 w-full h-full"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="w-1/3 h-auto px-5 py-10 mx-auto my-0 text-center bg-white rounded-md"
            variants={modal}
          >
            <form>
              <div className="flex justify-end -mt-4 text-xl cursor-pointer">
                <HiX onClick={() => setShowModal(false)} />
              </div>
              <div>
                <h1 className="poppins text-2xl font-bold">
                  Login to your account
                </h1>
              </div>
              <div className="my-3">
                <input
                  className="poppins w-full px-4 py-2 text-sm border-2 rounded-md outline-none"
                  type="email"
                  name="email"
                  placeholder="email"
                />
              </div>
              <div className="mt-2 mb-4">
                <input
                  className="poppins w-full px-4 py-2 text-sm border-2 rounded-md outline-none"
                  type="password"
                  name="password"
                  placeholder="password"
                />
              </div>
              <div className="flex justify-between">
                <div></div>
                <span className="hover:underline poppins text-sm text-blue-700 cursor-pointer">
                  Forgot password?
                </span>
              </div>
              <div className="">
                <button className="mt-4 mb-3 w-full bg-[#eac802] hover:bg-[#ffe54f] text-black py-2 rounded-md transition duration-100 poppins">
                  Login now
                </button>
                <div className="">
                  <button className="hover:bg-gray-700 poppins flex items-center justify-center w-full py-2 mb-3 text-white transition duration-100 bg-gray-900 rounded-md">
                    <div className="flex mr-3">
                      <Image
                        className="object-contain"
                        src="/images/google.png"
                        width={20}
                        height={20}
                      />
                    </div>
                    Or sign-in with google
                  </button>
                </div>
              </div>
            </form>
            <p class="mt-8 poppins">
              Dont have an account yet?
              <span class="text-sm text-blue-700 hover:underline cursor-pointer poppins ml-2 uppercase">
                Sign up
              </span>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
