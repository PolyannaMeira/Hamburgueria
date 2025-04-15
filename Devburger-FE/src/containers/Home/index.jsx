import { Banner, Container, Content } from "./styles";
import { CategoriesCarousel } from "../../components/CategoriesCarousel";


export function Home(){
    return(
        <main>
            <Banner>
                <h1>Bem Vindo(a)</h1>
             </Banner>
             <Container>
                <Content>
                <CategoriesCarousel>
                
                    <div>Carrossel Categorias</div>
                    <div>Carrossel Produtos</div>
                </CategoriesCarousel>
                </Content>
             </Container>
        </main>)
}