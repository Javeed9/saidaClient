import React from 'react'
import ContactCard from './ContactCard'
import photo1 from "./img/saida.jpg"
import photo2 from "./img/abdullah.jpg"
import photo3 from "./img/irfan.jpg"

const details = [
  {
    id : 1,
    img : photo1,
    name : "Saida",
    number : "9949353283"
  },
  {
    id : 2,
    img : photo2,
    name : "Abdullah",
    number : "9849305002"
  },
  {
    id : 3,
    img : photo3,
    name : "Irfan",
    number : "9052525027"
  }
]

function Contact() {
  return (
    <div className='flex flex-wrap justify-evenly m-10'>
      {details.map( obj => {
        return (
          <ContactCard
          key={obj.id}
          imgSrc={obj.img}
          name={obj.name}
          number={obj.number}
          />
          )
      })}
    </div>
  )
}

export default Contact