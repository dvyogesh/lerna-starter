import React from 'react'
import { CarouselItemWrapper } from './styles'

const CarouselItem = ({ item }) => (
    <CarouselItemWrapper>
        <img src={item.imgUrl} />
        <p>{item.itemName}</p>
    </CarouselItemWrapper>
)

export default CarouselItem;