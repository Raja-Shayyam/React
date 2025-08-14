

export const Images = ({value}) => {
  const {img}=value

  return (
    <div style={{ marginBottom: "15px" , background:"pink"}}>
      <strong>Images</strong><br />
      {
        img.map((e) => (
          <img className="bd-placeholder-img card-img-top center" style={{ width: "150px", height: "200px", margin: "auto" }} src={e.images[0]} />
        ))
      }

    </div>
  )
}
