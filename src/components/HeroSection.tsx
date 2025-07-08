import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-blue-600"></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Разместим вашу 
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              видео рекламу
            </span>
            на популярных площадках
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            От <span className="font-bold text-yellow-300">500 рублей</span> за 1000 показов за 14 дней
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold">
              Запустить рекламу
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              <PlayCircle className="mr-2 h-5 w-5" />
              Как это работает
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">30 млн</div>
              <div className="text-sm text-white/80">зрителей SmartTV</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">87.5+ млн</div>
              <div className="text-sm text-white/80">уникальных зрителей</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">30+</div>
              <div className="text-sm text-white/80">ведущих приложений</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">70%</div>
              <div className="text-sm text-white/80">аудитория России</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;