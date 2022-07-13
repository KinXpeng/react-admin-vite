import styles from './index.module.css';

function Loading() {
  return (
    <div className={styles.loading}>
      {/* <div className="absolute w-full h-full"> */}
      <div className={styles.loading_center}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Loading;
