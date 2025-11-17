import { useEffect } from 'react'

export const useScrollReveal = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    
    const revealOnScroll = () => {
      reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll', revealOnScroll)
    revealOnScroll() // Initial check
    
    return () => window.removeEventListener('scroll', revealOnScroll)
  }, [])
}
