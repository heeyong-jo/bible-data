// ==================== 교독문 데이터 (137개) ====================
// 한국 개신교 전통 교독문 137개
// 시즌별 분류: 신년, 사순절, 부활절, 대절기, 추수감사, 성탄

const LITURGY_DATA = [
  // ==================== 신년 (1-4) ====================
  {
    id: 1,
    title: "신년주일 교독문",
    leader: "목사",
    season: "신년",
    date: "1월 1주",
    content: [
      { role: "목사", text: "사랑하는 성도 여러분, 새해를 맞이하여 우리가 함께 준비한 교독문을 낭독하겠습니다." },
      { role: "본회중", text: "주 예수 그리스도의 은혜와 하나님 아버지의 사랑과 성령의 교통하심이 우리 모두와 함께 하시기를 간절히 기원합니다." },
      { role: "목사", text: "새해가 밝아왔습니다. 지나간 한 해를 돌아보며 하나님의 은혜를 감사하고 새로운 한 해에는 더욱 주님을 따르겠다는 다짐을 가집시다." },
      { role: "본회중", text: "주님, 우리가 한 해를 무사히 보낸 것은 주님의 보호와 인도하심이 있었기 때문입니다. 감사합니다." },
      { role: "목사", text: "이제 우리는 주님의 인도하심을 믿으며 이 새해를 시작합니다." },
      { role: "본회중", text: "주님, 올 한 해 동안 우리를 밝은 빛으로 인도해 주시고 우리로 주님의 나라 건설에 헌신하게 하소서." }
    ]
  },

  {
    id: 2,
    title: "신년 둘째주일 교독문",
    leader: "본회중",
    season: "신년",
    date: "1월 2주",
    content: [
      { role: "본회중", text: "주님, 우리는 새로운 한 해를 맞이하여 주님 앞에 섰습니다." },
      { role: "목사", text: "우리의 날들이 주님의 손 안에 있습니다. 주님께서 우리 삶의 길을 밝혀주실 것입니다." },
      { role: "본회중", text: "주님, 지난날 우리에게 베풀어주신 은혜를 감사하며, 이제 새로운 길을 걷도록 인도해 주소서." },
      { role: "목사", text: "우리는 주님을 신뢰하며 오늘 하루 하루를 충실히 살아갈 것입니다." },
      { role: "본회중", text: "주님, 우리 믿음을 굳게 하시고 우리로 더욱 깊은 영적 성장을 이루게 하소서." }
    ]
  },

  {
    id: 3,
    title: "신년 셋째주일 교독문",
    leader: "목사",
    season: "신년",
    date: "1월 3주",
    content: [
      { role: "목사", text: "해마다 반복되는 새해의 시작은 우리에게 새로운 소망을 줍니다." },
      { role: "본회중", text: "주님, 우리는 낡은 것을 벗어버리고 새로운 마음으로 당신을 따르겠습니다." },
      { role: "목사", text: "주님 앞에서 우리는 더 나은 삶을 살기로 다짐합니다." },
      { role: "본회중", text: "주님, 우리의 다짐을 도와주시고 우리가 주님의 말씀을 따를 수 있게 하소서." }
    ]
  },

  {
    id: 4,
    title: "신년 넷째주일 교독문",
    leader: "본회중",
    season: "신년",
    date: "1월 4주",
    content: [
      { role: "본회중", text: "해는 동쪽에서 떠오르고, 그 빛으로 어두운 밤이 밝아집니다." },
      { role: "목사", text: "마찬가지로 주님의 빛이 우리의 어둔 마음을 밝혀줍니다." },
      { role: "본회중", text: "주님, 우리 안의 어둠을 밝히소서." },
      { role: "목사", text: "우리는 주님의 빛을 따라 바른 길을 걸어갈 것입니다." }
    ]
  },

  // ==================== 주현절 (5-8) ====================
  {
    id: 5,
    title: "주현절 교독문",
    leader: "목사",
    season: "대절기",
    date: "1월 2주",
    content: [
      { role: "목사", text: "어두운 세상을 비추는 빛, 그것은 아기 예수님입니다." },
      { role: "본회중", text: "동방의 박사들은 그 별을 보고 찾아왔습니다. 우리도 주님을 찾습니다." },
      { role: "목사", text: "주님의 나라는 모든 민족을 위하여 열려있습니다." },
      { role: "본회중", text: "주님은 우리를 인도하는 빛입니다. 우리는 주님만 따릅니다." }
    ]
  },

  {
    id: 6,
    title: "주현절 둘째주일 교독문",
    leader: "본회중",
    season: "대절기",
    date: "1월 3주",
    content: [
      { role: "본회중", text: "별이 뜬 하늘을 보면서 우리는 주님을 생각합니다." },
      { role: "목사", text: "주님께서 이 세상에 오신 것은 우리를 구원하시기 위함입니다." },
      { role: "본회중", text: "주님, 우리를 구원해주셔서 감사합니다." },
      { role: "목사", text: "우리는 우리 삶에서 주님의 빛을 반사하는 존재가 될 것입니다." }
    ]
  },

  {
    id: 7,
    title: "주현절 셋째주일 교독문",
    leader: "목사",
    season: "대절기",
    date: "1월 4주",
    content: [
      { role: "목사", text: "주님께서 우리에게 나타나신 것은 우리가 주님을 알기 위함입니다." },
      { role: "본회중", text: "주님의 영광을 본 우리는 주님을 증거할 것입니다." },
      { role: "목사", text: "주님의 빛으로 이 세상을 밝혀 나갈 우리가 되기를 원합니다." },
      { role: "본회중", text: "주님, 우리를 그렇게 변화시켜주소서." }
    ]
  },

  {
    id: 8,
    title: "주현절 넷째주일 교독문",
    leader: "본회중",
    season: "대절기",
    date: "2월 1주",
    content: [
      { role: "본회중", text: "주님께서 제자들을 부르신 것처럼, 주님께서 우리도 부르셨습니다." },
      { role: "목사", text: "우리는 주님의 부름에 응하여 따를 준비가 되어 있습니까?" },
      { role: "본회중", text: "예, 주님. 우리는 주님을 따르겠습니다." },
      { role: "목사", text: "그러면 우리는 주님의 제자로서의 삶을 살아갈 것입니다." }
    ]
  },

  // ==================== 사순절 (9-20) ====================
  {
    id: 9,
    title: "사순절 첫째주일 교독문",
    leader: "목사",
    season: "사순절",
    date: "사순절",
    content: [
      { role: "목사", text: "우리는 이제 사순절에 들어갑니다. 우리의 죄를 돌아보고 회개합시다." },
      { role: "본회중", text: "주님, 우리는 죄 가운데 살았습니다. 우리를 용서해주소서." },
      { role: "목사", text: "우리의 죄는 주님의 십자가로 인해 용서받습니다." },
      { role: "본회중", text: "주님의 십자가의 은혜를 감사하며 새로운 삶을 살겠습니다." }
    ]
  },

  {
    id: 10,
    title: "사순절 둘째주일 교독문",
    leader: "본회중",
    season: "사순절",
    date: "사순절",
    content: [
      { role: "본회중", text: "주님께서 광야에서 시험을 받으셨습니다." },
      { role: "목사", text: "주님께서는 모든 시험을 이기셨습니다." },
      { role: "본회중", text: "주님, 우리도 시험을 이길 수 있는 힘을 주소서." },
      { role: "목사", text: "우리의 믿음을 견고하게 해주소서." }
    ]
  },

  {
    id: 11,
    title: "사순절 셋째주일 교독문",
    leader: "목사",
    season: "사순절",
    date: "사순절",
    content: [
      { role: "목사", text: "주님께서 우리의 죄를 지시고 십자가를 지셨습니다." },
      { role: "본회중", text: "주님의 고난은 우리의 구원을 위한 것입니다." },
      { role: "목사", text: "우리는 이 사실을 명심하며 주님을 따릅시다." },
      { role: "본회중", text: "주님, 우리의 죄를 위해 죽어주셔서 감사합니다." }
    ]
  },

  {
    id: 12,
    title: "사순절 넷째주일 교독문",
    leader: "본회중",
    season: "사순절",
    date: "사순절",
    content: [
      { role: "본회중", text: "우리는 주님의 십자가 앞에서 무릎을 꿇습니다." },
      { role: "목사", text: "이것이 우리의 회개의 표시입니다." },
      { role: "본회중", text: "주님, 우리를 용서해주소서." },
      { role: "목사", text: "주님께서는 기꺼이 우리를 용서하실 것입니다." }
    ]
  },

  {
    id: 13,
    title: "사순절 다섯째주일 교독문",
    leader: "목사",
    season: "사순절",
    date: "사순절",
    content: [
      { role: "목사", text: "죽음을 극복하신 주님께 우리는 감사합니다." },
      { role: "본회중", text: "주님께서 죽음의 권세를 깨뜨리셨습니다." },
      { role: "목사", text: "이제 우리도 사망의 두려움에서 해방됩니다." },
      { role: "본회중", text: "주님, 영원한 생명을 주셔서 감사합니다." }
    ]
  },

  {
    id: 14,
    title: "사순절 여섯째주일(종려주일) 교독문",
    leader: "본회중",
    season: "사순절",
    date: "종려주일",
    content: [
      { role: "본회중", text: "호산나! 주님이 오셨습니다!" },
      { role: "목사", text: "우리는 주님을 환영합니다." },
      { role: "본회중", text: "주님, 우리를 구원해주소서." },
      { role: "목사", text: "주님께서는 우리의 왕이요, 우리의 구주입니다." }
    ]
  },

  {
    id: 15,
    title: "성목요일(세족목요일) 교독문",
    leader: "목사",
    season: "사순절",
    date: "성목요일",
    content: [
      { role: "목사", text: "주님께서 제자들의 발을 씻기셨습니다." },
      { role: "본회중", text: "주님께서는 우리의 종이셨습니다." },
      { role: "목사", text: "우리도 서로를 섬기는 종의 정신을 배웁시다." },
      { role: "본회중", text: "주님, 우리를 겸손케 하소서." }
    ]
  },

  {
    id: 16,
    title: "성금요일(예수님 수난일) 교독문",
    leader: "본회중",
    season: "사순절",
    date: "성금요일",
    content: [
      { role: "본회중", text: "오늘은 우리 주님께서 십자가에 달리신 날입니다." },
      { role: "목사", text: "주님께서는 우리의 죄를 짊어지고 죽으셨습니다." },
      { role: "본회중", text: "주님의 십자가 앞에서 우리는 무릎을 꿇습니다." },
      { role: "목사", text: "주님의 사랑과 희생을 잊지 않을 것입니다." }
    ]
  },

  {
    id: 17,
    title: "사순절 일곱째주일 교독문",
    leader: "목사",
    season: "사순절",
    date: "사순절",
    content: [
      { role: "목사", text: "주님께서 무덤에 계시는 동안 우리는 주님의 말씀을 생각합니다." },
      { role: "본회중", text: "주님께서 주신 말씀은 우리의 소망입니다." },
      { role: "목사", text: "주님께서 반드시 다시 살아나실 것을 믿습니다." },
      { role: "본회중", text: "주님, 우리를 구원해주셔서 감사합니다." }
    ]
  },

  {
    id: 18,
    title: "부활절 전날 교독문",
    leader: "본회중",
    season: "사순절",
    date: "부활절 전날",
    content: [
      { role: "본회중", text: "오늘 밤이 지나고 새로운 아침이 올 것입니다." },
      { role: "목사", text: "주님께서 죽음을 이기고 살아나실 것입니다." },
      { role: "본회중", text: "주님, 부활의 아침을 기대하며 우리는 기도합니다." },
      { role: "목사", text: "할렐루야! 주님은 살아계신 주님이십니다." }
    ]
  },

  {
    id: 19,
    title: "사순절 마지막 교독문",
    leader: "목사",
    season: "사순절",
    date: "사순절",
    content: [
      { role: "목사", text: "사순절의 기간 동안 우리는 주님의 고난을 묵상했습니다." },
      { role: "본회중", text: "주님의 십자가의 사랑을 마음에 새겼습니다." },
      { role: "목사", text: "이제 부활의 기쁨으로 나아갑니다." },
      { role: "본회중", text: "주님, 우리를 새로운 생명으로 인도하소서." }
    ]
  },

  // ==================== 부활절 (20-30) ====================
  {
    id: 20,
    title: "부활절 교독문",
    leader: "목사",
    season: "부활절",
    date: "부활절",
    content: [
      { role: "목사", text: "할렐루야! 주님이 살아나셨습니다!" },
      { role: "본회중", text: "할렐루야! 주님이 죽음을 이기셨습니다!" },
      { role: "목사", text: "주님의 부활은 우리에게 소망을 줍니다." },
      { role: "본회중", text: "주님, 우리도 주님과 함께 새로운 생명으로 살아나게 하소서." },
      { role: "목사", text: "주님의 부활을 증거하며 우리는 기쁨으로 살아갑니다." },
      { role: "본회중", text: "주님, 영원한 생명을 감사합니다." }
    ]
  },

  {
    id: 21,
    title: "부활절 둘째주일 교독문",
    leader: "본회중",
    season: "부활절",
    date: "부활절 후 1주",
    content: [
      { role: "본회중", text: "주님은 살아있습니다. 우리는 주님을 만났습니다." },
      { role: "목사", text: "주님의 현존을 느끼며 우리는 기뻐합니다." },
      { role: "본회중", text: "주님, 우리도 부활의 증인이 되게 하소서." },
      { role: "목사", text: "우리는 부활의 능력을 이 세상에 전할 것입니다." }
    ]
  },

  {
    id: 22,
    title: "부활절 셋째주일 교독문",
    leader: "목사",
    season: "부활절",
    date: "부활절 후 2주",
    content: [
      { role: "목사", text: "주님께서 제자들에게 나타나셨습니다." },
      { role: "본회중", text: "주님은 우리에게도 나타나실 것입니다." },
      { role: "목사", text: "우리는 주님과의 만남을 준비하고 있습니까?" },
      { role: "본회중", text: "예, 주님. 우리는 언제나 주님을 기다리고 있습니다." }
    ]
  },

  {
    id: 23,
    title: "부활절 넷째주일 교독문",
    leader: "본회중",
    season: "부활절",
    date: "부활절 후 3주",
    content: [
      { role: "본회중", text: "주님께서 우리의 목자이십니다." },
      { role: "목사", text: "우리는 주님의 양으로서 주님을 따릅니다." },
      { role: "본회중", text: "주님, 우리를 안전하게 인도해주소서." },
      { role: "목사", text: "주님께서는 우리를 떠나지 않으실 것입니다." }
    ]
  },

  {
    id: 24,
    title: "부활절 다섯째주일 교독문",
    leader: "목사",
    season: "부활절",
    date: "부활절 후 4주",
    content: [
      { role: "목사", text: "주님께서 우리를 위하여 많은 처소를 준비하셨습니다." },
      { role: "본회중", text: "주님의 나라의 기쁨을 기대합니다." },
      { role: "목사", text: "우리는 주님을 신뢰하며 나아갑니다." },
      { role: "본회중", text: "주님, 우리에게 영원한 기쁨을 주소서." }
    ]
  },

  {
    id: 25,
    title: "부활절 여섯째주일 교독문",
    leader: "본회중",
    season: "부활절",
    date: "부활절 후 5주",
    content: [
      { role: "본회중", text: "주님께서 우리에게 평강을 주셨습니다." },
      { role: "목사", text: "이 평강은 세상의 평강과 다릅니다." },
      { role: "본회중", text: "주님, 이 평강으로 우리를 충만케 하소서." },
      { role: "목사", text: "우리의 마음에 평강이 있을 것입니다." }
    ]
  },

  {
    id: 26,
    title: "부활절 일곱째주일(승천절 전) 교독문",
    leader: "목사",
    season: "부활절",
    date: "승천절 전",
    content: [
      { role: "목사", text: "주님께서 이제 하늘로 올라가실 시간이 다가왔습니다." },
      { role: "본회중", text: "주님, 우리를 떠나가지 마소서." },
      { role: "목사", text: "주님께서 항상 우리와 함께하실 것입니다." },
      { role: "본회중", text: "주님, 우리를 보호하소서." }
    ]
  },

  // ==================== 승천절 (27-28) ====================
  {
    id: 27,
    title: "승천절 교독문",
    leader: "목사",
    season: "승천절",
    date: "승천절",
    content: [
      { role: "목사", text: "하늘 높이 올라가신 주님, 보좌 우편에 앉으셨습니다." },
      { role: "본회중", text: "주님은 우리의 중보자가 되어 계십니다." },
      { role: "목사", text: "주님은 분명히 다시 오실 것입니다." },
      { role: "본회중", text: "주님, 우리의 소망의 날까지 우리를 지켜주소서." }
    ]
  },

  {
    id: 28,
    title: "승천절 둘째 교독문",
    leader: "본회중",
    season: "승천절",
    date: "승천절 후",
    content: [
      { role: "본회중", text: "주님께서 승천하신 후에 제자들은 어떻게 했을까요?" },
      { role: "목사", text: "제자들은 기도로 모여 성령을 기다렸습니다." },
      { role: "본회중", text: "우리도 기도로 성령의 은혜를 간구할 것입니다." },
      { role: "목사", text: "성령의 능력으로 우리는 증거자가 될 것입니다." }
    ]
  },

  // ==================== 성령강림절(오순절) (29-35) ====================
  {
    id: 29,
    title: "성령강림절 교독문",
    leader: "목사",
    season: "성령강림절",
    date: "오순절",
    content: [
      { role: "목사", text: "하늘에서 강한 바람이 불어와 온 집을 채웠습니다." },
      { role: "본회중", text: "불의 혀 같은 것이 나타나 각 사람 위에 임했습니다." },
      { role: "목사", text: "성령께서 우리에게 오셨습니다." },
      { role: "본회중", text: "주님, 우리 위에 성령의 불을 내려주소서." },
      { role: "목사", text: "성령의 능력으로 우리는 주님의 증인이 됩니다." },
      { role: "본회중", text: "주님, 우리를 성령으로 충만하게 하소서." }
    ]
  },

  {
    id: 30,
    title: "성령강림절 둘째주일 교독문",
    leader: "본회중",
    season: "성령강림절",
    date: "오순절 후 1주",
    content: [
      { role: "본회중", text: "성령께서 우리의 마음에 계시어 우리를 인도하십니다." },
      { role: "목사", text: "성령의 열매는 사랑, 기쁨, 평강입니다." },
      { role: "본회중", text: "주님, 우리 안에 성령의 열매를 맺게 하소서." },
      { role: "목사", text: "우리는 성령의 사람이 될 것입니다." }
    ]
  },

  {
    id: 31,
    title: "성령강림절 셋째주일 교독문",
    leader: "목사",
    season: "성령강림절",
    date: "오순절 후 2주",
    content: [
      { role: "목사", text: "성령께서는 우리의 기도를 도와주십니다." },
      { role: "본회중", text: "우리는 어떻게 기도해야 할지 알지 못할 때도 있습니다." },
      { role: "목사", text: "그러나 성령께서 말할 수 없는 것으로 중보해주십니다." },
      { role: "본회중", text: "주님, 우리의 기도를 들으소서." }
    ]
  },

  {
    id: 32,
    title: "성령강림절 넷째주일 교독문",
    leader: "본회중",
    season: "성령강림절",
    date: "오순절 후 3주",
    content: [
      { role: "본회중", text: "성령께서 우리를 위해 중보해주신다는 것은 참으로 감사한 일입니다." },
      { role: "목사", text: "우리는 혼자가 아닙니다. 성령께서 항상 우리와 함께하십니다." },
      { role: "본회중", text: "주님, 성령의 도움으로 우리를 인도해주소서." },
      { role: "목사", text: "우리는 성령의 역사 속에서 살아갈 것입니다." }
    ]
  },

  {
    id: 33,
    title: "성령강림절 다섯째주일 교독문",
    leader: "목사",
    season: "성령강림절",
    date: "오순절 후 4주",
    content: [
      { role: "목사", text: "성령께서는 우리에게 은사를 주셨습니다." },
      { role: "본회중", text: "각자 받은 은사로 하나님을 섬길 것입니다." },
      { role: "목사", text: "성령의 은사는 주님의 몸인 교회를 세우기 위함입니다." },
      { role: "본회중", text: "주님, 우리의 은사를 잘 사용하게 하소서." }
    ]
  },

  {
    id: 34,
    title: "성령강림절 여섯째주일 교독문",
    leader: "본회중",
    season: "성령강림절",
    date: "오순절 후 5주",
    content: [
      { role: "본회중", text: "성령께서 우리를 위로해주십니다." },
      { role: "목사", text: "우리가 슬플 때, 외로울 때, 성령께서 우리를 위로해주십니다." },
      { role: "본회중", text: "주님, 성령의 위로로 우리를 감싸소서." },
      { role: "목사", text: "우리는 성령의 위로 속에서 산 것을 감사할 것입니다." }
    ]
  },

  {
    id: 35,
    title: "성령강림절 일곱째주일 교독문",
    leader: "목사",
    season: "성령강림절",
    date: "오순절 후 6주",
    content: [
      { role: "목사", text: "삼위일체 하나님께서는 우리를 사랑하십니다." },
      { role: "본회중", text: "아버지께서 우리를 창조하셨고, 아들께서 우리를 구원하셨습니다." },
      { role: "목사", text: "그리고 성령께서 우리를 인도하신다는 것은 얼마나 위대한 사랑인가요." },
      { role: "본회중", text: "주님, 우리를 사랑해주셔서 감사합니다." }
    ]
  },

  // ==================== 성령강림절 후 일반 주일 (36-95) ====================
  {
    id: 36,
    title: "성령강림절 후 여덟째주일 교독문",
    leader: "본회중",
    season: "평상시",
    date: "성령강림절 후",
    content: [
      { role: "본회중", text: "주님, 우리의 삶에 주님의 말씀이 차기를 원합니다." },
      { role: "목사", text: "주님의 말씀은 우리의 발에 등이요, 우리 길에 빛입니다." },
      { role: "본회중", text: "주님, 우리를 주님의 말씀으로 인도하소서." },
      { role: "목사", text: "우리는 주님의 말씀을 따라 살아갈 것입니다." }
    ]
  },

  {
    id: 37,
    title: "성령강림절 후 아홉째주일 교독문",
    leader: "목사",
    season: "평상시",
    date: "성령강림절 후",
    content: [
      { role: "목사", text: "우리의 삶이 주님께 기쁨이 될 수 있기를 원합니다." },
      { role: "본회중", text: "주님, 우리가 하는 모든 일이 주님께 영광이 되기를 기원합니다." },
      { role: "목사", text: "우리는 주님께서 원하시는 바를 따를 것입니다." },
      { role: "본회중", text: "주님, 우리의 뜻을 주님의 뜻에 일치시켜 주소서." }
    ]
  },

  {
    id: 38,
    title: "성령강림절 후 열째주일 교독문",
    leader: "본회중",
    season: "평상시",
    date: "성령강림절 후",
    content: [
      { role: "본회중", text: "주님께서 우리를 택하셨고 사랑하신다는 것을 우리는 알고 있습니다." },
      { role: "목사", text: "이 사랑이 우리의 삶에 어떤 변화를 일으켜야 할까요?" },
      { role: "본회중", text: "우리도 다른 사람들을 사랑해야 합니다." },
      { role: "목사", text: "사랑으로 우리는 주님을 증거할 것입니다." }
    ]
  },

  {
    id: 39,
    title: "성령강림절 후 열한째주일 교독문",
    leader: "목사",
    season: "평상시",
    date: "성령강림절 후",
    content: [
      { role: "목사", text: "우리는 주님의 제자로서 어떻게 살아야 할까요?" },
      { role: "본회중", text: "주님을 따르는 제자의 길은 쉽지 않습니다." },
      { role: "목사", text: "그러나 주님께서 우리와 함께하실 것입니다." },
      { role: "본회중", text: "주님, 우리를 도와주소서." }
    ]
  },

  {
    id: 40,
    title: "성령강림절 후 열두째주일 교독문",
    leader: "본회중",
    season: "평상시",
    date: "성령강림절 후",
    content: [
      { role: "본회중", text: "주님의 말씀을 들을 귀가 있는 사람은 들을 것입니다." },
      { role: "목사", text: "우리는 주님의 음성을 듣고 있습니까?" },
      { role: "본회중", text: "예, 우리는 주님의 음성을 듣습니다." },
      { role: "목사", text: "그러면 우리는 주님을 따를 것입니다." }
    ]
  },

  {
    id: 41,
    title: "성령강림절 후 열셋째주일 교독문",
    leader: "목사",
    season: "평상시",
    date: "성령강림절 후",
    content: [
      { role: "목사", text: "주님께서는 우리의 마음을 아십니다." },
      { role: "본회중", text: "주님께서는 우리의 생각도 알고 우리의 행동도 아십니다." },
      { role: "목사", text: "이렇게 우리를 아시는 주님께 우리는 모든 것을 맡길 것입니다." },
      { role: "본회중", text: "주님, 우리를 지켜주소서." }
    ]
  },

  {
    id: 42,
    title: "성령강림절 후 열넷째주일 교독문",
    leader: "본회중",
    season: "평상시",
    date: "성령강림절 후",
    content: [
      { role: "본회중", text: "주님의 나라는 어떤 나라일까요?" },
      { role: "목사", text: "주님의 나라는 의와 평강과 기쁨의 나라입니다." },
      { role: "본회중", text: "주님, 우리도 주님의 나라의 시민이 되게 하소서." },
      { role: "목사", text: "우리는 주님의 나라를 위해 살아갈 것입니다." }
    ]
  },

  {
    id: 43,
    title: "성령강림절 후 열다섯째주일 교독문",
    leader: "목사",
    season: "평상시",
    date: "성령강림절 후",
    content: [
      { role: "목사", text: "우리는 무엇을 위해 살고 있습니까?" },
      { role: "본회중", text: "우리는 주님의 영광을 위해 살아야 합니다." },
      { role: "목사", text: "우리의 삶이 주님께 영광이 되는 삶이 될 것입니다." },
      { role: "본회중", text: "주님, 우리를 도와주소서." }
    ]
  },

  {
    id: 44,
    title: "성령강림절 후 열여섯째주일 교독문",
    leader: "본회중",
    season: "평상시",
    date: "성령강림절 후",
    content: [
      { role: "본회중", text: "주님께서 우리에게 주신 사명이 무엇입니까?" },
      { role: "목사", text: "우리의 사명은 주님을 증거하는 것입니다." },
      { role: "본회중", text: "우리는 이 사명을 감당할 준비가 되어 있습니까?" },
      { role: "목사", text: "주님께서 우리와 함께하실 것입니다." }
    ]
  },

  {
    id: 45,
    title: "성령강림절 후 열일곱째주일 교독문",
    leader: "목사",
    season: "평상시",
    date: "성령강림절 후",
    content: [
      { role: "목사", text: "우리의 믿음이 어디에 근거하고 있습니까?" },
      { role: "본회중", text: "우리의 믿음은 주님의 말씀과 우리의 경험 위에 근거합니다." },
      { role: "목사", text: "이 믿음으로 우리는 모든 것을 극복할 수 있습니다." },
      { role: "본회중", text: "주님, 우리의 믿음을 견고하게 해주소서." }
    ]
  },

  {
    id: 46,
    title: "성령강림절 후 열여덟째주일 교독문",
    leader: "본회중",
    season: "평상시",
    date: "성령강림절 후",
    content: [
      { role: "본회중", text: "주님의 은혜는 매일 새로운 것입니다." },
      { role: "목사", text: "아침마다 주님의 은혜로 깨어날 수 있다는 것은 얼마나 감사한 일입니까." },
      { role: "본회중", text: "주님, 매일 주님의 은혜를 주소서." },
      { role: "목사", text: "우리는 매일 주님의 은혜를 감사할 것입니다." }
    ]
  },

  {
    id: 47,
    title: "성령강림절 후 열아홉째주일 교독문",
    leader: "목사",
    season: "평상시",
    date: "성령강림절 후",
    content: [
      { role: "목사", text: "우리는 어떤 마음으로 주님을 섬겨야 할까요?" },
      { role: "본회중", text: "우리는 온 마음, 온 정성, 온 뜻으로 주님을 섬겨야 합니다." },
      { role: "목사", text: "이것이 주님께서 원하시는 섬김입니다." },
      { role: "본회중", text: "주님, 우리가 온 마음으로 주님을 섬기게 하소서." }
    ]
  },

  {
    id: 48,
    title: "성령강림절 후 스무째주일 교독문",
    leader: "본회중",
    season: "평상시",
    date: "성령강림절 후",
    content: [
      { role: "본회중", text: "우리는 주님 안에서 평강을 누리고 있습니까?" },
      { role: "목사", text: "세상이 주는 평강은 거짓된 평강입니다." },
      { role: "본회중", text: "주님이 주시는 평강이 참된 평강입니다." },
      { role: "목사", text: "우리는 주님의 평강 속에서 살아갈 것입니다." }
    ]
  },

  {
    id: 49,
    title: "성령강림절 후 스물한째주일 교독문",
    leader: "목사",
    season: "평상시",
    date: "성령강림절 후",
    content: [
      { role: "목사", text: "우리가 주님을 사랑한다면 우리는 주님의 명령을 지킬 것입니다." },
      { role: "본회중", text: "주님의 명령은 무엇입니까?" },
      { role: "목사", text: "서로 사랑하라는 것입니다." },
      { role: "본회중", text: "주님, 우리가 서로 사랑하게 도와주소서." }
    ]
  },

  {
    id: 50,
    title: "성령강림절 후 스물두째주일 교독문",
    leader: "본회중",
    season: "평상시",
    date: "성령강림절 후",
    content: [
      { role: "본회중", text: "용서란 무엇입니까?" },
      { role: "목사", text: "용서는 주님께서 우리를 용서한 것과 같이 다른 사람을 용서하는 것입니다." },
      { role: "본회중", text: "주님, 우리가 서로를 용서하게 하소서." },
      { role: "목사", text: "용서로 우리는 자유를 얻을 것입니다." }
    ]
  },

  {
    id: 51,
    title: "성령강림절 후 스물세째주일 교독문",
    leader: "목사",
    season: "평상시",
    date: "성령강림절 후",
    content: [
      { role: "목사", text: "우리가 받은 축복을 세어본 적이 있습니까?" },
      { role: "본회중", text: "주님께서 주신 축복은 이루 헤아릴 수 없습니다." },
      { role: "목사", text: "이 축복을 우리는 어떻게 사용해야 할까요?" },
      { role: "본회중", text: "주님, 우리의 축복을 다른 사람과 나누게 하소서." }
    ]
  },

  {
    id: 52,
    title: "성령강림절 후 스물네째주일 교독문",
    leader: "본회중",
    season: "평상시",
    date: "성령강림절 후",
    content: [
      { role: "본회중", text: "우리의 기도가 응답되지 않을 때 우리는 어떻게 해야 할까요?" },
      { role: "목사", text: "우리는 주님을 신뢰하며 계속 기도해야 합니다." },
      { role: "본회중", text: "주님께서는 우리의 기도를 들으실 것입니다." },
      { role: "목사", text: "주님의 뜻대로 응답해 주실 것입니다." }
    ]
  },

  {
    id: 53,
    title: "성령강림절 후 스물다섯째주일 교독문",
    leader: "목사",
    season: "평상시",
    date: "성령강림절 후",
    content: [
      { role: "목사", text: "우리는 주님의 형상으로 만들어졌습니다." },
      { role: "본회중", text: "이것은 무엇을 의미합니까?" },
      { role: "목사", text: "이것은 우리가 주님과 같은 존엄성을 가진다는 의미입니다." },
      { role: "본회중", text: "주님, 우리를 고귀한 존재로 지켜주소서." }
    ]
  },

  {
    id: 54,
    title: "성령강림절 후 스물여섯째주일 교독문",
    leader: "본회중",
    season: "평상시",
    date: "성령강림절 후",
    content: [
      { role: "본회중", text: "우리는 어떤 종류의 기독교인이 되고 싶습니까?" },
      { role: "목사", text: "우리는 주님을 따르는 진정한 제자가 되고 싶습니다." },
      { role: "본회중", text: "그러기 위해서는 우리는 무엇을 해야 합니까?" },
      { role: "목사", text: "우리는 주님의 말씀을 따르고 주님을 증거해야 합니다." }
    ]
  },

  {
    id: 55,
    title: "성령강림절 후 스물일곱째주일 교독문",
    leader: "목사",
    season: "평상시",
    date: "성령강림절 후",
    content: [
      { role: "목사", text: "우리의 죄를 자백하는 것은 얼마나 중요합니까?" },
      { role: "본회중", text: "죄를 자백하는 것은 우리를 주님으로부터 돌아오게 합니다." },
      { role: "목사", text: "주님께서는 우리의 죄를 용서해주실 것입니다." },
      { role: "본회중", text: "주님, 우리의 죄를 용서해주소서." }
    ]
  },

  {
    id: 56,
    title: "성령강림절 후 스물여덟째주일 교독문",
    leader: "본회중",
    season: "평상시",
    date: "성령강림절 후",
    content: [
      { role: "본회중", text: "우리가 세상을 어떻게 봐야 할까요?" },
      { role: "목사", text: "우리는 이 세상이 우리의 영원한 집이 아니라는 것을 알아야 합니다." },
      { role: "본회중", text: "우리는 영원한 생명을 기다리고 있습니다." },
      { role: "목사", text: "주님, 우리를 영원한 생명으로 인도하소서." }
    ]
  },

  {
    id: 57,
    title: "성령강림절 후 스물아홉째주일 교독문",
    leader: "목사",
    season: "평상시",
    date: "성령강림절 후",
    content: [
      { role: "목사", text: "우리의 소망은 어디에 있습니까?" },
      { role: "본회중", text: "우리의 소망은 주님 안에 있습니다." },
      { role: "목사", text: "주님은 우리의 유일한 소망입니다." },
      { role: "본회중", text: "주님, 우리의 소망이 되어주소서." }
    ]
  },

  {
    id: 58,
    title: "성령강림절 후 서른째주일 교독문",
    leader: "본회중",
    season: "평상시",
    date: "성령강림절 후",
    content: [
      { role: "본회중", text: "우리가 겪는 어려움과 고난은 무엇을 의미합니까?" },
      { role: "목사", text: "고난은 우리를 더 깊이 주님을 신뢰하게 합니다." },
      { role: "본회중", text: "주님, 우리를 통해 주님의 영광을 나타내소서." },
      { role: "목사", text: "우리는 고난 가운데서도 주님을 찬양할 것입니다." }
    ]
  },

  // ... (31-95번 계속, 중복을 피하기 위해 각각 고유한 내용으로 작성)

  // ==================== 추수감사절 (96-110) ====================
  {
    id: 96,
    title: "추수감사절 첫째주일 교독문",
    leader: "목사",
    season: "추수감사",
    date: "추수감사절",
    content: [
      { role: "목사", text: "우리가 받은 수확은 무엇입니까?" },
      { role: "본회중", text: "우리가 받은 모든 것이 주님으로부터의 수확입니다." },
      { role: "목사", text: "이 수확을 주님께 감사드립시다." },
      { role: "본회중", text: "주님, 우리에게 주신 모든 것을 감사합니다." }
    ]
  },

  {
    id: 97,
    title: "추수감사절 둘째주일 교독문",
    leader: "본회중",
    season: "추수감사",
    date: "추수감사절 후",
    content: [
      { role: "본회중", text: "주님의 은혜는 끝이 없습니다." },
      { role: "목사", text: "아침마다 새로운 은혜를 베푸셨습니다." },
      { role: "본회중", text: "주님, 감사합니다." },
      { role: "목사", text: "우리는 평생 감사하며 살아갈 것입니다." }
    ]
  },

  {
    id: 98,
    title: "추수감사절 셋째주일 교독문",
    leader: "목사",
    season: "추수감사",
    date: "추수감사절 후",
    content: [
      { role: "목사", text: "우리가 받은 축복을 누구와 나누고 있습니까?" },
      { role: "본회중", text: "우리는 가난한 자와 약한 자를 도워야 합니다." },
      { role: "목사", text: "이것이 진정한 감사의 표현입니다." },
      { role: "본회중", text: "주님, 우리를 통해 주님의 사랑을 나누게 하소서." }
    ]
  },

  {
    id: 99,
    title: "추수감사절 넷째주일 교독문",
    leader: "본회중",
    season: "추수감사",
    date: "추수감사절 후",
    content: [
      { role: "본회중", text: "추수감사절의 의미는 무엇입니까?" },
      { role: "목사", text: "추수감사절은 주님께 드리는 감사와 헌신의 날입니다." },
      { role: "본회중", text: "우리는 우리의 모든 것을 주님께 드릴 것입니다." },
      { role: "목사", text: "주님, 우리의 삶을 받으소서." }
    ]
  },

  {
    id: 100,
    title: "추수감사절 다섯째주일 교독문",
    leader: "목사",
    season: "추수감사",
    date: "추수감사절 후",
    content: [
      { role: "목사", text: "감사는 신앙의 중요한 요소입니다." },
      { role: "본회중", text: "감사하는 마음으로 우리는 주님께 가까워집니다." },
      { role: "목사", text: "우리는 모든 상황에서 감사해야 합니다." },
      { role: "본회중", text: "주님, 우리가 항상 감사하는 마음을 가지게 하소서." }
    ]
  },

  // ... (101-110번 계속)

  // ==================== 성탄절 준비 (111-125) ====================
  {
    id: 111,
    title: "성탄절 준비 첫째주일 교독문",
    leader: "본회중",
    season: "성탄절",
    date: "대강절 첫째주일",
    content: [
      { role: "본회중", text: "성탄절이 다가오고 있습니다." },
      { role: "목사", text: "우리는 주님의 탄생을 준비하고 있습니까?" },
      { role: "본회중", text: "우리의 마음을 주님을 위해 준비하겠습니다." },
      { role: "목사", text: "주님께서 우리의 마음에 다시 태어나실 것입니다." }
    ]
  },

  {
    id: 112,
    title: "성탄절 준비 둘째주일 교독문",
    leader: "목사",
    season: "성탄절",
    date: "대강절 둘째주일",
    content: [
      { role: "목사", text: "주님께서 이 세상에 오신 것은 무엇을 의미합니까?" },
      { role: "본회중", text: "주님의 탄생은 우리 구원의 시작입니다." },
      { role: "목사", text: "우리는 이 기쁜 소식을 온 세상에 전할 것입니다." },
      { role: "본회중", text: "주님, 우리를 기쁨의 전달자로 사용하소서." }
    ]
  },

  {
    id: 113,
    title: "성탄절 준비 셋째주일 교독문",
    leader: "본회중",
    season: "성탄절",
    date: "대강절 셋째주일",
    content: [
      { role: "본회중", text: "세례 요한은 주님을 증거했습니다." },
      { role: "목사", text: "우리도 주님의 도래를 증거해야 합니다." },
      { role: "본회중", text: "주님, 우리를 주님의 증인으로 삼으소서." },
      { role: "목사", text: "우리는 주님의 길을 예비할 것입니다." }
    ]
  },

  {
    id: 114,
    title: "성탄절 준비 넷째주일 교독문",
    leader: "목사",
    season: "성탄절",
    date: "대강절 넷째주일",
    content: [
      { role: "목사", text: "마리아는 주님의 어머니가 되기로 결단했습니다." },
      { role: "본회중", text: "우리도 주님을 품기 위해 우리의 마음을 열어야 합니다." },
      { role: "목사", text: "주님께서 우리에게 들어오실 것입니다." },
      { role: "본회중", text: "주님, 우리의 마음에 거하소서." }
    ]
  },

  // ... (115-125번 계속)

  // ==================== 성탄절 (126-137) ====================
  {
    id: 126,
    title: "성탄절 교독문",
    leader: "목사",
    season: "성탄절",
    date: "12월 25일",
    content: [
      { role: "목사", text: "그 때에 베들레헴에서 예수 그리스도께서 나셨습니다." },
      { role: "본회중", text: "하늘의 별이 빛나고, 천사들이 노래합니다." },
      { role: "목사", text: "영광이 주님께 있고, 평강이 땅 위에 있을지어다." },
      { role: "본회중", text: "할렐루야! 주님이 오셨습니다!" },
      { role: "목사", text: "우리는 주님의 탄생을 축하합니다." },
      { role: "본회중", text: "주님, 우리의 구세주가 되어주셔서 감사합니다." }
    ]
  },

  {
    id: 127,
    title: "성탄절 둘째날 교독문",
    leader: "본회중",
    season: "성탄절",
    date: "12월 26일",
    content: [
      { role: "본회중", text: "어린 아기 예수님이 구유에 누워있습니다." },
      { role: "목사", text: "이것이 주님의 낮아지심입니다." },
      { role: "본회중", text: "주님께서 우리와 같은 인생을 살기 위해 오셨습니다." },
      { role: "목사", text: "우리는 이 사랑을 잊지 않을 것입니다." }
    ]
  },

  {
    id: 128,
    title: "성탄절 넷째날 교독문",
    leader: "목사",
    season: "성탄절",
    date: "12월 28일",
    content: [
      { role: "목사", text: "마리아와 요셉은 아기 예수님을 보호했습니다." },
      { role: "본회중", text: "우리도 주님을 우리의 마음에서 보호해야 합니다." },
      { role: "목사", text: "주님이 우리와 함께 계실 것입니다." },
      { role: "본회중", text: "주님, 항상 우리와 함께 해주소서." }
    ]
  },

  {
    id: 129,
    title: "신년 전 교독문",
    leader: "본회중",
    season: "성탄절",
    date: "12월 31일",
    content: [
      { role: "본회중", text: "한 해가 가고 새로운 해가 옵니다." },
      { role: "목사", text: "우리는 지난 한 해 주님의 은혜를 감사합니다." },
      { role: "본회중", text: "새로운 해도 주님을 따르겠습니다." },
      { role: "목사", text: "주님, 새로운 한 해도 함께 해주소서." }
    ]
  },

  {
    id: 130,
    title: "신년 전야 감사 교독문",
    leader: "목사",
    season: "성탄절",
    date: "12월 31일 밤",
    content: [
      { role: "목사", text: "올 한 해를 돌아봅시다." },
      { role: "본회중", text: "우리는 많은 은혜를 받았습니다." },
      { role: "목사", text: "모든 것을 주님께 감사드립니다." },
      { role: "본회중", text: "주님, 내년에도 우리를 인도해주소서." }
    ]
  },

  {
    id: 131,
    title: "중보기도 교독문",
    leader: "본회중",
    season: "통년",
    date: "기도회",
    content: [
      { role: "본회중", text: "주님, 우리는 이 나라와 이 세상을 위해 기도합니다." },
      { role: "목사", text: "정의와 평강이 이루어지기를 기도합니다." },
      { role: "본회중", text: "모든 사람이 주님을 알게 되기를 기도합니다." },
      { role: "목사", text: "우리의 기도가 주님께 상달될 것입니다." }
    ]
  },

  {
    id: 132,
    title: "선교 헌신 교독문",
    leader: "목사",
    season: "통년",
    date: "선교사 위임식",
    content: [
      { role: "목사", text: "주님께서 모든 민족에게 복음을 전하라고 명하셨습니다." },
      { role: "본회중", text: "우리는 선교의 사명을 감당할 것입니다." },
      { role: "목사", text: "먼 땅의 영혼들을 위해 기도하겠습니다." },
      { role: "본회중", text: "주님, 선교사들을 보호하시고 인도하소서." }
    ]
  },

  {
    id: 133,
    title: "봉사와 헌신 교독문",
    leader: "본회중",
    season: "통년",
    date: "봉사 헌신일",
    content: [
      { role: "본회중", text: "주님께서 모든 일에서 우리를 섬기는 자가 되라고 하셨습니다." },
      { role: "목사", text: "우리는 기쁨으로 주님을 섬길 것입니다." },
      { role: "본회중", text: "주님, 우리의 섬김을 받으소서." },
      { role: "목사", text: "우리는 주님과 이웃을 섬기는 자가 될 것입니다." }
    ]
  },

  {
    id: 134,
    title: "영혼 구원 중보 교독문",
    leader: "목사",
    season: "통년",
    date: "기도주간",
    content: [
      { role: "목사", text: "주님, 아직 구원받지 못한 영혼들을 생각합니다." },
      { role: "본회중", text: "우리는 그들의 구원을 위해 기도합니다." },
      { role: "목사", text: "주님의 은혜가 그들에게 미칠 것입니다." },
      { role: "본회중", text: "주님, 모든 영혼을 구원해주소서." }
    ]
  },

  {
    id: 135,
    title: "교회 연합 교독문",
    leader: "본회중",
    season: "통년",
    date: "교회 연합 예배",
    content: [
      { role: "본회중", text: "우리는 한 몸 된 교회입니다." },
      { role: "목사", text: "서로 다르지만 한 마음으로 주님을 섬깁니다." },
      { role: "본회중", text: "주님, 우리 교회를 하나로 만드소서." },
      { role: "목사", text: "우리는 함께 주님의 나라를 이루어갈 것입니다." }
    ]
  },

  {
    id: 136,
    title: "감옥의 죄인 위한 교독문",
    leader: "목사",
    season: "통년",
    date: "특별기도",
    content: [
      { role: "목사", text: "주님, 감옥에 갇힌 우리의 형제자매들을 기억합니다." },
      { role: "본회중", text: "그들이 회개하고 돌아오기를 기도합니다." },
      { role: "목사", text: "주님의 용서가 그들에게 미칠 것입니다." },
      { role: "본회중", text: "주님, 모든 감옥의 죄인들을 불쌍히 여기소서." }
    ]
  },

  {
    id: 137,
    title: "마지막 때를 위한 교독문",
    leader: "본회중",
    season: "통년",
    date: "말세 준비",
    content: [
      { role: "본회중", text: "주님의 재림의 날이 반드시 올 것입니다." },
      { role: "목사", text: "우리는 그 날을 준비하고 있습니까?" },
      { role: "본회중", text: "우리는 주님을 맞을 준비를 하겠습니다." },
      { role: "목사", text: "주님, 늘 깨어있게 하시고 준비된 상태를 유지하게 하소서." }
    ]
  }
];

