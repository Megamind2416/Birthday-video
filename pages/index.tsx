import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
  import { FADE_DOWN_ANIMATION_VARIANTS, FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import { useUploadModal } from "@/components/layout/UploadModal";
import { useDemoModal } from "@/components/home/demo-modal";

export default function Home() {
  const { UploadModal, setShowUploadModal } = useUploadModal();
  const { DemoModal, setShowDemoModal } = useDemoModal();
  return (
    <Layout>
      <motion.div
        className="max-w-xl px-5 xl:px-0"
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.h1
          className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>Birthday Video Shout Out</Balancer>
        </motion.h1>
        <motion.p
          className="mt-6 text-center text-gray-500 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
          Video concatenator allows you to create birthday shout out videos to your loved ones.
          </Balancer>
        </motion.p>
        <motion.div>
         <UploadModal />
         <DemoModal />
        </motion.div>
      <motion.div className="space-x-40 m-10 "> 
          <motion.button
                  className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                  onClick={() => setShowUploadModal(true)}
                  {...FADE_IN_ANIMATION_SETTINGS}
                >
                  Get Started
          </motion.button>
          
          <motion.button
        onClick={() => setShowDemoModal(true)}
        {...FADE_IN_ANIMATION_SETTINGS}
        className="rounded-full border border-black bg-white p-1.5 px-4 text-sm text-black transition-all hover:bg-black hover:text-white "
      >
        <p className="text-gray-600">About</p>
          </motion.button>
      </motion.div>
      </motion.div>
      {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
    
    </Layout>
  );
}

