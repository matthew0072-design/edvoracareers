import Image from "next/image"
import styles from '../styles/header.module.css'
import Head from "next/head"

export default function Header({userName}){


    const myLoader = ({ src, width, quality }) => {
        return `https://picsum.photos/${src}?w=${width}&q=${quality || 75}`
      }

    
    return (
        <div>
            <Head>
          <link
            rel="preload"
            href="/fonts/FontsFree-Net-SFProDisplay-Regular.ttf"
            as="font"
            crossOrigin=""
          />
         
        </Head>
<header className={styles.header}>

<h1 className={styles.edvora}>   Edvora </h1>
<div className={styles.user}> 
<p>kierran Patterson</p>
                <figure className={styles.figure}>
                <Image src="/200" loader={myLoader} width={20} height={20} objectFit="cover" />
                </figure>
</div>
</header>
        </div>
        
    )
}

export async function getServerSideProps() {

    const res = await fetch(`https://assessment.api.vweb.app/user`)
    const users = await res.json()
    
    const userName = users.map(user => user.name)
    console.log(userName)

    return {
      props: {
        userName
      },
    }
  }