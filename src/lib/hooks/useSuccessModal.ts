import { useState } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useSuccessModal<T extends (...args: any[]) => Promise<any>>(asyncFunction: T) {
    const [open, setOpen] = useState(false)
    const [isPending, setIsPending] = useState(false)

    const wrappedFunction = async (...args: Parameters<T>) => {
        setIsPending(true)
        try {
            const result = await asyncFunction(...args)
            setOpen(true)
            return result
        } finally {
            setIsPending(false)
        }
    }

    return {
        open,
        setOpen,
        isPending,
        execute: wrappedFunction,
    }
}
