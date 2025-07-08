import { Tv, Smartphone, Monitor, Globe } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              UMG SmartTV
            </h2>
            <p className="text-2xl text-primary font-semibold mb-4">
              Ключ к Миллионам Экранов Платежеспособной Аудитории России
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              UMG SmartTV – ведущая в России рекламная сеть, объединяющая крупнейшие приложения 
              для просмотра ТВ и видео на SmartTV и CTV устройствах. Мы предоставляем рекламодателям 
              прямой и технологичный доступ к десяткам миллионов экранов по всей стране.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Где размещаем рекламу</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Tv className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">TV & CTV Приложения</h4>
                    <p className="text-muted-foreground">Лончеры, стриминговые сервисы, утилитарные приложения</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Monitor className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Стриминговые Сервисы</h4>
                    <p className="text-muted-foreground">Эверест, Цифровое ТВ, ShowJet, Tvigle, Lime и многие другие</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Web-TV</h4>
                    <p className="text-muted-foreground">Размещение в браузерном пространстве на ТВ устройствах</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Ключевые показатели</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1.3+ млрд</div>
                  <div className="text-sm text-muted-foreground">потенциальных контактов в месяц</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">87.5+ млн</div>
                  <div className="text-sm text-muted-foreground">уникальных зрителей в месяц</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2 часа</div>
                  <div className="text-sm text-muted-foreground">среднее время просмотра</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">80+ млн</div>
                  <div className="text-sm text-muted-foreground">рекламных запросов ежедневно</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;