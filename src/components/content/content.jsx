import styles from './content.module.css';

        const Content = ({content: {snippet }} ) => (
            <li className={styles.content_container}>
                <div className={styles.video}>
                <img src={snippet.thumbnails.medium.url} alt="thumb" className={styles.content__thumb}/>
                <div className={styles.metadata}>
                <p className={styles.title}>{snippet.title}</p>
                    <p>{snippet.channelTitle}</p>
                    </div>
                    </div>
            </li>
        );

export default Content;