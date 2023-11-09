
const insert = document.querySelector('#insert');
window.addEventListener('keydown', (e)=>{
    insert.innerHTML = `<table>
    <tr>
      <th>Key</th>
      <th>Code</th>     
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.code}</td>     
    </tr>   
  </table>`
})