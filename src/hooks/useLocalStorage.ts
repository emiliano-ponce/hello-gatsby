import { Dispatch, SetStateAction, useState } from 'react'

function getValue(key: string) {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : undefined
}

export function useLocalStorage<T>(key: string) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
        try {
            return getValue(key)
        } catch (error) {
            console.error(error)
            return undefined
        }
    })

    // Return a wrapped version of useState's setter function that
    // persists the new value to localStorage.
    const setValue = (value: SetStateAction<T>) => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
                value instanceof Function ? value(storedValue) : value
            // Save to local storage
            localStorage.setItem(key, JSON.stringify(value))
            // Save state
            setStoredValue(valueToStore)
        } catch (error) {
            console.error(error)
        }
    }

    const removeValue = () => {
        // Remove from local storage
        localStorage.removeItem(key)
        // Remove from state
        setStoredValue(undefined)
    }

    return [storedValue, setValue, removeValue] as [
        T,
        Dispatch<SetStateAction<T>>,
        () => void
    ]
}
