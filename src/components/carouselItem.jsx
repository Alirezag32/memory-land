const CarouselItem = ({image}) => {
          return (
            <div style={{ width: "10%",cursor : "pointer" }}>
              <img src={image} alt="" />
            </div>
          );
}
 
export default CarouselItem;