export default function Card({ item }) {
    return (
      <div className="card">
        <h4>{item.title}</h4>
        <small>{item.category}</small>
        <p>{item.description}</p>
        <img src={item.image} alt={item.title} />
      </div>
    );
  }  