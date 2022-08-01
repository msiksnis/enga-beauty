import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const variants = {
  show: {
    transform: "translateX(0em)",
    opacity: 1,
  },
  hide: {
    transform: "translateX(5em)",
    opacity: 0,
  },
};

const variantsSecond = {
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
  },
};

export default function NavMenu({ toggle, isOpen }) {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <div className="mx-auto mt-10 -mb-6 w-2/3 items-center border border-gray-800/80" />
      <div className="grid grid-rows-2">
        <div className="flex w-full flex-col items-center space-y-1 pt-20 text-xl text-gray-700">
          <Link href="/behandlinger-priser/handpleie">
            <a
              className={`w-[100%] py-1.5 pl-2 text-center uppercase ${
                router.pathname === "/behandlinger-priser/handpleie"
                  ? "bg-gray-100 pl-2"
                  : ""
              }`}
              onClick={toggle}
            >
              <motion.span
                className="font-medium tracking-[0.175em]"
                initial={false}
                animate={isOpen ? "show" : "hide"}
                variants={{
                  show: {
                    ...variants.show,
                    transition: { delay: 0.25, duration: 0.2 },
                  },
                  hide: {
                    ...variants.hide,
                    transition: { delay: 0.05, duration: 0.05 },
                  },
                }}
                onClick={toggle}
              >
                Håndpleie
              </motion.span>
            </a>
          </Link>
          <Link href="/behandlinger-priser/fotpleie">
            <a
              className={`w-[100%] py-1.5 pl-2 text-center uppercase ${
                router.pathname === "/behandlinger-priser/fotpleie"
                  ? "bg-gray-100 pl-2"
                  : ""
              }`}
              onClick={toggle}
            >
              <motion.span
                className="font-medium tracking-[0.175em]"
                initial={false}
                animate={isOpen ? "show" : "hide"}
                variants={{
                  show: {
                    ...variants.show,
                    transition: { delay: 0.3, duration: 0.2 },
                  },
                  hide: {
                    ...variants.hide,
                    transition: { delay: 0.15, duration: 0.05 },
                  },
                }}
                onClick={toggle}
              >
                Fotpleie
              </motion.span>
            </a>
          </Link>
          <div className="hidden">
            <Link href="/behandlinger-priser/harfjerning">
              <a
                className={`w-[100%] py-1.5 pl-2 text-center uppercase ${
                  router.pathname === "/behandlinger-priser/harfjerning"
                    ? "bg-gray-100 pl-2"
                    : ""
                }`}
                onClick={toggle}
              >
                <motion.span
                  className="font-medium tracking-[0.175em]"
                  initial={false}
                  animate={isOpen ? "show" : "hide"}
                  variants={{
                    show: {
                      ...variants.show,
                      transition: { delay: 0.35, duration: 0.2 },
                    },
                    hide: {
                      ...variants.hide,
                      transition: { delay: 0.2, duration: 0.05 },
                    },
                  }}
                  onClick={toggle}
                >
                  Hårfjerning
                </motion.span>
              </a>
            </Link>
          </div>
          <Link href="/behandlinger-priser/microblading">
            <a
              className={`w-[100%] py-1.5 pl-2 text-center uppercase ${
                router.pathname === "/behandlinger-priser/microblading"
                  ? "bg-gray-100 pl-2"
                  : ""
              }`}
              onClick={toggle}
            >
              <motion.span
                className="font-medium tracking-[0.175em]"
                initial={false}
                animate={isOpen ? "show" : "hide"}
                variants={{
                  show: {
                    ...variants.show,
                    transition: { delay: 0.4, duration: 0.2 },
                  },
                  hide: {
                    ...variants.hide,
                    transition: { delay: 0.25, duration: 0.05 },
                  },
                }}
                onClick={toggle}
              >
                Microblading
              </motion.span>
            </a>
          </Link>
          <Link href="/behandlinger-priser/vipper-bryn">
            <a
              className={`w-[100%] py-1.5 pl-2 text-center uppercase ${
                router.pathname === "/behandlinger-priser/vipper-bryn"
                  ? "bg-gray-100 pl-2"
                  : ""
              }`}
              onClick={toggle}
            >
              <motion.span
                className="font-medium tracking-[0.175em]"
                initial={false}
                animate={isOpen ? "show" : "hide"}
                variants={{
                  show: {
                    ...variants.show,
                    transition: { delay: 0.45, duration: 0.2 },
                  },
                  hide: {
                    ...variants.hide,
                    transition: { delay: 0.3, duration: 0.05 },
                  },
                }}
                onClick={toggle}
              >
                Vipper & Bryn
              </motion.span>
            </a>
          </Link>
          <Link href="/klippekort">
            <a
              className={`w-[100%] py-1.5 pl-2 text-center uppercase ${
                router.pathname === "/klippekort" ? "bg-gray-100 pl-2" : ""
              }`}
              onClick={toggle}
            >
              <motion.span
                className="font-medium tracking-[0.175em]"
                initial={false}
                animate={isOpen ? "show" : "hide"}
                variants={{
                  show: {
                    ...variants.show,
                    transition: { delay: 0.5, duration: 0.2 },
                  },
                  hide: {
                    ...variants.hide,
                    transition: { delay: 0.35, duration: 0.05 },
                  },
                }}
                onClick={toggle}
              >
                Klippekort
              </motion.span>
            </a>
          </Link>
          <Link href="/gavekort">
            <a
              className={`w-[100%] py-1.5 pl-2 text-center uppercase ${
                router.pathname === "/gavekort" ? "bg-gray-100 pl-2" : ""
              }`}
              onClick={toggle}
            >
              <motion.span
                className="font-medium tracking-[0.175em]"
                initial={false}
                animate={isOpen ? "show" : "hide"}
                variants={{
                  show: {
                    ...variants.show,
                    transition: { delay: 0.55, duration: 0.2 },
                  },
                  hide: {
                    ...variants.hide,
                    transition: { delay: 0.4, duration: 0.05 },
                  },
                }}
                onClick={toggle}
              >
                Gavekort
              </motion.span>
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={`w-[100%] py-1.5 pl-2 text-center uppercase ${
                router.pathname === "/contact" ? "bg-gray-100 pl-2" : ""
              }`}
              onClick={toggle}
            >
              <motion.span
                className="font-medium tracking-[0.175em]"
                initial={false}
                animate={isOpen ? "show" : "hide"}
                variants={{
                  show: {
                    ...variants.show,
                    transition: { delay: 0.6, duration: 0.2 },
                  },
                  hide: {
                    ...variants.hide,
                    transition: { delay: 0.45, duration: 0.05 },
                  },
                }}
                onClick={toggle}
              >
                Kontakt Oss
              </motion.span>
            </a>
          </Link>
        </div>

        <div className="mb-40 flex flex-col items-center justify-end">
          <motion.button
            className="w-56 rounded border border-gray-900 bg-gray-900 py-2 text-lg uppercase text-white shadow-lg"
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={{
              show: {
                ...variantsSecond.show,
                transition: { delay: 0.7, duration: 0.7 },
              },
              hide: {
                ...variantsSecond.hide,
                transition: { delay: 0.45, duration: 0.05 },
              },
            }}
            onClick={toggle}
          >
            <a
              href="https://no.fresha.com/providers/enga-beauty-y0pknew1?pId=494654"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bestill Time
            </a>
          </motion.button>
          <div className="mt-14 flex flex-col items-center">
            <motion.p
              className="hidden text-xs opacity-70"
              initial={false}
              animate={isOpen ? "show" : "hide"}
              variants={{
                show: {
                  ...variantsSecond.show,
                  transition: { delay: 1.1, duration: 0.5 },
                },
                hide: {
                  ...variantsSecond.hide,
                  transition: { delay: 0.45, duration: 0.05 },
                },
              }}
            >
              Let's talk
            </motion.p>
            <motion.a
              href="mailto:info@engabeauty.no"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-700"
              initial={false}
              animate={isOpen ? "show" : "hide"}
              variants={{
                show: {
                  ...variantsSecond.show,
                  transition: { delay: 1.3, duration: 0.8 },
                },
                hide: {
                  ...variantsSecond.hide,
                  transition: { delay: 0.45, duration: 0.05 },
                },
              }}
              onClick={toggle}
            >
              info@engabeauty.no
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}
