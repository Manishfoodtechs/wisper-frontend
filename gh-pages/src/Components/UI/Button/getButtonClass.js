const getButtonClass = (props) => {
  let buttonClass = ['button']

  if (props.buttonStyle) {
    switch (props.buttonStyle) {
      case 'primary':
        buttonClass.push('is-primary')
        break
      case 'link':
        buttonClass.push('is-link')
        break
      case 'info':
        buttonClass.push('is-info')
        break
      case 'success':
        buttonClass.push('is-success')
        break
      case 'warning':
        buttonClass.push('is-warning')
        break
      case 'danger':
        buttonClass.push('is-danger')
        break
      default:
        break
    }
  }

  if (props.className) {
    buttonClass.push(props.className)
  }

  return buttonClass.join(' ')
}

export default getButtonClass