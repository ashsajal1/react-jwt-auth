import { Button, Container, Flex, TextFieldInput } from "@radix-ui/themes"
import { useState } from "react"

export default function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignup = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        console.log(email, password)
    }
    return (
        <Container size={'1'}>
            <form onSubmit={() => handleSignup}>
                <Flex direction={'column'} gap={'2'}>
                    <TextFieldInput type="text" onChange={(e) => setEmail(e.target.value)} />
                    <TextFieldInput type="password" onChange={(e) => setPassword(e.target.value)} />
                    <Button type="submit">Sing up</Button>
                </Flex>
            </form>
        </Container>
    )
}
