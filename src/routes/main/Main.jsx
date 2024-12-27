import { ProgressBlock } from '../../components/progressBlock/ProgressBlock';
import { blocksData } from './blockData';
import styles from './Main.module.css';

export const Main = () => {

  const topBlocks = blocksData.filter((e, i) => i < 2)
  const bottomBlocks = blocksData.filter((e, i) => i > 1)

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        {
          topBlocks.map(e => <ProgressBlock title={e.title} count={e.count} img={e.img}/>)
        }
      </div>
      <div className={styles.bottom}>
        {
          bottomBlocks.map(e => <ProgressBlock title={e.title} count={e.count} img={e.img}/>)
        }
      </div>
    </div>
  )
}