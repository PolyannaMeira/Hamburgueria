import { api } from "../../services/api";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import { Container, Title, ContainerItems } from "../CategoriesCarousel/styles";


export function CategoriesCarousel(){
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadCategories(){
            const {data} = await api.get('/categories');
            setCategories(data);
            console.log(data);
        }
        loadCategories();
    },[]);
    
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1280 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1280, min: 690 },
          items: 2
        },
        mobile: {
          breakpoint: { max:690, min: 0 },
          items: 1
        }
      };
    
    return (
        <Container>
            <Title>Categorias</Title>
            <Carousel responsive={responsive} infinite={true} partialVisible={false} itemClass="carousel-item">
                {categories.map((category) => (
                  console.log("Imagem da categoria:", category.url),
                <ContainerItems key={category.id} $imageUrl={category.url}>
                    <p>{category.name}</p>
                </ContainerItems>
                ))}
            </Carousel>
        </Container>
    );
}