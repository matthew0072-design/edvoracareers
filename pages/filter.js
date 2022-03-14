    


const FilterState = ({statesFilter, citiesFilter}) => {

    const stateList = statesFilter.map((datas, index )=> {
         return   <li key={index}> {datas} </li>
        })

        const cityList = citiesFilter.map((datas, index) => {
            return <li key={index}>{datas}</li> 
        })

    return (
        <div>
                <h2>Filter</h2>
                <ul>{stateList}</ul>
                <h3>City</h3>
                <ul>{cityList}</ul>
        </div>
    )


}


export async function getServerSideProps () {
    const res = await fetch(`https://assessment.api.vweb.app/rides`)
    const rides = await res.json()
    const  statesFilter = rides.map(ride => ride.state);
    const citiesFilter = rides.map(ride => ride.city)

    
    return {props : {
        statesFilter,
        citiesFilter
    }
}
}


export default FilterState