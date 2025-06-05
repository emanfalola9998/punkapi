import React, { useState } from 'react'

const CustomSearch = () => {
    const [searchTerm, setSearchTerm] = useState<string>("")

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value.trim())
    }

    const handleSubmit = async () => {
        if (!searchTerm) return

        try {
        const response = await fetch('/api/webhook/beer-submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: searchTerm })
        })

        if (!response.ok) {
            throw new Error('Failed to submit')
        }
        

        console.log('✅ Submitted successfully')
        } catch (error) {
        console.error("❌ API call failed:", error)
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label>
            Find a beer and paste URL and allow AI to do the rest!
        </label>

        <input
            value={searchTerm}
            onChange={handleInput}
            placeholder='Type beer product URL here...'
        />

        <button onClick={handleSubmit}>
            Submit
        </button>
        </div>
    )
    }

export default CustomSearch
