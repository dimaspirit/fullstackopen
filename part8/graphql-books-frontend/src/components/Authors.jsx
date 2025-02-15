import { useState } from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'

const ALL_AUTHORS = gql`
  query AllAuthors {
    allAuthors {
      bookCount
      born
      id
      name
    }
  }
`

const CHANGE_AUTHOR_YEAR = gql`
  mutation Mutation($name: String!, $born: Int!) {
    editAuthor(name: $name, born: $born) {
      born
    }
  }
`

const Authors = (props) => {
  const result = useQuery(ALL_AUTHORS)
  const [changeAuthorYear] = useMutation(CHANGE_AUTHOR_YEAR)
  const [selectedAuthorName, setSelectedAuthorName] = useState('')
  const [birthyear, setBirthyear] = useState('')

  const handleUpdateYear = () => {
    console.log('update year...')
    console.log(selectedAuthorName)
    console.log(birthyear)

    changeAuthorYear({ variables: { name: selectedAuthorName, born: +birthyear } })
  }

  if (!props.show) {
    return null
  }

  if(result.loading) {
    return <div>loading...</div>
  }


  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {result.data.allAuthors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
      <h2>Set birth year</h2>
      <select
        value={selectedAuthorName}
        onChange={e => setSelectedAuthorName(e.target.value)}>
        {result.data.allAuthors.map((a) => (
          <option key={a.name} value={a.name}>{a.name}</option>
        ))}
      </select>
      <input type="number" name="birthyear" id="birthyear" value={birthyear} onChange={e => setBirthyear(e.target.value)} />
      <button onClick={handleUpdateYear}>Update birth year</button>
      </div>
    </div>
  )
}

export default Authors