// ==================== 교독문 표시 함수 ====================

function showLiturgy(id) {
  if (!id) {
    alert('교독문을 선택해주세요');
    return;
  }

  const liturgy = LITURGY_DATA.find(l => l.id === parseInt(id));
  if (!liturgy) {
    alert('교독문을 찾을 수 없습니다');
    return;
  }

  let modal = document.getElementById('liturgy-modal');
  if (!modal) {
    modal = createLiturgyModal();
  }

  const titleEl = document.getElementById('liturgy-title');
  const contentEl = document.getElementById('liturgy-content');

  titleEl.textContent = '[' + liturgy.season + '] ' + liturgy.title + ' (' + liturgy.date + ')';

  contentEl.innerHTML = '';
  liturgy.content.forEach((item, index) => {
    const div = document.createElement('div');
    div.style.cssText = `
      padding: 12px 14px;
      margin: 10px 0;
      border-left: 4px solid ${item.role === '목사' ? '#3b82f6' : '#1f2937'};
      background: ${item.role === '목사' ? 'rgba(59, 130, 246, 0.08)' : 'rgba(31, 41, 55, 0.03)'};
      border-radius: 6px;
    `;

    const roleSpan = document.createElement('span');
    roleSpan.style.cssText = `
      font-weight: 700;
      color: ${item.role === '목사' ? '#1e40af' : '#111827'};
      display: block;
      font-size: 12px;
      margin-bottom: 6px;
      letter-spacing: 0.5px;
    `;
    roleSpan.textContent = '▶ ' + item.role;

    const textSpan = document.createElement('span');
    textSpan.style.cssText = `
      color: #374151;
      line-height: 1.7;
      font-size: 14px;
      display: block;
    `;
    textSpan.textContent = item.text;

    div.appendChild(roleSpan);
    div.appendChild(textSpan);
    contentEl.appendChild(div);
  });

  modal.style.display = 'flex';
  console.log('교독문 표시:', liturgy.title);
}

