import React, { useEffect, useState } from 'react'
import bannerOne from '../../assets/1.jpg'
import bannerTwo from '../../assets/2.jpg'
import { Button } from '@/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon, Headset, LandPlot, Puzzle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'


const categoriesWithIcon = [
  { id: "outdoor", label: "Outdoor", icon: LandPlot },
  { id: "indoor", label: "Indoor", icon: Puzzle },
  { id: "esports", label: "E-sports", icon: Headset },
]


const RentHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [bannerOne , bannerTwo];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[600px] overflow-hidden">
      {
          slides.map((slide ,index) => <img
          src={slide}
          key={index}
          className={`${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
          />)
      }

      <Button variant="outline" size="icon"
      onClick={() =>
        setCurrentSlide(
          (prevSlide) =>
            (prevSlide - 1 + slides.length) %
            slides.length
        )}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80">
          <ChevronLeftIcon className="w-4 h-4" />
      </Button>

      <Button variant="outline" size="icon"
      onClick={() =>
        setCurrentSlide(
          (prevSlide) => (prevSlide + 1) % slides.length
        )}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80">
          <ChevronRightIcon className="w-4 h-4" />
      </Button>
      </div>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Rent by Category
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {categoriesWithIcon.map((categoryItem)=> (
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <categoryItem.icon className="w-12 h-12 mb-4 text-primary"/>
              <span className="font-bold">{categoryItem.label}</span>
            </CardContent>
          </Card>
        ))}
        </div>
      </section>

    </div>
  )
}

export default RentHome