import { Button, Container, Flex, TextFieldInput, Text} from "@radix-ui/themes"
import { useState } from "react"

export default function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(email, password)
    }
    return (
        <Container size={'1'}>
            <Text align={'center'} size={'6'} as="p" weight={'bold'} color="gray">Sign up</Text>
            <form onSubmit={handleSignup}>
                <Flex direction={'column'} gap={'2'}>
                    <TextFieldInput type="text" onChange={(e) => setEmail(e.target.value)} />
                    <TextFieldInput type="password" onChange={(e) => setPassword(e.target.value)} />
                    <Button type="submit">Sing up</Button>
                </Flex>
            </form>
        </Container>
    )
}
