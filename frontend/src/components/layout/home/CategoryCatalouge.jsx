
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../ui/carousel';
import { Button } from '../../ui/button';
import { useNavigate } from "react-router-dom";


const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
]

const CategoryCarousel = () => {

    const Navigate = useNavigate()
    const searchJobHandler = (cat) => {
        console.log(cat)
       Navigate("/browse")

    }

    return (
        <div>
            <Carousel className="w-full max-w-xl mx-auto my-10">
                <CarouselContent>
                    {
                    
                        category.map((cat, index) => (
                            <CarouselItem key={index} className="md:basis-1/3 lg-basis-1/3">
                                <Button onClick={()=>searchJobHandler(cat)} variant="outline" className="rounded-full border-zinc-800  hover:bg-zinc-400">{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default CategoryCarousel