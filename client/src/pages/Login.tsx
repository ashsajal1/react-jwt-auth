import { Button, Container, Flex, TextFieldInput, Text } from "@radix-ui/themes"
import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        console.log(email, password)
    }
    return (
        <Container size={'1'}>
            <Text align={'center'} size={'6'} as="p" weight={'bold'} color="gray">Login</Text>
            <form onSubmit={() => handleLogin}>
                <Flex direction={'column'} gap={'2'}>
                    <TextFieldInput type="text" onChange={(e) => setEmail(e.target.value)} />
                    <TextFieldInput type="password" onChange={(e) => setPassword(e.target.value)} />
                    <Button type="submit">Login</Button>
                </Flex>
            </form>
        </Container>
    )
}
