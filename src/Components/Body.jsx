import { Text } from '@chakra-ui/react'
import {LoremIpsum} from 'react-lorem-ipsum'
import React from 'react'

const Body = () => {
  return (
    <div className='body'>
        <Text fontSize={"large"}><LoremIpsum p={5}/></Text>

    
    </div>
  )
}

export default Body