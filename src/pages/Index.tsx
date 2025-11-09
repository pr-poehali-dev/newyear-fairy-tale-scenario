import { useState } from 'react';
import Snowfall from '@/components/Snowfall';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('story');

  const sections = [
    { id: 'story', title: 'Сюжет', icon: 'BookOpen' },
    { id: 'heroes', title: 'Герои', icon: 'Users' },
    { id: 'scenes', title: 'Сцены', icon: 'Film' },
    { id: 'finale', title: 'Финал', icon: 'Sparkles' }
  ];

  const heroes = [
    {
      name: 'Баба-Яга',
      role: 'Блогерша и директор стартапа',
      description: 'Живёт в умной избушке с Wi-Fi, ведёт влог "Магия на каждый день"',
      image: 'https://cdn.poehali.dev/projects/95e4774e-4e6f-4928-97df-ef5927837104/files/2064fa30-7126-4ab0-aa5b-18fb632839f4.jpg'
    },
    {
      name: 'Кощей Бессмертный',
      role: 'Криптоинвестор',
      description: 'Хранит душу в блокчейне, коллекционирует NFT',
      image: 'https://cdn.poehali.dev/projects/95e4774e-4e6f-4928-97df-ef5927837104/files/87c75f9c-7ce6-4db7-9996-498e4e9530e2.jpg'
    },
    {
      name: 'Василиса Премудрая',
      role: 'Хакер и программист',
      description: 'Разрабатывает ИИ-помощников для сказочных задач',
      image: 'https://cdn.poehali.dev/projects/95e4774e-4e6f-4928-97df-ef5927837104/files/2064fa30-7126-4ab0-aa5b-18fb632839f4.jpg'
    },
    {
      name: 'Змей Горыныч',
      role: 'Доставщик и логист',
      description: 'Руководит службой экспресс-доставки "3 Головы Express"',
      image: 'https://cdn.poehali.dev/projects/95e4774e-4e6f-4928-97df-ef5927837104/files/87c75f9c-7ce6-4db7-9996-498e4e9530e2.jpg'
    }
  ];

  const scenes = [
    {
      title: 'Сцена 1: Тревожное начало',
      description: 'В сказочном царстве гаснут огни. Василиса обнаруживает вирус в системе новогодних украшений.'
    },
    {
      title: 'Сцена 2: Появление злодея',
      description: 'Кощей Бессмертный объявляет об отмене Нового года. Он заморозил время в криптокапсуле.'
    },
    {
      title: 'Сцена 3: Сбор команды',
      description: 'Баба-Яга собирает совет героев в своей smart-избушке. План спасения праздника запущен.'
    },
    {
      title: 'Сцена 4: Поиски Деда Мороза',
      description: 'Змей Горыныч находит координаты волшебного портала к резиденции Деда Мороза.'
    },
    {
      title: 'Сцена 5: Битва со злом',
      description: 'Василиса взламывает защиту Кощея, а Баба-Яга отвлекает его прямым эфиром.'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Snowfall />
      
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/90 to-background" />
      
      <div className="relative z-10">
        <header className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
              Новогодняя Сказка
            </h1>
            <p className="text-xl md:text-2xl text-secondary/90 max-w-2xl mx-auto">
              Современные герои спасают праздник
            </p>
          </div>
        </header>

        <nav className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center gap-3">
            {sections.map((section) => (
              <Button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                variant={activeSection === section.id ? 'default' : 'outline'}
                className="gap-2 text-lg px-6 py-6"
              >
                <Icon name={section.icon} size={20} />
                {section.title}
              </Button>
            ))}
          </div>
        </nav>

        <main className="container mx-auto px-4 py-12">
          {activeSection === 'story' && (
            <div className="animate-fade-in space-y-8">
              <Card className="bg-card/90 backdrop-blur border-2 border-primary/20">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Scroll" className="text-accent animate-sparkle" size={32} />
                    <h2 className="text-4xl font-bold text-foreground">Сюжет</h2>
                  </div>
                  
                  <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                    <p className="text-xl font-semibold text-foreground">
                      🎭 Канун Нового года. В сказочном царстве что-то идёт не так...
                    </p>
                    
                    <p>
                      Кощей Бессмертный, разочаровавшись в криптовалюте после очередного краха рынка, 
                      решил отомстить всему миру. Он похитил волшебные часы времени и заморозил их в 
                      своей блокчейн-капсуле, угрожая отменить наступление Нового года навсегда!
                    </p>
                    
                    <p>
                      Без Нового года исчезнут все чудеса: не придут Дед Мороз и Снегурочка, 
                      не исполнятся желания, а главное — люди потеряют веру в магию и волшебство.
                    </p>
                    
                    <p className="text-xl font-semibold text-foreground pt-4">
                      ⚡ Но современные сказочные герои не сдаются!
                    </p>
                    
                    <p>
                      Баба-Яга, Василиса Премудрая и Змей Горыныч объединяются, чтобы спасти праздник. 
                      Им предстоит использовать все свои современные навыки: программирование, 
                      социальные сети, логистику и древнюю магию, чтобы остановить злодея и 
                      вернуть Деда Мороза со Снегурочкой на новогоднее торжество!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === 'heroes' && (
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-center mb-12 text-white flex items-center justify-center gap-3">
                <Icon name="Users" className="text-accent animate-sparkle" size={36} />
                Наши герои
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {heroes.map((hero, index) => (
                  <Card 
                    key={index} 
                    className="bg-card/90 backdrop-blur border-2 border-primary/20 hover:border-accent/50 transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <div className="aspect-video rounded-lg overflow-hidden mb-4">
                        <img 
                          src={hero.image} 
                          alt={hero.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-foreground">{hero.name}</h3>
                      <p className="text-accent font-semibold mb-3">{hero.role}</p>
                      <p className="text-muted-foreground">{hero.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'scenes' && (
            <div className="animate-fade-in space-y-6">
              <h2 className="text-4xl font-bold text-center mb-12 text-white flex items-center justify-center gap-3">
                <Icon name="Film" className="text-accent animate-sparkle" size={36} />
                Сцены сказки
              </h2>
              {scenes.map((scene, index) => (
                <Card 
                  key={index} 
                  className="bg-card/90 backdrop-blur border-2 border-primary/20 hover:border-accent/40 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-2xl font-bold animate-float">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3 text-foreground">{scene.title}</h3>
                        <p className="text-lg text-muted-foreground">{scene.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeSection === 'finale' && (
            <div className="animate-fade-in">
              <Card className="bg-gradient-to-br from-accent/20 via-card/90 to-primary/20 backdrop-blur border-2 border-accent">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <Icon name="Sparkles" className="text-accent animate-sparkle" size={48} />
                    <h2 className="text-5xl font-bold text-center text-foreground">Счастливый финал</h2>
                    <Icon name="Sparkles" className="text-accent animate-sparkle" size={48} />
                  </div>
                  
                  <div className="space-y-6 text-lg leading-relaxed">
                    <div className="text-center">
                      <img 
                        src="https://cdn.poehali.dev/projects/95e4774e-4e6f-4928-97df-ef5927837104/files/37222c0b-e53b-418f-89dc-5e37326f765e.jpg" 
                        alt="Дед Мороз и Снегурочка"
                        className="rounded-lg w-full max-w-2xl mx-auto mb-8 border-4 border-accent/50"
                      />
                    </div>

                    <p className="text-2xl font-bold text-center text-accent">
                      🎉 Праздник спасён! 🎉
                    </p>
                    
                    <p className="text-muted-foreground">
                      Василиса Премудрая взломала криптокапсулу Кощея, используя древние руны и 
                      современные алгоритмы. Баба-Яга провела самый популярный прямой эфир в истории 
                      сказочного интернета, отвлекая злодея. А Змей Горыныч доставил команду 
                      точно в нужное место благодаря своей суперскоростной логистике!
                    </p>
                    
                    <p className="text-muted-foreground">
                      Волшебные часы снова заработали, и время двинулось вперёд! С последним 
                      ударом курантов на главной площади появились долгожданные гости...
                    </p>
                    
                    <div className="bg-primary/30 p-6 rounded-lg border-2 border-accent/30 my-6">
                      <p className="text-xl font-bold text-foreground text-center mb-4">
                        ❄️ Дед Мороз и Снегурочка прибыли! ❄️
                      </p>
                      <p className="text-muted-foreground text-center">
                        Они поблагодарили героев за спасение Нового года и подарили каждому по волшебному подарку
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground">
                      Даже Кощей Бессмертный, увидев настоящее волшебство дружбы и командной работы, 
                      раскаялся. Дед Мороз простил его и подарил новый стартап-проект: 
                      "Доброе волшебство в каждый дом". Теперь Кощей использует технологии во благо!
                    </p>
                    
                    <div className="text-center pt-6">
                      <p className="text-3xl font-bold text-foreground mb-4">
                        ✨ И все зажили счастливо! ✨
                      </p>
                      <p className="text-xl text-accent">
                        С Новым Годом! Пусть в вашей жизни будет место и современным технологиям, и настоящему волшебству! 🎄
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>

        <footer className="container mx-auto px-4 py-12 text-center">
          <p className="text-secondary/80 text-lg">
            Создано с волшебством и технологиями ✨
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
