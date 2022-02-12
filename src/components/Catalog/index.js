import React from 'react';
import CatalogItem from '../CatalogItem';
import styles from './styles.module.scss';

const Catalog = ({ data, fetchError, isLoading }) => {
    return (
        <section className={styles.catalog__container}>
            {data &&
                data.map(caseStudy => {
                    return (
                        <CatalogItem key={caseStudy.id} caseStudy={caseStudy} />
                    );
                })}
        </section>
    );
};

export default Catalog;