import { IconButton } from '@chakra-ui/button'
import { SearchIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/input'
import { HStack} from '@chakra-ui/layout'
import React, { useState } from 'react'


function SearchForm() {

    const [search,setSearch]=useState('');
    const [inputValue,setInputValue]=useState('')

    const handleChange=e=>{
        setInputValue(e.target.value)
    }
    const handleSubmit=e=>{
        e.preventDefault()
        setSearch(inputValue)
        alert(search)
    }
    return (
        <>
        <HStack>
                <Input type="text" placeholder='enter search' onChange={handleChange}/>
                <IconButton
                onClick={handleSubmit}
                colorScheme="blue"
                aria-label="Search database"
                icon={<SearchIcon />}
            />
            </HStack>
    </>
    )
}

export default SearchForm
