import { useState } from 'react';
import { Card, CardHeader, Box, Avatar, Flex, Heading, Text, IconButton, Image, Button, CardFooter } from '@chakra-ui/react';
import FavoriteIcon from '@mui/icons-material/Favorite';  

function Post({foto}){
  const [like, setLike] = useState()
  const Like = () => {
    setLike(!like)
  }
    return (<div><Card align={'center'}>
    <CardHeader>
      <Flex spacing='4'>
        <Flex flex='1' gap='4' alignItems='start' flexWrap='wrap'>
          <Avatar name='Segun Adebayo' src='' />
          <Box>
            <Heading size='sm'>diorcheek1</Heading>
            <Text>Uzbekistan Tashkent</Text>
          </Box>
        
        </Flex>
        <IconButton
          variant='ghost'
          colorScheme='gray'
          aria-label='See menu'
        />
      </Flex>
    </CardHeader>
    <Image
      objectFit='cover'
      src={foto}
      alt='Chakra UI'
    />
  
    <CardFooter
      justify='space-between'
      flexWrap='wrap'
      sx={{
        '& > button': {
          minW: '136px',
        },
      }}
    >
      <Button flex='1' variant='ghost'><FavoriteIcon fontSize="large" style={{ color: like ? 'red' : ''}} onClick={Like} />Like</Button>
      <Button flex='1' variant='ghost' ><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/speech-bubble-with-dots.png" alt="speech-bubble-with-dots"/>
        Comment
      </Button>
      <Button flex='1' variant='ghost'><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/share--v1.png" alt="share--v1"/>
        Share
      </Button>
    </CardFooter>
  </Card></div>)
} 

export default Post;