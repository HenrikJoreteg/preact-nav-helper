import { h } from 'preact'

const findA = (el) => {
  if (el.tagName === 'A') {
    return el
  }
  if (el.parentElement) {
    return findA(el.parentElement)
  }
  return null
}

const getLocalPathname = (a) => {
  if (a && a.origin === window.location.origin) {
    return a.href.replace(window.location.origin, '')
  }
  return null
}

export default ({onInternalNav, children, className}) => (
  h('div', {
    className,
    onClick: (e) => {
      const aTag = findA(e.target)
      if (aTag && aTag.target !== '_blank') {
        const url = getLocalPathname(aTag)
        const meta = e.ctrlKey || e.shiftKey || e.altKey || e.metaKey || e.button !== 0
        if (url && !meta) {
          e.preventDefault()
          onInternalNav(url)
        }
      }
    }
  }, children)
)
