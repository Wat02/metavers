'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`} variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once: false, amount: 0.25}}>
      <motion.div className='flex-[0.95] flex justify-center flex-col' variants={fadeIn('right', 'tween', 0,2, 1)}>
        <TypingText title="| Whats new?" />
        <TitleText title={<>What's new about Metaversus?</>} />
         <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
         </div>
      </motion.div>
      <motion.div className={`${styles.flexCenter} flex-1`} variants={planetVariants('right')}>
        <img className='w-[90%] h-[90%] object-contain' src='/whats-new.png'/>
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
