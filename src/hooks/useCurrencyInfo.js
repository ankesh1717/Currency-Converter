import { useState, useEffect } from 'react'

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/e4ee2f311db0738becd36078/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        if (res && res.conversion_rates) {
          setData(res.conversion_rates)
        }
      })
      .catch((error) => {
        console.error("Error fetching currency info:", error)
      })
  }, [currency])

  return data
}

export default useCurrencyInfo
