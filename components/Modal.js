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
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-50"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="w-1/3 bg-white h-auto my-0 mx-auto py-10 px-5 rounded-md text-center"
            variants={modal}
          >
            <form>
              <div className="flex justify-end -mt-4 text-xl cursor-pointer">
                <HiX onClick={() => setShowModal(false)} />
              </div>
              <div>
                <h1 className="text-2xl font-bold poppins">
                  Login to your account
                </h1>
              </div>
              <div className="my-3">
                <input
                  className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none poppins"
                  type="email"
                  name="email"
                  placeholder="email"
                />
              </div>
              <div className="mt-2 mb-4">
                <input
                  className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none poppins"
                  type="password"
                  name="password"
                  placeholder="password"
                />
              </div>
              <div className="flex justify-between">
                <div></div>
                <span className="text-sm text-blue-700 hover:underline cursor-pointer poppins">
                  Forgot password?
                </span>
              </div>
              <div className="">
                <button className="mt-4 mb-3 w-full bg-[#eac802] hover:bg-[#ffe54f] text-black py-2 rounded-md transition duration-100 poppins">
                  Login now
                </button>
                <div className="">
                  <button className="flex justify-center items-center mb-3 w-full bg-gray-900 hover:bg-gray-700 text-white py-2 rounded-md transition duration-100 poppins">
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