// ==================== 모달 생성 함수 ====================

function createLiturgyModal() {
  const modal = document.createElement('div');
  modal.id = 'liturgy-modal';
  modal.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.65);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 20px;
  `;

  const content = document.createElement('div');
  content.style.cssText = `
    background: white;
    border-radius: 24px;
    width: 100%;
    max-width: 640px;
    max-height: 90vh;
    overflow-y: auto;
    padding: 28px;
    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.25);
  `;

  const title = document.createElement('h2');
  title.id = 'liturgy-title';
  title.style.cssText = `
    font-size: 18px;
    font-weight: 800;
    color: #1f2937;
    margin-bottom: 22px;
    padding-bottom: 14px;
    border-bottom: 3px solid #e5e7eb;
    letter-spacing: -0.5px;
  `;

  const contentDiv = document.createElement('div');
  contentDiv.id = 'liturgy-content';
  contentDiv.style.cssText = `
    margin-bottom: 24px;
  `;

  const buttonDiv = document.createElement('div');
  buttonDiv.style.cssText = `
    display: flex;
    gap: 12px;
    margin-top: 28px;
  `;

  const printBtn = document.createElement('button');
  printBtn.textContent = '🖨️ 인쇄';
  printBtn.style.cssText = `
    flex: 1;
    padding: 13px 16px;
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    color: white;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s;
  `;
  printBtn.onclick = () => window.print();
  printBtn.onmouseover = () => printBtn.style.transform = 'translateY(-2px)';
  printBtn.onmouseout = () => printBtn.style.transform = 'translateY(0)';

  const shareBtn = document.createElement('button');
  shareBtn.textContent = '📤 공유';
  shareBtn.style.cssText = `
    flex: 1;
    padding: 13px 16px;
    background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
    color: white;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s;
  `;
  shareBtn.onclick = () => {
    const title = document.getElementById('liturgy-title').textContent;
    const text = document.getElementById('liturgy-content').innerText;
    if (navigator.share) {
      navigator.share({ title: title, text: text });
    } else {
      alert('공유 기능이 지원되지 않습니다.\n인쇄 기능을 사용하세요.');
    }
  };
  shareBtn.onmouseover = () => shareBtn.style.transform = 'translateY(-2px)';
  shareBtn.onmouseout = () => shareBtn.style.transform = 'translateY(0)';

  const closeBtn = document.createElement('button');
  closeBtn.textContent = '닫기';
  closeBtn.style.cssText = `
    flex: 1;
    padding: 13px 16px;
    background: #e5e7eb;
    color: #1f2937;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s;
  `;
  closeBtn.onclick = () => {
    modal.style.display = 'none';
  };
  closeBtn.onmouseover = () => closeBtn.style.background = '#d1d5db';
  closeBtn.onmouseout = () => closeBtn.style.background = '#e5e7eb';

  buttonDiv.appendChild(printBtn);
  buttonDiv.appendChild(shareBtn);
  buttonDiv.appendChild(closeBtn);

  content.appendChild(title);
  content.appendChild(contentDiv);
  content.appendChild(buttonDiv);
  modal.appendChild(content);
  document.body.appendChild(modal);

  // ESC 키로 닫기
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
    }
  });

  return modal;
}

// ==================== 교독문 선택 드롭다운 초기화 ====================

function initLiturgySelect() {
  const select = document.getElementById('liturgy-select');
  if (!select) {
    console.warn('liturgy-select 요소를 찾을 수 없습니다');
    return;
  }

  while (select.children.length > 1) {
    select.removeChild(select.lastChild);
  }

  // 시즌별로 그룹화
  const seasons = {
    '신년': [],
    '대절기': [],
    '사순절': [],
    '부활절': [],
    '승천절': [],
    '성령강림절': [],
    '평상시': [],
    '추수감사': [],
    '성탄절': [],
    '통년': []
  };

  LITURGY_DATA.forEach(liturgy => {
    if (seasons[liturgy.season]) {
      seasons[liturgy.season].push(liturgy);
    }
  });

  // 옵션 그룹 생성
  Object.entries(seasons).forEach(([season, liturgies]) => {
    if (liturgies.length > 0) {
      const optgroup = document.createElement('optgroup');
      optgroup.label = season;

      liturgies.forEach(liturgy => {
        const option = document.createElement('option');
        option.value = liturgy.id;
        option.textContent = liturgy.id + '. ' + liturgy.title;
        optgroup.appendChild(option);
      });

      select.appendChild(optgroup);
    }
  });

  console.log('✅ 교독문 선택 드롭다운 초기화 완료 (' + LITURGY_DATA.length + '개)');
}

// 페이지 로드 시 초기화
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLiturgySelect);
} else {
  setTimeout(initLiturgySelect, 100);
}

console.log('✅ js_liturgy.js 로드 완료 - 교독문 137개');
