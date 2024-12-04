import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../ui/carousel';
import { Button } from '../../ui/button';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setSearchedCompany } from '@/redux/companySlice';
import { useEffect } from 'react';

const category = [
    "Google",
    "Newly",
    "Amazon",
    "Microsoft",
    "Apple",
];

const CompanyCatalouge = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Reset the search query to null when component is mounted
    useEffect(() => {
        dispatch(setSearchedCompany("")); // Reset search query on mount
    }, [dispatch]);

    const searchJobHandler = (query) => {
        dispatch(setSearchedCompany(query));
        navigate("/recruiter/companies");
    };

    return (
        <div>
            <Carousel className="w-full max-w-xl mx-auto my-10">
                <CarouselContent>
                    {category.map((cat, index) => (
                        <CarouselItem key={index} className="md:basis-1/3 lg-basis-1/3">
                            <Button onClick={() => searchJobHandler(cat)} variant="outline" className="rounded-full border-zinc-800 hover:bg-zinc-400">
                                {cat}
                            </Button>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default CompanyCatalouge;
