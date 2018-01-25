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

export default class NavHelper {
  componentDidMount() {
    this.handleClick = handleClick = (e) => {
      const aTag = findA(e.target)
      if (aTag && aTag.target !== '_blank') {
        const url = getLocalPathname(aTag)
        const meta = e.ctrlKey || e.shiftKey || e.altKey || e.metaKey || e.button !== 0
        if (url && !meta) {
          e.preventDefault()
          this.props.onInternalNav(url)
        }
      }
    };
    this.base.addEventListener('click', this.handleClick)
  }
  componentWillUnmount() {
    this.base.removeEventListener('click', this.handleClick)
  }
  render(props) {
    return props.children[0]
  }
}
