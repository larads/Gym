import { Group } from '@components/Group'
import { FlatList, HStack, Heading, VStack, Text} from 'native-base'
import { useState } from 'react'

import { HomeHeader } from '@components/HomeHeader'
import { ExerciseCard } from '@components/ExerciseCard'

export function Home() {
    const [groupSelected, setGroupSelected] = useState('costas')
    const [groups, setGroups] = useState(['costas', 'Bíceps', 'Tríceps', 'ombro'])
    const [exercises, setExercises] = useState(['Puxada frontal','Remada curvada', 'Remada unilateral', 'Levantamento terras'])
    
    return(
        <VStack flex={1}>
            <HomeHeader />

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Group
                        name={item}
                        isActive={groupSelected === item}
                        onPress={() => setGroupSelected(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{
                    px: 8,
                }}
                my={10}
                maxH={10}
            />
        </VStack>
    )
}