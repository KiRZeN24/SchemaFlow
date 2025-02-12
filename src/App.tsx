import { useEffect, useState } from 'react'
import './App.css'
import { validateJson } from './validateJson'

function App() {
  const [result, setResult] = useState('')

  useEffect(() => {
    document.title = 'SchemaFlow'
  }, [])

function handleClick() {
  const dataElement = document.getElementById('data') as HTMLInputElement
  const value = dataElement ? dataElement.value : ''

  setResult(JSON.parse(validateJson(value)).message)
}

  return (
    <>
      <h1>SchemaFlow</h1>
      <p>{result}</p>
      <div className="inputJSON">
        <input id="data"></input>
        <button onClick={handleClick}>Generate</button>
        <table>
          <thead>
            <tr>
              <th>Examples: JSON</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: '#f0f0f0'}}>
              <td>
                {
                  '{"course":"ofimática","units":[{"id":1,"title":"conceptos basicos"},{"id":2,"title":"tablas de unidades"},{"id":3,"title":"correcion ortografica"}],"active":2}'
                }
              </td>
            </tr>
            <tr style={{ backgroundColor: '#ffffff'}}>
              <td>
                {
                  '{"units":[{"id":1,"title":"conceptos basicos"},{"id":2,"title":"tablas de unidades"},{"id":3,"title":"correcion ortografica"}],"active":2}'
                }
              </td>
            </tr>
            <tr style={{ backgroundColor: '#f0f0f0'}}>
              <td>
                {
                  '{"units":[{"id":1,"title":"conceptos basicos"},{"id":2,"title":"tablas de unidades"},{"id":3,"title":"correcion ortografica"}],"active":2,"course":"ofimática"}'
                }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
