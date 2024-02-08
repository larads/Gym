import { useState } from 'react'
import { VStack } from 'native-base'

import { HistoryCard } from '@components/HistoryCard'
import { ScreenHeader } from '@components/ScreenHeader'

export function History() {
    const [exercises, setExercises] = useState();
    
      return (
        <VStack flex={1}>
          <ScreenHeader title='Histórico' />

          <HistoryCard/>
        </VStack>
    )
}