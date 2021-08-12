import  ApiData from './ApiData';




const FilterData =(search,region)=>{


    const searchWiseData =(s,r)=>{
       const finalData = r.filter(e=> {
            if(!s){
                return e
            }
            return e.name.toLowerCase().includes(s.toLowerCase())
        });
        return finalData
    }

    const regionWiseData=    ApiData().filter((e)=>{
        if(region==="all"){
            return e
        }else{
            return e.region.toLowerCase() === region
        }
})

const finalData = searchWiseData(search,regionWiseData)
return finalData
}

export default FilterData;
