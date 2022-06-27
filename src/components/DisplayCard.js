import './DisplayCard.css'
export default function DisplayCard ({data}) {
  return <div className="display-card">
    <img src={data.url} alt="A holding of place"/>
    <p>{data.caption}</p>
  </div>
}