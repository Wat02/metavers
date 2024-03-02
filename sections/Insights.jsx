'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div className={`${styles.innerWidth} mx-auto flex flex-col`} variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once:false, amount: 0.25}}>
      <TypingText textStyles="text-center" title="Insight"/>
      <TitleText textStyles="text-center" title={<>Insight about metaverse</>} />
      <div className='mt-[50px] flex flex-col gap-[30px]'>
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
