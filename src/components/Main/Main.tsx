import React from 'react'
import './Main.scss'
import CardList from './CardList/CardList'
import { BeerType } from '../../types/types'

type MainTypes = {
    beers: BeerType[] | undefined;
    searchTerm: string;
    isHighABV: boolean;
    isClassic:boolean
    isAcidic:boolean

    setHasBeerBeenSelected: React.Dispatch<React.SetStateAction<boolean>>
}

const Main = ({setHasBeerBeenSelected, beers} : MainTypes) => {
  return (
    <div>
      {<CardList setHasBeerBeenSelected = {setHasBeerBeenSelected} beers={beers}/>}
    </div>
  )
}

export default Main
// !isAcidic && !isClassic && !searchTerm && !isHighABV && 
/*Create a function called groupObjectsByProperty that takes in an array of objects and a property name as input.
Each object in the array has the specified property. 
The function should return an object where the keys are unique values of the specified property,
  and the values are arrays containing objects with that property value.
*/
type DataProps = {
  category: string;
  name: string;
}

const  groupObjectsByProperty = (data: DataProps[], property: keyof DataProps)  => {
  const groupedData:  { [key: string]: DataProps[] } = {};

  data.forEach((obj: DataProps) => {
    const propValue = obj[property]
    if(!groupedData[propValue]){
      groupedData[propValue] = []
    }
    groupedData[propValue].push(obj)

  })
  const result: { [key: string]: DataProps[] } = {};  
  const sortedKeys = Object.keys(groupedData)
  sortedKeys.forEach(key => {
    result[key] = groupedData[key]
  })
}
// Example usage
const data = [
  { category: "grain", name: "rice" },
  { category: "fruit", name: "banana" },
  { category: "vegetable", name: "carrot" },
  { category: "fruit", name: "kiwi" },
  { category: "vegetable", name: "spinach" },
  { category: "fruit", name: "orange" }
];

console.log(groupObjectsByProperty(data, "category"));