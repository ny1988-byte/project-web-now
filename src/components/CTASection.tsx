import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-glow to-blue-600 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Почему UMG Smart TV?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-left">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                <span className="text-lg">Крупнейший охват Smart TV / CTV аудитории в России</span>
              </div>
              <div className="flex items-center space-x-3 text-left">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                <span className="text-lg">Прямой доступ к премиальному инвентарю</span>
              </div>
              <div className="flex items-center space-x-3 text-left">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                <span className="text-lg">Технологичность и универсальность размещения</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-left">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                <span className="text-lg">Высокая вовлеченность аудитории</span>
              </div>
              <div className="flex items-center space-x-3 text-left">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                <span className="text-lg">Доказанная эффективность моделей показа</span>
              </div>
              <div className="flex items-center space-x-3 text-left">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                <span className="text-lg">Гибкость рекламных форматов и таргетинга</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">
              UMG Smart TV – это ваш самый эффективный канал
            </h3>
            <p className="text-xl text-white/90">
              для достижения платежеспособной домашней аудитории России на большом экране
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Связаться с нами
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              <Mail className="mr-2 h-5 w-5" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;