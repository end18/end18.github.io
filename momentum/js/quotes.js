const quotes = [
    {
        quote : "벗김 없이 야한것이 진짜 야함이다",
        author : "아카네 리제"
    },
    {
        quote : "뭘 보노?",
        author : "아야츠지 유니"
    },
    {
        quote : "복수라는 것은 50배로 돌려주는 것이다.",
        author : "시라유키 히나"
    },
    {
        quote : "유니 비질게",
        author : "아야츠지 유니"
    },
    {
        quote : "불행이란 행복에서 오는것이다.",
        author : "시라유키 히나"
    },
    {
        quote : "한개의 장난감만 가지고 놀수는 없는 법이다.",
        author : "시라유키 히나"
    },
    {
        quote : "싸움도 못해 보이는데 함부로 선배라 하지 마라",
        author : "하나코 나나"
    },
    {
        quote : "국가에 도움이 되지 않는 것들은 모두 척결 대상이다.",
        author : "네네코 마시로"
    },
    {
        quote : "용사라는 것은 누군가는 죽였다는 것이다.",
        author : "유즈하 리코"
    },
    {
        quote : "평화협정은 겁쟁이들의 변명이다.",
        author : "네니코 마시로"
    },
    {
        quote : "경찰이 있어야 범죄에 가치가 생긴다.",
        author : "시라유키 히나"
    },                                    
    {
        quote : "팬티는 빨아 입는 것이 아니라 배민에서 배달시켜 입는 것이다",
        author : "아라하시 타비"
    },
    {
        quote : "우리는 모두 사람이기에 후회를 한다",
        author : "시라유키 히나"
    },
    {
        quote : "머리를 노린 것도 잘했어, 제일 약한 돌로 여러번 찍은 것도 잘했어",
        author : "시라유키 히나"
    },
    {
        quote : "어리다는 것은 문제가 아니다 키워먹으면 되지 때문이다",
        author : "아라하시 타비"
    },
    {
        quote : "날 이기려고 하지마",
        author : "아야츠지 유니"
    },
    {
        quote : "나는 가치가 없는 사람에게 복수하지 않는다.",
        author : "시라유키 히나"
    },
    {
        quote : "번개가 쳐도 네 소신대로 가라, 번개를 맞더라도 꿋꿋히 나아가라, 그것이 노력이다.",
        author : "시라유키 히나"
    },
    {
        quote : "죽이는 것은 의미 없다, 가장 소중한 것을 부숴야 한다.",
        author : "시라유키 히나"
    },
    {
        quote : "핵폭탄에는 더 많은 핵폭탄으로",
        author : "네네코 마시로"
    },
    {
        quote : "눈을 감고 인생의 뒤를 돌아봐",
        author : "시라유키 히나"
    },
    {
        quote : "참지마, 싸버려",
        author : "아이리 칸나"
    },
    {
        quote : "나는 매주 교회를 다녔다, 하지만 신을 믿은 적은 없다.",
        author : "아라하시 타비"
    },
    {
        quote : "내일의 일은 내일의 내가 하는 것이다.",
        author : "텐코 시부키"
    },
    {
        quote : "거기 있어봐, 누가 굴려주나. 인생은 스스로 굴리는 거야.",
        author : "시라유키 히나"
    },
    {
        quote : "남을 짖밟는 것, 그것이 인생이다",
        author : "시라유키 히나"
    },
    {
        quote : "뭘 주는 지는 죽여봐야 알 수 있다.",
        author : "시라유키 히나"
    },
    {
        quote : "야동 보는 계정으로 팔로우 하지 말라",
        author : "아야츠지 유니"
    },
    {
        quote : "난 양심이 성감대야",
        author : "아카네 리제"
    },
    {
        quote : "엄마가 요리할 줄 아는데 내가 왜 요리를 해야해?",
        author : "시라유키 히나"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = "\"" + todaysQuote.quote + "\"" ;
author.innerText = "-" + todaysQuote.author;