import styles from './Description.module.sass'
import Image from 'next/image';

export const Description = () => {
    return (
        <section className={styles.Description}>
            <Image
                src="/images/description.jpeg"
                alt="products marketplace"
                width={500}
                height={300}
            />
            <div className={styles.Description__text}>
                <h2>Bring the future today</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error dolore voluptate, animi aperiam dicta pariatur sequi neque vel sit incidunt commodi est molestiae ullam veritatis asperiores consequatur! Autem, pariatur beatae.</p>
            </div>
        </section>
    )
}