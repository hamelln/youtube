import React, { Component } from 'react';
import Content from '../content/content';
import styles from './contents.module.css';

const Contents = (props) => (
            <div className={styles.frame}>
            <div className={styles.contents}>
                <section className={styles.contents_list}>
                    {props.contents.map(content => (
                        <Content key={content.id} content={content}
                        />
                    ))}
                    </section>
            </div>
            </div>
);

export default Contents;