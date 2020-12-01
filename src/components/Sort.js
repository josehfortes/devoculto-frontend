import { useRouter } from 'next/router'
import styled from 'styled-components'

import Button from './Button'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Sort ({hasDrew}) {
  const router = useRouter()
  const { id, adminKey } = router.query

  const handleSort = async () => {
    const { NEXT_PUBLIC_API_URL } = process.env
    
    return await fetch(`${NEXT_PUBLIC_API_URL}/secrets/${id}/draw`, {
      method: 'PUT',
      headers: new Headers({
        AdminKey: adminKey
      })
    })
  }

  return (
    <Container>
      {
        !hasDrew && <Button onClick={handleSort}>Sortear</Button>
      }
      {
        hasDrew && <p>O sorteio já foi realizado.</p>
      }
    </Container>
  )
}