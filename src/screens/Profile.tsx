import { ScreenHeader } from '@components/ScreenHeader'
import { UserPhoto } from '@components/UserPhoto'
import { Center, ScrollView, Skeleton, VStack, Text} from 'native-base'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'

export function Profile() {
    const [loading, setLoading] = useState(false)
    return(
        <VStack flex={1}>
            <ScreenHeader title='Perfil'/>
            <ScrollView>
                <Center mt={6} px={10}>
                    {
                        loading ?
                            <Skeleton 
                                w={33} h={33} 
                                rounded="full" 
                                startColor={'green.200'} 
                                endColor={'green.500'}/>
                        : <UserPhoto
                            source={{ uri: 'http://github.com/larads.png'}} 
                            alt=''
                            size={33}
                        />
                    }
                    <TouchableOpacity>
                        <Text color="green.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>
                            Alterar Foto
                        </Text>
                    </TouchableOpacity>
                </Center>
            </ScrollView>
        </VStack>
    )
}