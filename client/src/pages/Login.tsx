import { Button, Container, Flex, TextFieldInput, Text, Callout } from "@radix-ui/themes"
import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        login(email, password)
    }
    return (
        <Container size={'1'}>
            <Text align={'center'} size={'6'} as="p" weight={'bold'} color="gray">Login</Text>
            <form onSubmit={handleLogin}>
                <Flex direction={'column'} gap={'2'}>
                    <TextFieldInput type="text" onChange={(e) => setEmail(e.target.value)} />
                    <TextFieldInput type="password" onChange={(e) => setPassword(e.target.value)} />
                    <Button disabled={isLoading} type="submit">Login</Button>
                </Flex>

                {error && (
                    <Callout.Root>
                        <Callout.Text>{error}</Callout.Text>
                    </Callout.Root>
                )}
            </form>
        </Container>
    )
}
