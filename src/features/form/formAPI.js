// A mock function to mimic making an async request for data
export function fetchForm(usersData) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(usersData), 500)
  )
}
