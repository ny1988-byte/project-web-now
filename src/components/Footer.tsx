import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary-glow">UMG SmartTV</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Ведущая в России рекламная сеть для программатической рекламы на SmartTV и CTV устройствах.
              Охват более 87.5 миллионов уникальных зрителей в месяц.
            </p>
            <div className="flex space-x-4">
              <div className="text-3xl font-bold text-primary-glow">30+</div>
              <div className="text-sm text-white/60">ведущих<br/>приложений</div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Контакты</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-glow" />
                <span className="text-white/80">+7 (000) 000-00-00</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-glow" />
                <span className="text-white/80">info@umgsmarttv.ru</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-glow" />
                <span className="text-white/80">Москва, Россия</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Услуги</h4>
            <ul className="space-y-3 text-white/80">
              <li>• Размещение видео рекламы</li>
              <li>• Баннерная реклама</li>
              <li>• SmartTV кампании</li>
              <li>• Создание креативов</li>
              <li>• Аналитика и отчетность</li>
              <li>• Персональное сопровождение</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 UMG SmartTV. Все права защищены.
            </p>
            <p className="text-white/60 text-sm mt-4 md:mt-0">
              Программатическая реклама • SmartTV • CTV
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;