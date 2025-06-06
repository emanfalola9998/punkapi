import React, { useState } from 'react'

type CustomSearchProps = {
    shouldRefetch: boolean
    setShouldRefetch: React.Dispatch<React.SetStateAction<boolean>>
}

const CustomSearch: React.FC<CustomSearchProps> = ({ shouldRefetch, setShouldRefetch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");


    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value.trim())
    }

const handleSubmit = async () => {
  if (!searchTerm) return

  const isLocal = import.meta.env.DEV
const endpoint = isLocal
  ? '/api/proxy/beer-submit'
  : 'https://beersbackendnodejs-production.up.railway.app/api/proxy/beer-submit'

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: searchTerm })
    })

    if (!response.ok) {
      throw new Error('Failed to submit')
    }

    console.log('✅ Submitted successfully')
      setShouldRefetch(prev => !prev); // ✅ more idiomatic than setShouldRefetch(!shouldRefetch)
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
