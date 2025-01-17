import React, { useEffect, useState } from 'react'
import CardList from '../components/CardList'
import { useLocation } from 'react-router-dom'

const List = () => {

  const location = useLocation()
  const [cards, setCards] = useState([])

  const cardType = location.state

  function selectCardType(type) {
    const cards = {
      'Plumber': [
        {
          name: 'Potter',
          phone: '12345',
          address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          name: 'Plumber',
          phone: '23456',
          address: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          name: 'Jack',
          phone: '34567',
          address: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'
        }
      ],
      'Welder': [
        {
          name: 'Smith',
          phone: '45678',
          address: 'Address: Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          name: 'John',
          phone: '56789',
          address: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          name: 'Alice',
          phone: '67890',
          address: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'
        },
      ],
      'Electrician': [
        {
          name: 'Mike',
          phone: '78901',
          address: 'Address: Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          name: 'Rachel',
          phone: '89012',
          address: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          name: 'Tom',
          phone: '90123',
          address: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'
        },
      ]
    }

    // console.log(cards[type])
    return cards[type]
  }

  useEffect(() => {

    const selectedCards = selectCardType(cardType)
    setCards(selectedCards)
    // console.log(cards)

  }, [cardType])

  if (!cards.length) {
    return <p>Loading...</p>
  }

  return (
    <div className='p-3'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {cards.map((card, key) => (
          <CardList key={key} card={card} />
        ))}
      </div>
    </div>
  )
}

export default List
