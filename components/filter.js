import styles from '../styles/filter.module.css'    


const FilterState = ({statesFilter, citiesFilter}) => {

const stateList = <select>{statesFilter.map((datas, index )=> {


  return     <option key={index}> {datas} </option>
 } )} </select>

        const cityList = <select>{citiesFilter.map((datas, index) =>
             <option key={index}>{datas}</option> 
        )} </select>

    return (
        <div clasName={styles.filterWrapper}>
                <h2 className={styles.filter}>Filter</h2>
                <form>{stateList}</form>
                
                <form>{cityList}</form>
        </div>
    )
    }





export default FilterState