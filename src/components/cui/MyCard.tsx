import React from 'react'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { Terminal } from 'lucide-react'

interface myCardProps {
    email: string;
    password: string
}

function MyCard({email, password}: myCardProps) {
    return (
        <div>
            <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>{email}</AlertTitle>
                <AlertDescription>
                    {
                        password
                    }
                </AlertDescription>
            </Alert>
        </div>
    )
}

export default MyCard