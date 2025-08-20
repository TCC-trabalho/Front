import { faker } from "@faker-js/faker"
import { useEffect, useState } from "react"

export const useEmpresas = () => {
    const [loading, setLoading] = useState(true)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [mockFeed, setMockFeed] = useState<any[]>([])

    useEffect(() => {
        setTimeout(() => {
            const fakeData = Array.from({ length: 6 }).map(() => ({
                idEmpresa: faker.number.int({ min: 1 }),
                imagemUrl: faker.image.url(),
                titulo: faker.company.catchPhrase(),
                area: faker.commerce.department(),
                avaliacao: faker.number.int({ min: 1, max: 5 }),
                descricao: faker.lorem.paragraph(),
            }))
            setMockFeed(fakeData)
            setLoading(false)
        }, 2000)
    }, [])

    return {
        loading,
        mockFeed,
    }
}
