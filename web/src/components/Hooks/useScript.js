import { useEffect } from 'react'

function useScript(script) {
  useEffect(() => {
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.innerHTML = script
    document.head.appendChild(s)
    console.log('script added')
    return () => {
      document.head.removeChild(s)
    }
  }, [script])
}

export default useScript
