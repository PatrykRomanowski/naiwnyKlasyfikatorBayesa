const hejtObjectWords = {
    1: ["tak", "głupi", "dureń", "nienawiść", "łysy", "oszczerstwo", "bezczelny", "drażliwy", "niekompetentny", "szkaradny", "skąpy", "wredny", "bezmyślny", "złośliwy", "nieokrzesany", "wyzyskiwacz", "bezwzględny", "chamski", "podły", "beztroski"],
    2: ["nie", "miły", "mądry", "szacunek", "empatia", "zrozumienie", "tolerancja", "uprzejmy", "uczciwy", "hojny", "mądry", "współpracujący", "szlachetny", "wyrozumiały", "dobre serce", "szanujący", "delikatny", "pokojowy", "serdeczny", "dobroć"],
    3: ["tak", "hejt", "krytyka", "oszczerstwo", "zawiść", "bezsensowny", "zgorzkniały", "obmawianie", "niesprawiedliwy", "nieszczery", "rozsiewający plotki", "wyśmiewający", "sarkastyczny", "złośliwe uwagi", "nietolerancyjny", "prześladowczy", "szkalujący", "podejrzliwy", "pobłażliwy"],
    4: ["nie", "tolerancja", "empatia", "zrozumienie", "spokój", "harmonia", "szacunek", "współpraca", "akceptacja", "pozytywny", "błogość", "wesoły", "pełen energii", "inspirujący", "motywujący", "spokój ducha", "święty", "dobrobyt", "satysfakcja", "radość", "beztroski"],
    5: ["tak", "bezczelny", "drażliwy", "niekompetentny", "szkaradny", "skąpy", "wredny", "bezmyślny", "złośliwy", "nieokrzesany", "wyzyskiwacz", "bezwzględny", "chamski", "podły", "beztroski", "głupi", "dureń", "nienawiść", "łysy", "oszczerstwo"],
    6: ["nie", "uczciwy", "hojny", "mądry", "współpracujący", "szlachetny", "wyrozumiały", "dobre serce", "szanujący", "delikatny", "pokojowy", "serdeczny", "dobroć", "miły", "mądry", "szacunek", "empatia", "zrozumienie", "tolerancja", "uprzejmy", "uczciwy"],
    7: ["tak", "złośliwy", "nieokrzesany", "wyzyskiwacz", "bezwzględny", "chamski", "podły", "beztroski", "głupi", "dureń", "nienawiść", "łysy", "oszczerstwo", "hejt", "krytyka", "oszczerstwo", "zawiść", "bezsensowny", "zgorzkniały", "obmawianie", "niesprawiedliwy"],
    8: ["nie", "hojny", "mądry", "współpracujący", "szlachetny", "wyrozumiały", "dobre serce", "szanujący", "delikatny", "pokojowy", "serdeczny", "dobroć", "miły", "mądry", "szacunek", "empatia", "zrozumienie", "tolerancja", "uprzejmy", "uczciwy", "spokojny"],
    9: ["tak", "rozsiewający plotki", "wyśmiewający", "sarkastyczny", "złośliwe uwagi", "nietolerancyjny", "prześladowczy", "szkalujący", "podejrzliwy", "pobłażliwy", "tolerancja", "empatia", "zrozumienie", "spokój", "harmonia", "szacunek", "współpraca", "akceptacja", "pozytywny", "błogość"],
    10: ["nie", "uczciwy", "hojny", "mądry", "współpracujący", "szlachetny", "wyrozumiały", "dobre serce", "szanujący", "delikatny", "pokojowy", "serdeczny", "dobroć", "miły", "mądry", "szacunek", "empatia", "zrozumienie", "tolerancja", "uprzejmy", "uczciwy"],
    11: ["tak", "niesprawiedliwy", "nieszczery", "rozsiewający plotki", "wyśmiewający", "sarkastyczny", "złośliwe uwagi", "nietolerancyjny", "prześladowczy", "szkalujący", "podejrzliwy", "pobłażliwy", "tolerancja", "empatia", "zrozumienie", "spokój", "harmonia", "szacunek", "współpraca", "akceptacja", "pozytywny", "błogość"],
    12: ["nie", "dobroć", "miły", "mądry", "szacunek", "empatia", "zrozumienie", "tolerancja", "uprzejmy", "uczciwy", "hojny", "mądry", "współpracujący", "szlachetny", "wyrozumiały", "dobre serce", "szanujący", "delikatny", "pokojowy", "serdeczny"],
    13: ["tak", "sarkastyczny", "złośliwe uwagi", "nietolerancyjny", "prześladowczy", "szkalujący", "podejrzliwy", "pobłażliwy", "tolerancja", "empatia", "zrozumienie", "spokój", "harmonia", "szacunek", "współpraca", "akceptacja", "pozytywny", "błogość", "wesoły", "pełen energii"],
    14: ["nie", "uczciwy", "hojny", "mądry", "współpracujący", "szlachetny", "wyrozumiały", "dobre serce", "szanujący", "delikatny", "pokojowy", "serdeczny", "dobroć", "miły", "mądry", "szacunek", "empatia", "zrozumienie", "tolerancja", "uprzejmy", "uczciwy"],
    15: ["nie", "motywujący", "spokój ducha", "święty", "dobrobyt", "satysfakcja", "radość", "beztroski", "głupi", "dureń", "nienawiść", "łysy", "oszczerstwo", "bezczelny", "drażliwy", "niekompetentny", "szkaradny", "skąpy", "wredny", "bezmyślny"],
    16: ["nie", "szanujący", "delikatny", "pokojowy", "serdeczny", "dobroć", "miły", "mądry", "szacunek", "empatia", "zrozumienie", "tolerancja", "uprzejmy", "uczciwy", "spokojny", "harmonia", "szacunek", "współpraca", "akceptacja", "pozytywny", "błogość"],
    17: ["tak", "złośliwy", "nieokrzesany", "wyzyskiwacz", "bezwzględny", "chamski", "podły", "beztroski", "głupi", "dureń", "nienawiść", "łysy", "oszczerstwo", "hejt", "krytyka", "oszczerstwo", "zawiść", "bezsensowny", "zgorzkniały", "obmawianie", "niesprawiedliwy"],
    18: ["nie", "uczciwy", "hojny", "mądry", "współpracujący", "szlachetny", "wyrozumiały", "dobre serce", "szanujący", "delikatny", "pokojowy", "serdeczny", "dobroć", "miły", "mądry", "szacunek", "empatia", "zrozumienie", "tolerancja", "uprzejmy", "uczciwy"],
    19: ["tak", "rozsiewający plotki", "wyśmiewający", "sarkastyczny", "złośliwe uwagi", "nietolerancyjny", "prześladowczy", "szkalujący", "podejrzliwy", "pobłażliwy", "tolerancja", "empatia", "zrozumienie", "spokój", "harmonia", "szacunek", "współpraca", "akceptacja", "pozytywny", "błogość"],
    20: ["nie", "uczciwy", "hojny", "mądry", "współpracujący", "szlachetny", "wyrozumiały", "dobre serce", "szanujący", "delikatny", "pokojowy", "serdeczny", "dobroć", "miły", "mądry", "szacunek", "empatia", "zrozumienie", "tolerancja", "uprzejmy", "uczciwy"],
};

module.exports = hejtObjectWords;


// Wypisywanie całego obiektu
// console.log(hejtObjectWords);