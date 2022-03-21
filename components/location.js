
import Image from 'next/image'
import styles from '../styles/location.module.css'

const Location = ({dataFilter}) => {

   

    const myLoader = ({ src, width, quality }) => {
        return `https://picsum.photos/${src}?w=${width}&q=${quality || 75}`
      }


    const listItems = dataFilter.map((datas, index)=> 
        <div key={index} className={styles.location}>
                <section className={styles.img}>
        <Image src="/200" loader={myLoader} width={400} height={240} />
                </section>

                <section>
                    <p> Ride Id: {datas.id}</p>
                    <p>Origin Station: {datas.origin_station_code}</p>
                    <p>Station Path: [{datas.station_path.join(',')}]</p>
                    <p>Date: {datas.date}</p>
                    <p>Distance: {datas.city}</p>
                </section>
                <section>
                    <p>City Name: {datas.city}</p>
                </section>
                <section>
                    <p>State Name: {datas.state}</p>
                </section>
        </div>
        )

    return (
        <div>
            
            {listItems}


        </div>

        
    )
}







export default Location 