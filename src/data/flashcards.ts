export interface FlashCard {
  id: number;
  question: {
    ru: string;
    en: string;
    es: string;
  };
  answer: {
    ru: string;
    en: string;
    es: string;
  };
  hint: {
    ru: string;
    en: string;
    es: string;
  };
  answered?: boolean;
  correct?: boolean;
}

export const flashcards: FlashCard[] = [
  {
    id: 1,
    question: {
      ru: "Падение Римской империи",
      en: "Fall of the Roman Empire",
      es: "Caída del Imperio Romano"
    },
    answer: {
      ru: "476 год. Последний император Западной Римской империи Ромул Август был свергнут вождём германцев Одоакром, что считается концом Западной Римской империи.",
      en: "476 AD. The last emperor of the Western Roman Empire, Romulus Augustus, was overthrown by the Germanic leader Odoacer, which is considered the end of the Western Roman Empire.",
      es: "476 d.C. El último emperador del Imperio Romano de Occidente, Rómulo Augusto, fue derrocado por el líder germánico Odoacro, lo que se considera el fin del Imperio Romano de Occidente."
    },
    hint: {
      ru: "Произошло в V веке, отмечает конец классической античности и начало европейского средневековья.",
      en: "It happened in the 5th century, marking the end of classical antiquity and the beginning of the European Middle Ages.",
      es: "Ocurrió en el siglo V, marcando el final de la antigüedad clásica y el comienzo de la Edad Media europea."
    }
  },
  {
    id: 2,
    question: {
      ru: "Великие географические открытия",
      en: "Age of Discovery",
      es: "Era de los Descubrimientos"
    },
    answer: {
      ru: "XV–XVI века. Период, когда европейцы активно исследовали мир, открывая новые земли и морские пути. Ключевые фигуры: Христофор Колумб, Васко да Гама, Фернан Магеллан.",
      en: "15th-16th centuries. A period when Europeans actively explored the world, discovering new lands and sea routes. Key figures: Christopher Columbus, Vasco da Gama, Ferdinand Magellan.",
      es: "Siglos XV-XVI. Un período en el que los europeos exploraron activamente el mundo, descubriendo nuevas tierras y rutas marítimas. Figuras clave: Cristóbal Colón, Vasco da Gama, Fernando de Magallanes."
    },
    hint: {
      ru: "Этот период привёл к расширению европейского влияния по всему миру и началу колониальной эпохи.",
      en: "This period led to the expansion of European influence around the world and the beginning of the colonial era.",
      es: "Este período condujo a la expansión de la influencia europea en todo el mundo y al comienzo de la era colonial."
    }
  },
  {
    id: 3,
    question: {
      ru: "Американская революция",
      en: "American Revolution",
      es: "Revolución Americana"
    },
    answer: {
      ru: "1775–1783 гг. Война за независимость США от Великобритании, завершившаяся образованием Соединённых Штатов Америки.",
      en: "1775-1783. The War of Independence of the USA from Great Britain, which ended with the formation of the United States of America.",
      es: "1775-1783. La Guerra de Independencia de EE.UU. de Gran Bretaña, que terminó con la formación de los Estados Unidos de América."
    },
    hint: {
      ru: "Началась с Декларации независимости, подписанной 4 июля 1776 года.",
      en: "It began with the Declaration of Independence, signed on July 4, 1776.",
      es: "Comenzó con la Declaración de Independencia, firmada el 4 de julio de 1776."
    }
  },
  {
    id: 4,
    question: {
      ru: "Французская революция",
      en: "French Revolution",
      es: "Revolución Francesa"
    },
    answer: {
      ru: "1789 г. Свержение монархии во Франции, провозглашение республики и радикальные политические изменения, включая период Террора.",
      en: "1789. The overthrow of the monarchy in France, the proclamation of the republic, and radical political changes, including the period of Terror.",
      es: "1789. El derrocamiento de la monarquía en Francia, la proclamación de la república y los cambios políticos radicales, incluido el período del Terror."
    },
    hint: {
      ru: "Известна лозунгом 'Свобода, равенство, братство' и взятием Бастилии 14 июля.",
      en: "Known for the slogan 'Liberty, Equality, Fraternity' and the storming of the Bastille on July 14.",
      es: "Conocida por el lema 'Libertad, Igualdad, Fraternidad' y la toma de la Bastilla el 14 de julio."
    }
  },
  {
    id: 5,
    question: {
      ru: "Первая мировая война",
      en: "World War I",
      es: "Primera Guerra Mundial"
    },
    answer: {
      ru: "1914–1918 гг. Глобальный военный конфликт, начавшийся в Европе. Привёл к распаду четырёх империй и гибели более 9 миллионов солдат.",
      en: "1914-1918. A global military conflict that started in Europe. It led to the collapse of four empires and the death of over 9 million soldiers.",
      es: "1914-1918. Un conflicto militar global que comenzó en Europa. Llevó al colapso de cuatro imperios y la muerte de más de 9 millones de soldados."
    },
    hint: {
      ru: "Была спровоцирована убийством эрцгерцога Франца Фердинанда в Сараево.",
      en: "It was triggered by the assassination of Archduke Franz Ferdinand in Sarajevo.",
      es: "Fue provocado por el asesinato del archiduque Franz Ferdinand en Sarajevo."
    }
  },
  {
    id: 6,
    question: {
      ru: "Вторая мировая война",
      en: "World War II",
      es: "Segunda Guerra Mundial"
    },
    answer: {
      ru: "1939–1945 гг. Крупнейший военный конфликт в истории человечества с участием более 60 стран мира. Завершился победой союзников над нацистской Германией и Японией.",
      en: "1939-1945. The largest military conflict in human history, involving more than 60 countries. It ended with the victory of the Allies over Nazi Germany and Japan.",
      es: "1939-1945. El mayor conflicto militar en la historia de la humanidad, involucrando a más de 60 países. Terminó con la victoria de los Aliados sobre la Alemania nazi y Japón."
    },
    hint: {
      ru: "Началась с вторжения Германии в Польшу 1 сентября 1939 года.",
      en: "It began with the German invasion of Poland on September 1, 1939.",
      es: "Comenzó con la invasión alemana de Polonia el 1 de septiembre de 1939."
    }
  },
  {
    id: 7,
    question: {
      ru: "Холодная война",
      en: "Cold War",
      es: "Guerra Fría"
    },
    answer: {
      ru: "1947–1991 гг. Геополитическое напряжение между СССР и США после Второй мировой войны. Характеризуется гонкой вооружений, идеологическим противостоянием и конфликтами через союзников.",
      en: "1947-1991. Geopolitical tension between the USSR and the USA after World War II. Characterized by an arms race, ideological confrontation, and conflicts through allies.",
      es: "1947-1991. Tensión geopolítica entre la URSS y los EE. UU. después de la Segunda Guerra Mundial. Caracterizada por una carrera armamentista, confrontación ideológica y conflictos a través de aliados."
    },
    hint: {
      ru: "Завершилась распадом СССР и падением коммунистических режимов в Восточной Европе.",
      en: "It ended with the collapse of the USSR and the fall of communist regimes in Eastern Europe.",
      es: "Terminó con el colapso de la URSS y la caída de los regímenes comunistas en Europa del Este."
    }
  },
  {
    id: 8,
    question: {
      ru: "Появление письменности в Месопотамии",
      en: "The emergence of writing in Mesopotamia",
      es: "La aparición de la escritura en Mesopotamia"
    },
    answer: {
      ru: "Около 3200 г. до н.э. Шумерская клинопись — одна из первых систем письма в мире, созданная в Месопотамии (современный Ирак).",
      en: "Around 3200 BC. Sumerian cuneiform is one of the first writing systems in the world, created in Mesopotamia (modern Iraq).",
      es: "Alrededor del 3200 a. C. La escritura cuneiforme sumeria es uno de los primeros sistemas de escritura del mundo, creado en Mesopotamia (Irak moderno)."
    },
    hint: {
      ru: "Изначально использовалась для экономических записей и состояла из пиктограмм.",
      en: "Initially used for economic records and consisted of pictograms.",
      es: "Inicialmente utilizado para registros económicos y consistía en pictogramas."
    }
  },
  {
    id: 9,
    question: {
      ru: "Строительство пирамид в Египте",
      en: "Construction of pyramids in Egypt",
      es: "Construcción de pirámides en Egipto"
    },
    answer: {
      ru: "Около 2700-2200 гг. до н.э. Великие пирамиды были построены как монументальные гробницы для фараонов. Пирамида Хеопса — единственное из сохранившихся семи чудес света древнего мира.",
      en: "Around 2700-2200 BC. The Great Pyramids were built as monumental tombs for the pharaohs. The Pyramid of Cheops is the only surviving of the seven wonders of the ancient world.",
      es: "Alrededor del 2700-2200 a. C. Las Grandes Pirámides fueron construidas como tumbas monumentales para los faraones. La Pirámide de Keops es la única que se conserva de las siete maravillas del mundo antiguo."
    },
    hint: {
      ru: "Крупнейшая — пирамида Хеопса — построена около 2560 г. до н.э.",
      en: "The largest - the Pyramid of Cheops - was built around 2560 BC.",
      es: "La más grande, la Pirámide de Keops, fue construida alrededor del 2560 a. C."
    }
  },
  {
    id: 10,
    question: {
      ru: "Эпоха Возрождения в Европе",
      en: "Renaissance in Europe",
      es: "Renacimiento en Europa"
    },
    answer: {
      ru: "XIV-XVII века. Период европейской истории, ознаменовавшийся расцветом искусств, архитектуры, литературы, науки и обращением к античному наследию.",
      en: "XIV-XVII centuries. A period of European history marked by the flourishing of arts, architecture, literature, science and reference to the ancient heritage.",
      es: "Siglos XIV-XVII. Un período de la historia europea marcado por el florecimiento de las artes, la arquitectura, la literatura, la ciencia y la referencia a la herencia antigua."
    },
    hint: {
      ru: "Началась в Италии, среди видных деятелей — Леонардо да Винчи, Микеланджело, Рафаэль.",
      en: "It began in Italy, among the prominent figures - Leonardo da Vinci, Michelangelo, Raphael.",
      es: "Comenzó en Italia, entre las figuras prominentes: Leonardo da Vinci, Miguel Ángel, Rafael."
    }
  },
  {
    id: 11,
    question: {
      ru: "Протестантская Реформация",
      en: "Protestant Reformation",
      es: "Reforma Protestante"
    },
    answer: {
      ru: "Началась в 1517 г., когда Мартин Лютер опубликовал свои '95 тезисов'. Движение против практик и доктрин Римско-католической церкви, приведшее к возникновению протестантизма.",
      en: "It began in 1517, when Martin Luther published his '95 Theses'. A movement against the practices and doctrines of the Roman Catholic Church, which led to the emergence of Protestantism.",
      es: "Comenzó en 1517, cuando Martín Lutero publicó sus '95 Tesis'. Un movimiento contra las prácticas y doctrinas de la Iglesia Católica Romana, que condujo al surgimiento del protestantismo."
    },
    hint: {
      ru: "Ключевой принцип — 'Sola fide' (только верой), отрицающий необходимость церковных посредников для спасения души.",
      en: "The key principle is 'Sola fide' (faith alone), denying the need for church intermediaries to save the soul.",
      es: "El principio clave es 'Sola fide' (solo por la fe), negando la necesidad de intermediarios de la iglesia para salvar el alma."
    }
  },
  {
    id: 12,
    question: {
      ru: "Индустриальная революция",
      en: "Industrial Revolution",
      es: "Revolución Industrial"
    },
    answer: {
      ru: "XVIII-XIX века. Переход от ручного труда к машинному производству, начавшийся в Великобритании. Привёл к росту городов, изменению экономической структуры и социальным трансформациям.",
      en: "XVIII-XIX centuries. The transition from manual labor to machine production, which began in Great Britain. It led to the growth of cities, changes in the economic structure and social transformations.",
      es: "Siglos XVIII-XIX. La transición del trabajo manual a la producción a máquina, que comenzó en Gran Bretaña. Llevó al crecimiento de las ciudades, cambios en la estructura económica y transformaciones sociales."
    },
    hint: {
      ru: "Ключевые изобретения включали паровой двигатель, механический ткацкий станок и железные дороги.",
      en: "Key inventions included the steam engine, the mechanical loom and the railways.",
      es: "Las invenciones clave incluyeron la máquina de vapor, el telar mecánico y los ferrocarriles."
    }
  },
  {
    id: 13,
    question: {
      ru: "Образование ООН",
      en: "Formation of the UN",
      es: "Formación de la ONU"
    },
    answer: {
      ru: "1945 г., после окончания Второй мировой войны. Международная организация, созданная для поддержания международного мира и безопасности, развития сотрудничества между нациями.",
      en: "1945, after the end of World War II. An international organization created to maintain international peace and security, and to develop cooperation between nations.",
      es: "1945, después del final de la Segunda Guerra Mundial. Una organización internacional creada para mantener la paz y la seguridad internacionales y para desarrollar la cooperación entre las naciones."
    },
    hint: {
      ru: "Устав ООН был подписан 26 июня 1945 года в Сан-Франциско 50 странами.",
      en: "The UN Charter was signed on June 26, 1945 in San Francisco by 50 countries.",
      es: "La Carta de la ONU fue firmada el 26 de junio de 1945 en San Francisco por 50 países."
    }
  },
  {
    id: 14,
    question: {
      ru: "Падение Берлинской стены",
      en: "Fall of the Berlin Wall",
      es: "Caída del Muro de Berlín"
    },
    answer: {
      ru: "9 ноября 1989 г. Демонтаж барьера, разделявшего Западный и Восточный Берлин с 1961 года. Символизирует конец Холодной войны и начало объединения Германии.",
      en: "November 9, 1989. The dismantling of the barrier that separated West and East Berlin since 1961. It symbolizes the end of the Cold War and the beginning of the reunification of Germany.",
      es: "9 de noviembre de 1989. El desmantelamiento de la barrera que separó Berlín Occidental y Oriental desde 1961. Simboliza el fin de la Guerra Fría y el comienzo de la reunificación de Alemania."
    },
    hint: {
      ru: "Последовало за массовыми протестами в ГДР и изменениями в политике СССР при Горбачёве.",
      en: "It followed mass protests in the GDR and changes in Soviet policy under Gorbachev.",
      es: "Siguió a las protestas masivas en la RDA y los cambios en la política soviética bajo Gorbachov."
    }
  },
  {
    id: 15,
    question: {
      ru: "Изобретение печатного станка",
      en: "Invention of the printing press",
      es: "Invención de la imprenta"
    },
    answer: {
      ru: "Около 1440 г., Иоганном Гутенбергом. Первое механическое устройство для массового книгопечатания в Европе, революционизировавшее распространение информации.",
      en: "Around 1440, by Johann Gutenberg. The first mechanical device for mass book printing in Europe, which revolutionized the dissemination of information.",
      es: "Alrededor de 1440, por Johann Gutenberg. El primer dispositivo mecánico para la impresión masiva de libros en Europa, que revolucionó la difusión de información."
    },
    hint: {
      ru: "Первой напечатанной книгой была Библия Гутенберга, известная своим высоким типографским качеством.",
      en: "The first printed book was the Gutenberg Bible, known for its high typographic quality.",
      es: "El primer libro impreso fue la Biblia de Gutenberg, conocida por su alta calidad tipográfica."
    }
  },
  {
    id: 16,
    question: {
      ru: "Крестоносные походы",
      en: "Crusades",
      es: "Cruzadas"
    },
    answer: {
      ru: "1096-1291 гг. Серия религиозных войн, санкционированных Римско-католической церковью, с целью возвращения христианского контроля над Святой землёй.",
      en: "1096-1291. A series of religious wars sanctioned by the Roman Catholic Church to restore Christian control over the Holy Land.",
      es: "1096-1291. Una serie de guerras religiosas sancionadas por la Iglesia Católica Romana para restaurar el control cristiano sobre Tierra Santa."
    },
    hint: {
      ru: "Всего состоялось восемь основных крестовых походов, первый был объявлен Папой Урбаном II.",
      en: "In total, there were eight major crusades, the first was declared by Pope Urban II.",
      es: "En total, hubo ocho cruzadas principales, la primera fue declarada por el Papa Urbano II."
    }
  },
  {
    id: 17,
    question: {
      ru: "Великая депрессия",
      en: "Great Depression",
      es: "Gran Depresión"
    },
    answer: {
      ru: "1929-1939 гг. Крупнейший мировой экономический кризис XX века, начавшийся с краха фондового рынка в США ('Черный четверг').",
      en: "1929-1939. The largest global economic crisis of the 20th century, which began with the stock market crash in the USA ('Black Thursday').",
      es: "1929-1939. La mayor crisis económica mundial del siglo XX, que comenzó con la caída de la bolsa de valores en los EE. UU. ('Jueves Negro')."
    },
    hint: {
      ru: "Привела к значительным политическим изменениям, включая политику 'Нового курса' в США.",
      en: "It led to significant political changes, including the 'New Deal' policy in the United States.",
      es: "Condujo a cambios políticos significativos, incluida la política del 'New Deal' en los Estados Unidos."
    }
  },
  {
    id: 18,
    question: {
      ru: "Битва при Ватерлоо",
      en: "Battle of Waterloo",
      es: "Batalla de Waterloo"
    },
    answer: {
      ru: "18 июня 1815 г. Решающая битва наполеоновских войн, в которой коалиция под командованием герцога Веллингтона и Гебхарда Блюхера разгромила французскую армию Наполеона Бонапарта.",
      en: "June 18, 1815. The decisive battle of the Napoleonic Wars, in which a coalition under the command of the Duke of Wellington and Gebhard Blücher defeated the French army of Napoleon Bonaparte.",
      es: "18 de junio de 1815. La batalla decisiva de las guerras napoleónicas, en la que una coalición bajo el mando del duque de Wellington y Gebhard Blücher derrotó al ejército francés de Napoleón Bonaparte."
    },
    hint: {
      ru: "Произошла на территории современной Бельгии, положила конец правлению Наполеона.",
      en: "It took place on the territory of modern Belgium, putting an end to Napoleon's rule.",
      es: "Tuvo lugar en el territorio de la Bélgica moderna, poniendo fin al gobierno de Napoleón."
    }
  },
  {
    id: 19,
    question: {
      ru: "Октябрьская революция в России",
      en: "October Revolution in Russia",
      es: "Revolución de Octubre en Rusia"
    },
    answer: {
      ru: "7 ноября (25 октября по старому стилю) 1917 г. Вооружённое восстание в Петрограде под руководством большевиков, приведшее к свержению Временного правительства и установлению советской власти.",
      en: "November 7 (October 25, old style), 1917. An armed uprising in Petrograd led by the Bolsheviks, which led to the overthrow of the Provisional Government and the establishment of Soviet power.",
      es: "7 de noviembre (25 de octubre, estilo antiguo) de 1917. Un levantamiento armado en Petrogrado liderado por los bolcheviques, que condujo al derrocamiento del Gobierno Provisional y al establecimiento del poder soviético."
    },
    hint: {
      ru: "Произошла под лозунгом 'Мир народам, хлеб голодным, власть Советам!'",
      en: "It took place under the slogan 'Peace to the peoples, bread to the hungry, power to the Soviets!'",
      es: "Tuvo lugar bajo el lema '¡Paz a los pueblos, pan a los hambrientos, poder a los soviets!'"
    }
  },
  {
    id: 20,
    question: {
      ru: "Империя инков",
      en: "Inca Empire",
      es: "Imperio Inca"
    },
    answer: {
      ru: "1438-1533 гг. Крупнейшая империя доколумбовой Америки с центром в городе Куско (современное Перу). Известна развитой системой дорог, архитектурой и административной системой.",
      en: "1438-1533. The largest empire of pre-Columbian America with its center in the city of Cusco (modern Peru). Known for its developed road system, architecture and administrative system.",
      es: "1438-1533. El imperio más grande de la América precolombina con su centro en la ciudad de Cusco (Perú moderno). Conocido por su desarrollado sistema de carreteras, arquitectura y sistema administrativo."
    },
    hint: {
      ru: "Была завоёвана испанскими конкистадорами во главе с Франсиско Писарро.",
      en: "It was conquered by the Spanish conquistadors led by Francisco Pizarro.",
      es: "Fue conquistada por los conquistadores españoles liderados por Francisco Pizarro."
    }
  },
  {
    id: 21,
    question: {
      ru: "Великая Китайская стена",
      en: "Great Wall of China",
      es: "Gran Muralla China"
    },
    answer: {
      ru: "Строилась с III века до н.э. до XVII века н.э. Серия оборонительных сооружений вдоль северных границ Китая для защиты от кочевников. Общая протяжённость — более 21 тысячи километров.",
      en: "It was built from the 3rd century BC to the 17th century AD. A series of defensive structures along the northern borders of China to protect against nomads. The total length is more than 21 thousand kilometers.",
      es: "Fue construido desde el siglo III a. C. hasta el siglo XVII d. C. Una serie de estructuras defensivas a lo largo de las fronteras del norte de China para proteger contra los nómadas. La longitud total es de más de 21 mil kilómetros."
    },
    hint: {
      ru: "Большая часть сохранившихся участков стены была построена во времена династии Мин (1368-1644).",
      en: "Most of the preserved sections of the wall were built during the Ming Dynasty (1368-1644).",
      es: "La mayoría de las secciones conservadas de la muralla fueron construidas durante la dinastía Ming (1368-1644)."
    }
  },
  {
    id: 22,
    question: {
      ru: "Империя Монгольского ханства",
      en: "Mongol Empire",
      es: "Imperio Mongol"
    },
    answer: {
      ru: "1206-1368 гг. Крупнейшая в истории империя, основанная Чингисханом. В период наибольшего расширения включала территории от Восточной Европы до Японского моря.",
      en: "1206-1368. The largest empire in history, founded by Genghis Khan. At its greatest extent, it included territories from Eastern Europe to the Sea of Japan.",
      es: "1206-1368. El imperio más grande de la historia, fundado por Genghis Khan. En su mayor extensión, incluyó territorios desde Europa del Este hasta el Mar de Japón."
    },
    hint: {
      ru: "Известна религиозной толерантностью, системой почтовой связи (ямской системой) и военными инновациями.",
      en: "Known for religious tolerance, a postal system (Yam system) and military innovations.",
      es: "Conocido por la tolerancia religiosa, un sistema postal (sistema Yam) e innovaciones militares."
    }
  },
  {
    id: 23,
    question: {
      ru: "Открытие Америки Христофором Колумбом",
      en: "Discovery of America by Christopher Columbus",
      es: "Descubrimiento de América por Cristóbal Colón"
    },
    answer: {
      ru: "1492 г. Первое зарегистрированное европейское путешествие в Америку. Колумб высадился на острове в Багамском архипелаге, считая, что достиг Индии.",
      en: "1492. The first recorded European voyage to America. Columbus landed on an island in the Bahamas archipelago, believing he had reached India.",
      es: "1492. El primer viaje europeo registrado a América. Colón desembarcó en una isla del archipiélago de las Bahamas, creyendo que había llegado a la India."
    },
    hint: {
      ru: "Колумб совершил всего четыре экспедиции в Новый Свет, но до конца жизни был уверен, что открыл путь в Азию.",
      en: "Columbus made only four expeditions to the New World, but until the end of his life he was sure that he had discovered a route to Asia.",
      es: "Colón realizó solo cuatro expediciones al Nuevo Mundo, pero hasta el final de su vida estuvo seguro de que había descubierto una ruta a Asia."
    }
  },
  {
    id: 24,
    question: {
      ru: "Война за независимость Индии",
      en: "Indian Independence War",
      es: "Guerra de Independencia de la India"
    },
    answer: {
      ru: "Достигла успеха в 1947 г. после десятилетий сопротивления британскому колониальному правлению. Лидером движения за независимость был Махатма Ганди, продвигавший ненасильственное сопротивление.",
      en: "Achieved success in 1947 after decades of resistance to British colonial rule. The leader of the independence movement was Mahatma Gandhi, who promoted non-violent resistance.",
      es: "Logró el éxito en 1947 después de décadas de resistencia al dominio colonial británico. El líder del movimiento por la independencia fue Mahatma Gandhi, quien promovió la resistencia no violenta."
    },
    hint: {
      ru: "Независимость сопровождалась разделом на Индию и Пакистан на религиозной основе.",
      en: "Independence was accompanied by the partition into India and Pakistan on a religious basis.",
      es: "La independencia fue acompañada por la partición en India y Pakistán sobre una base religiosa."
    }
  },
  {
    id: 25,
    question: {
      ru: "Японская Мэйдзи революция",
      en: "Japanese Meiji Revolution",
      es: "Revolución Meiji Japonesa"
    },
    answer: {
      ru: "1868-1912 гг. Период стремительной модернизации и вестернизации Японии. Феодальная система была заменена современным государством с конституцией, парламентом и промышленностью.",
      en: "1868-1912. A period of rapid modernization and westernization of Japan. The feudal system was replaced by a modern state with a constitution, parliament and industry.",
      es: "1868-1912. Un período de rápida modernización y occidentalización de Japón. El sistema feudal fue reemplazado por un estado moderno con una constitución, un parlamento y una industria."
    },
    hint: {
      ru: "Название 'Мэйдзи' означает 'просвещённое правление', это период правления императора Муцухито.",
      en: "The name 'Meiji' means 'enlightened rule', this is the period of the reign of Emperor Mutsuhito.",
      es: "El nombre 'Meiji' significa 'gobierno iluminado', este es el período del reinado del emperador Mutsuhito."
    }
  },
  {
    id: 26,
    question: {
      ru: "Падение Константинополя",
      en: "Fall of Constantinople",
      es: "Caída de Constantinopla"
    },
    answer: {
      ru: "29 мая 1453 г. Захват столицы Византийской империи османскими войсками султана Мехмеда II. Ознаменовал конец тысячелетней Византийской империи.",
      en: "May 29, 1453. The capture of the capital of the Byzantine Empire by the Ottoman troops of Sultan Mehmed II. Marked the end of the thousand-year-old Byzantine Empire.",
      es: "29 de mayo de 1453. La captura de la capital del Imperio Bizantino por las tropas otomanas del sultán Mehmed II. Marcó el fin del Imperio Bizantino de mil años."
    },
    hint: {
      ru: "Город был переименован в Стамбул и стал столицей Османской империи до 1923 года.",
      en: "The city was renamed Istanbul and became the capital of the Ottoman Empire until 1923.",
      es: "La ciudad pasó a llamarse Estambul y se convirtió en la capital del Imperio Otomano hasta 1923."
    }
  },
  {
    id: 27,
    question: {
      ru: "Карибский кризис",
      en: "Cuban Missile Crisis",
      es: "Crisis de los Misiles de Cuba"
    },
    answer: {
      ru: "Октябрь 1962 г. Противостояние между США и СССР из-за размещения советских ядерных ракет на Кубе. Мир был на грани ядерной войны.",
      en: "October 1962. Confrontation between the United States and the USSR over the deployment of Soviet nuclear missiles in Cuba. The world was on the brink of nuclear war.",
      es: "Octubre de 1962. Enfrentamiento entre Estados Unidos y la URSS por el despliegue de misiles nucleares soviéticos en Cuba. El mundo estuvo al borde de la guerra nuclear."
    },
    hint: {
      ru: "Разрешился соглашением о выводе советских ракет с Кубы в обмен на обещание США не вторгаться на Кубу и убрать ракеты из Турции.",
      en: "It was resolved by an agreement to withdraw Soviet missiles from Cuba in exchange for a US promise not to invade Cuba and remove missiles from Turkey.",
      es: "Se resolvió mediante un acuerdo para retirar los misiles soviéticos de Cuba a cambio de una promesa de Estados Unidos de no invadir Cuba y retirar los misiles de Turquía."
    }
