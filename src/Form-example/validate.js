export const validate = (name, value) => {
  if (typeof value === 'string') value = value.trim()

  switch (name) {
    case 'name':
      if (value.length === 0) {
        return 'Must enter name'
      } else if (value.split(' ').length < 2) {
        return 'Must enter First and las name'
      } else {
        return null
      }
      break
    case 'email':
      if (value.length === 0) {
        return 'Must enter email'
      } else if (
        !value.includes('@') ||
        !value.includes('.') ||
        value.split('.')[1].length < 2
      ) {
        return 'Must enter valid email'
      } else {
        return null
      }
      break

  }
}