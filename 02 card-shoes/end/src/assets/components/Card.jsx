import './Card.css';
/*
If stock is less than 45 units, soldout image must be shown
If the product is new, a star must be shown
if price product is less than 200€,  30% discount is shown next to price
*/

// WORKS stock<45?"assets/images/"+imgs.imgSoldOut:"assets/images/"+imgs.imgProduct
// WORKS "assets/images/"+(stock<45?imgs.imgSoldOut:imgs.imgProduct)
// DOESN'T WORK "assets/images/"+(stock<45)?imgs.imgSoldOut:imgs.imgProduct
// DOESN'T WORK "assets/images/"+stock<45?imgs.imgSoldOut:imgs.imgProduct

export default function Card({name, price, description, stock, newCollection, imgs}){
    return(
        <article className="card">
          <section className="card-container-img">
            {newCollection && <span className="new">
              <img className="star" src={"assets/images/"+imgs.imgStar} alt=""/>
              New
            </span>}
            <img className="img-product" src={"assets/images/"+(stock<45?imgs.imgSoldOut:imgs.imgProduct)} alt={name}/>
          </section>
          <section>
            <h2>
              {name}
            </h2>
            <h2>
              {price} €
              {price<200 && <span style={{marginLeft:"10px"}}>
                30% off
              </span>}
            </h2>
            <h2>{description}</h2>
          </section>
        </article>
    )    
}

