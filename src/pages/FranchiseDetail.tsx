import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

// Move the franchises array to a separate file for reusability
const franchises = [
  {
    id: 1,
    title: "Final Fantasy",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAABZVBMVEX///8AAACUk5RycXCmpqb8/PzR0dE0NDSdnZ2wsLA8PDwNDQ2Cf3zLy8v5+fmLi4vg4ODx8fEARH5+fn7BwcFFRUXr6+sAP3VtbW23t7dPT0+MjIwAO3L0+fzW1tZ3d3dcXFwsLCwVFRUAdrfL3ekjIyPs9foAf8Pa6vNkZGS0tLS8zt2goKAkIBsAUYkBSoJBWILK5fUAkNSIxefc7faczOmq1e3h8Pe/3O0Ai8hTpNKVwt9vr9WCuNoAcrjG2+iuyd0AXJ2Oss2jvNEASopJdZ+4x9cAPH29xMwAJGwALWwANG6SpLkAKGUAHl7A4/Qzpd4AjNJet+I9o9chldClzOZhq9YaiMIAbrh2rtRYn8wAfblBkME1ib0Abq5insZ3n8IAYJ5Yj7cAQo0ma5+ZutFtkrdEdKNYgqmGp8MjYJIAHWpbeZ5wiKohUoOqt8qOnLIAA1xKa5BsfZuapbczS3YADFQ5fgulAAAVXUlEQVR4nO2ci1vayPrHJ2q8i1DUVWy8McbRdG0RSSIhTQoWrZd2Ww2ugoV6RIuniKvu/v2/dyYXgtV9zu+cp7Rr831WzY3JzCfvbSZ0EQoUKFCgQIECBQoUKFCgQIECBQoUKFCgQIECBQoUKFCgQIECBQoUKFCgQIEC2eK/PiS2vxc/tt65G8mvz/FyO3vyD9DqB2fjt8TXJ+WAVouEfcekkh/uOfthta2d+dElrqzYQD4kUl+fTew/+Ll7YtyjkCAnU7KcEJpHwOXEZIoeUVPMpBIfVHQfmN8ecET5kZocn1xZSSflxDsA5g5R/PDb+5WV9x+Ssiwqsiwn5Q/J1Mo9ANQV+68T0JwrVpPC15c+Bql7KRgiv5pKgpGoyaRqj1NUfyskUikip+hpqBLe7d8HC63o7I9jYLanJh5r3Jctb5OA4yUQAZ9MJZNJmUci40Tef2CD/7Byn7kU3hP6x0HMYKn35M1HKDGp06En7B+B5T8hsbfPaN0bzFdX7AQgswJVpLBU/t09Fz5GQaxPJiCRJVYdMykk5eTa3gea29KuZSUU73o1kV4pACiZHZJVZmNq27v93SRaspqUSSID+TFR2Ctk5My+SscvO4wKLW6WeJ8Gu2MOi/YQUoiVbIX1yJ1SSBL5XUJVBFVPLqytpdcg1MOQV9Ps7H4rC72wklolKoWVgvgnv1tY2POfJ4+0iHClo1SCqDKL3Im9tff7ygdBEZCg0mJ+T3cvs8tOFSX1RAYlMokUPSPvW8hSfI3dM6d8TFI0SIgCSdpD1vSEmmThW4YtpC94aw12gQC7a6osKASJ1B3FNdpCszH1sZYRIF7VM/tIJRqYTZJFm1WrkLGrg3d6OikuNHNiWuDtsn8vLauqmAJYq9r+WmuDj7U8Bcma+G5hjciJFBgMbwEkkrBEVZYtHiLSfjqztn/oXZxYWLPYuoO2oMoL+3LKWk2vkdZFLvI4MqPw9UxX1cAMMkXIbgk+JasasmCeIyYUktlbUCGOoXRqraA3rwdvI7SoVRb2gaKa0tNrmTs3kR/JAuHdYCLqsmLpa8W1tCzIMIG2RECh8KK8hlEqU0AQ8LWUtqd5HyCWplkZWo3pxWJxz7Ks0t6dNh/NgpfQOhBZ5tMLCwsw7IyVSKcXMimRrCYIkbW9vUJa0AmxEEmpB0eI5UGIbRbhhbTG/GxNS6uqVly7E6ASCdKu0Xxr8TJ2XVHVdL1UjBcLmqUdFA7VQjGeSYCdHcpyoaBrhfSemkJaYtVCWpFdnlF5xBMFq2nmZwtqOq0uLODWGyiKhR6PVtO6rlvgTbJ+EI8f2bNh8jtMWA4si2ikoBf29YKWSeulowKYoq4qSEPCIdTwPCGKoamJBURtNG6hQqZ0Jz4JCeNxpUJLT2gH+lHx5YHmDlWJ60cqsVTVPMiUtIKlYAvsTitRK1F1K6PpJsFqQj1c+N1a1Q/AQvVSHCbgxt3EpwqPxgkd8aZ+VDrS/A4UP9Q1TSdaqQAmJmiyomh6QbQOCC1AeZLKZFRLK718eSSq6mEcPqDGF4r6QTGutLSs/hQT6lJRPYrHf2emhOOqdoDUTMZEgE3TCBLAtNJaKX5giBax4nETkVK8VHwJAa8FFuZ/BlYQw4+Lx7pKfQi/PIaghgjQ0UKyKkLuUzOmqmkvNaSqJFNQ4/HjePwgbQm6nvGvL2BBfSQl1t9LKh3E7Todv4SQpEOUhqiEIb5h89gqljW9VBaIpWgZyHZq8eXLIr2Eb3lpTRTlpzAsmDp/dGBZh6qhQzgTsVkoH2plrXBwfGgeZjBvGWYaaNAKdVX5uolVgh5T1fA3EjP60ceXJauZ9wWED8vx8pGmlY+sTFkwZPWYwdDvb0EhyGxHT38AmXqmWIzHD4+9oGNmS/Hj4lH5sFwqZzRRxnrGJnk/LBGDG7anr99bikG08vHHeLHomwaq6lFZ17GmHhnEImU3Hh3e995ZJEh5wOQen0zLMnSj+PHQ9B2ULD1jHpUNjE1y5JnNIcEE1PJxsKtD46fIhFRZS0MaTIs/lpXmQg4+KmeN8qGhqviwGcw0UwV8xF+8i8ZPE6+odEhyIsafPr4yBY9CqXRY1EpZAunRdylMfBSR5/GhVnXMSzBQts39/a4SEYH0V/wolT5+VIyKSY+Zr7Tq8ceSqPlYCWI1bmC69CAiA1XtYwbSfhoXtMUTxAvK8SeI8q+O6QHxU1kD76yqRtn2QQGrpoFFXlAxXS+Fgp3ZE7CSpO/Y8e8n0bTMT0UG5+QV5ECtLGZN5pem6Vt8YVGNmDTo8wZsfIee/gBSVknp+LgM9lI5/YSwaWaJZUI9L5nNgoHnQyG2J0HMUkwkVr9bd7+r8DE+Lh+b5Wz2xDwtEkSypkSqhJgCEgRBpDUCMUwNKgfFBAlI0RD/k7JCRtXE+olRPT0tlz9+5BEhkinmDiGcOTNmHmehbjBEqNZFI4tE+M/8vl3+rxTiPdFd36a7MsAj3yKBe+6O8MnxiWGUK9Xyyafjc1GBehRnoWnito1x9bCYJaJIpGIW0iTGPv/8z3o60tsVbvbC3+m2aZzzNAm7fWyri50apZu9aBJ+zzlXR2Hb6XEPu3KEbuJqCfzPNCvVysmrc1x7JWFSlVC42TSHj82KgGZgS3r16hBi2TA9uogm6J8x2siEd+28c7Ne2J5y+xkeoKeizW5wMzH6u/vbI/Kpw+tkB90dZmOwRQ9OM2hulxab/Y/Mw/Y43cJmNlsTDalSyZrKp5qEzo6NLEQpQWjCiuAcsgFL5xXeqGRxP2yPIjTNcX2svaWvYEXdh+H2xXuM7DnyyOXcPlFbGu7ud2F1N3vExhZj43Evpp0ccrZ7nedKMK6YNSNbk7CUNaSTE7C0LMECVFW0gakuBgvRypRaR9gUjBOetcrN8ajLNdU+D9aAcwP6ZJac7RF6s06Glwo+NcCjAa7/m6L5Wn2MDv8QLK4FFj0y4Wz32uAUIkrkxFREiEciKZvmCZSgsEWQSOgjEJUJBksxq4T5TblyLJKqyVwp1IQFG/NzHNfDeXeL+bpCYwEjFmK7Q2wLXPHbsvlKNizqBf8BLBiN4zUeLAGZRulEymUNgkklZ0q5E4J5URCkKnM1ntljWDIVgcGaqnzK1l7962SQY/GPwcJ2c0vg2UsD3t36Wci0BaF1Fk05JopYOBwLgUt8ez4tcmChh2CFfbAi9MAzZ8eBxZuKRIsnalhQcIakioghwRmEGKwBKCTgFhGCpFPaNjd0/ArCGo+pG3IjAoNlIBo7B0LwLIa8u/H0yUw6NwMr60djnGuG1BGmws2etksurOkHYA35YI15eQC5sAQTmXSadw6mJEnZqpQFWwsRia6/sAYg8mNqENlTnsFaqnxaN4gkMVh9NQargnK5DsgWYFUjI+7dQk5+YYrRcBVpphcKutsX/9skF9bIA7C6fLDC/v7bsEyEeYlA0YBEheRywukJFg1TpNiQY1nUD8cqn+wozT07kdYrgiEyWIMqwJrK5kgVYPUxWBH3bsyM3cTMLCvCeXkZPHtpwitj2iYX1tgDsIZ9sLr9/WfZkCCBCPgUI7CVWs2UTJSrZk9qpNkAhdXB5f8l5SqslOowUXY9WyMM1mKWwqrWlNPzDi4corDQvHM39mSc7Ecz4xwzbCcXw6d7n7W9cnBghaPoAViLPlhstDFnx4lZGOXQ+fppNicJ4EyiVD3BlazUbIBHvUMjXH6jgjH9BDdpvkafl08lFuBnWcwiBE4Oc1LuVwprxrkbzXhcj3MzmjtD4aZlQXUYpVHuW9O5IxtW9zwavR/WvA9Wn/9h27B4ujJM1i8goeHzz9I5hlxoSBJMFrEh2LBmnm1CzCKmXXgPQnUqra9XGCyOAKxuMUQ+S4OzVRtWh3M35rSzzs1o6TwFfZt28MBjGx/3ULZNNqyJWdTJ8vBXsDgfrF7/w3Yti/qZeX4OrLKn2bNaDmEoT6FSzefsOguNduW5MbOKxE768Rm4XNxYPrNhRZw6S6l0dp7ZsPq4Zse8eRYl19U36sUo6Gasn7XVVtmwhnvQxJLTCx+sAYgikSasKDfXOnUDy6KsJGN5HZm52sX5Z6OmiGf2BZJBYUUI15UfBLvK52Y4aG5UwYSsM1iw1+0WpdnxjnMb1pBztw52d8eSaGzvjzR7Dfuzc+5UsX2yYc25E4dWWPOzMJaoB2uRo8N3+u9Ylohxtio+X5bOcG0Zgk+OZ//UXqhV7DqLDHF9n7GB8udmD/14T3ZjfX35OcAagL0JgLV5+vn18ut8frnBYCGn/SjXM+cWoXY57580c/6Sr21isCa5B2DNQPejvgnI4kALrG78GfxNlIT1i+XPuPIm9xoyIrAaq9REZPvx2DzXVcmh3CkxwAc57tf8+vIyg8VBWd4Btw/nX29sbCwvbziwHC1ysdlmvhvxRUsq+tS8mVfb5Exg74c1B3OyZ1HfBCTafNjMsk6hzoKKXdrIVXAei2h57EwUBQm7DTAtSQjmQATK7ugAN5d/4sKCqD0Nt5+iyaF28aRC66whr2PwZPp9lRSl46tB6Sy7uYDTLv09LPCSaNQ3AZmc9frPYH02s/R9ROXsdR7VYAtgXQA+0W2Asw1g5wSAQpnUAazzG88B1meABSmtn1qWmIfC7GJjpxVWDzcd87neFNcMl8heSmp7mfX3sAZo1hn2TUB6+73+M1iVnEjn0p9rZ/mLczh4AWnQ/VcGgtLvwMp9hoM1OpeDqXKjTr2OwqLjp5bVaJwtL69vYL4FFjymRb8x0WXKXm+PdftbMXlQbD0r9gAsDgbYM+2bgPTFvP4zWKKkECwqF5dPNjbqcPC8+SoQS6x0WKIzQPry6wyqzBEKC+cM6SwLsMLzzBU3NzaePH/+5AKF7sDqHW8uaDnTH8+WRnx1RftEYfVFHoIFcWZuhmtOQEZmvLDKYNG6PYLRBYz2+SUcrO84n+Ul8C0KC006HzBhfGHw4iHICESsgXOPxViQ36QffvJEaIVFn8x0y7oCLUzdiSmb+sRQu2WXDqMPwKI/o1xzAtI97i1oMVikVsOYQBii44UyXrio5+lJIlVOschgTTmwMMS/CDQ3RfIQ1RgsqFJj1LKeP9m4AHdugUWfzLDf8exywZ3g0DWJtpdZDqxJty6/CwvgzHHNCcjUtFfdMFi4UgmH8SW1DaC1dVE/+/cTOBeSXl9gicHCxDVFsIwQHBkBWJJCV0qnnrHCFNzweYNe0AILnszQZMvyHmXnVQt0RWsStVvedMfWXVj2+wzv0rGo13+7KCW4Y7z29ImrrWWxhgWcy5/lBHc9a5TFnXwFhk6XVrpECUmErmdtsuV5gNWwW2yBRZ8M3LzT3Z/qWaQTaXefwmr3OqlvIm3rLqwJHyzoOx/14oZTwaPp6fyWy2r7C8rnv2Cx/uZNHUVECgsLMwALv96qD0JEjlHDpLCoZTU2WePhJ879WmDRJ9PrrbKHpumqI9ecWX9PWGOuSd8N8FM+WLTgGnbefzVh9QzWL5/+wrR9fZ1/s1UX69sVM4clZL996JsS6htPt69mYKSQH3oFqLlIDrLhkP1mceheWNRpn3lBnC5YLLE5jxO0vicsT3dhRXywFm23nLH3HFghLnrV2Gasnl7jrcunbxSpvpWDdCjYsMRcYxvObzdgakhD4DAZQ3lSpaUDoe8eue5r534tsAAP3+dNcex3iNFm1f4jwgohH6wY10Pfxjj9d2CFuWmlscVgbTXQ1tNfdmHUkCIxj/IsG6LLbTC8p1v5X7lFOtxpKMXyJAtbYcxeem9eOvdrgTUOTjviuV0nu9lwc8rzY8LqacKCir5n3uu/s0TTx0Wly6dMv2yi+vYvW3BOymMcObNLB1T/ZXtr+8VlA+aFdB1hBmBtKjVqWTtsUau77tyvBRa4HL3ZgP1tBlq+dyNfOvwxYXU2YXGO7D0Ka/MawvZgfYux2trB6Hbr6Rs4F9nBys61ZMNCVzcNQvJjzqepYW5G4HPc5pdnzLKeO3V5C6x553I7RnUyB/zhYXX4YfUPL7bAmviyOcsN3mxTVtuXDYy+gM+9aRBJUnZut6+ol5EwYl/9y0Pqi03G7JXWvGACrLFr9gWHobqzjtECCyx4eNyDNc1g+b798GPCmvBgRWj36GsE2zOYZb2AhGZb1vYb6RajF+TN9osrvDNWofNptvjXUPK0qMcAqy/fZS8dNEI5GrO+sNdF3irMHVjjbKXBtrphD5ZzwY8Jq9uDFaaTjyGv/8yy6vA7mn+7DWqEriL8Jar/+4ZcRepjKJy3F//yIvumbQOidV+d1uxgKw1EA/zmH5sPwmJPZso7awfIzubVPyaskAdriE4Lu1v6v0QXN6fx26fbuzsNdMULN0i4xjeh+s2Ly+0/dkYdsnk49wWMaiRP/S5CYdHYvvkUMuQDsNiTCXuWNMIccNQz6x8UFvJgjdD+TnHughZbVqYROtrY3d7e2fmCrpBwG2o06uh6d3t39zovsLc7jQiuN8Ykev2mOGHjc2BdXsX8sOh6VnezH31sacGOURHWLa65tOzODbsnm4s6314Ulm9qf7cotb+T5V455HvYNIyw7w0OXu3uXjV28+gW8bf5qx305e3WTYMWU7PUjvK3N+H8i916B8Uy4ofV/cvNcItlNUMSvXCCIXKyH31/v+TrKoUVRWhssWO8fe/wQ/TZznpvdnk6/Jht6s7b8nEHVqSfTs9ocmQv8ENuIQHZcPft1fW2gvJoU/oiAau3t7CNw2yq1EEkPrTzx014jk5Yxm3v2UR0Zavr6qbLD6ur6Vq0W1F2wOnMVEsl4XxhMYKmhmNd7TOtxZ7+/v6eGa+/87A7az8+2OqfD6Gunv5598r5CXp+nq5oRekHY7HR/tHem93dFze3MMIG/hIW6o23uzdkKvx2aHY0Fov10NdlV3/kY/1wbdfsKHx8aAyjadrakDQ02z/vwhphbdvZIzoLm0usM863dtgL6gH32rGZzs7OcXCB4Y72r2r9dxKurm7R7e2fb3fzf4Gx7JDrscgNvnq7+9fVzV9/1Tel2yvQDmpsX2OEr/JQcLHRbiL2/TWE/z/fVeCHRu6zoX/M/z6X/7NeRy9A5OZPETWEFxjtiGO3Vy+Yrm92/qR/b6T6i4YAB+n6PFujF2jUQg6xf5Amxzv/Bw0ODtKfwWn42zndOTgNvzqnB+8IDkzTy+AcPc803enb+Z803r4Kop/7x6t936Xp6vjHq+3feAgUKFCgQIECBQoUKFCgQIECBQoUKFCgQIECBQoUKFCgQIECBQoUKFCgQIECBQoUKFCgQIECBQoUKFCgQIECBQoUKFCgduv/AF/qRbdtwpmKAAAAAElFTkSuQmCC",
    description: "Final Fantasy (яп. ファイナルファンタジー Файнару Фантадзи:, Последняя фантазия) — серия компьютерных игр, созданная геймдизайнером Хиронобу Сакагути, а также торговая марка, основанная на этой серии и принадлежащая японской компании Square Enix (в прошлом Square). Основной составляющей торговой марки являются фэнтезийные и научно-фантастические ролевые игры, но, кроме этого, бренд Final Fantasy включает кинофильмы, аниме, журналы и другие сопутствующие товары. Первая игра серии разрабатывалась в 1987 году маленькой студией Square, состоявшей всего из нескольких человек и находившейся в тяжёлом материальном положении, а название серии намекает, что это был их последний шанс выстоять. Но выпущенный ими продукт оказался весьма успешным и привёл к появлению многих сиквелов. Ранние игры Final Fantasy были исключительно ролевыми (в японском понимании жанра), однако впоследствии под этим названием стали появляться тактические ролевые игры, ролевые игры с элементами экшн, массовые многопользовательские ролевые онлайн-игры и даже гонки.Номерные части Final Fantasy сюжетно не связаны друг с другом: действие игр происходит в разных вымышленных мирах и описывает приключения разных героев, при том, что некоторые элементы, такие как имена второстепенных персонажей, игровая механика и характерные музыкальные темы, часто остаются неизменными. Сюжет, как правило, повествует о группе молодых людей, которые объединились в команду для борьбы с великим злом и путешествуют ради спасения мира. За редким исключением, сюжет всех частей линеен: выбор игрока никак не влияет на его развитие. Все игры насыщены отсылками к истории, языкам и мифологии различных культур.Серии всегда сопутствовал коммерческий успех, на 2023 год совокупные продажи всех игр серии превысили 180 миллионов копий. В 2006 году торговой марке Final Fantasy за выдающиеся заслуги присудили премию Walk of Game, а в игровой Книге рекордов Гиннесса по состоянию на 2008 год зафиксированы семь мировых достижений. Серия славится, прежде всего, инновационными технологиями, передовыми разработками в области визуализации и музыки, широким использованием революционной для 1990-х годов технологии FMV, фотореалистичными моделями персонажей и оркестровыми саундтреками Нобуо Уэмацу. Играм Final Fantasy отводится центральная роль в популяризации традиционных японских ролевых игр на западе.",
    link: "/franchises/final-fantasy"
  },
  {
    id: 2,
    title: "Call of Duty",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREb9LOS26uwgk76EUEYQ1AZNOGzfvMtvxihw&s",
    description: "Популярная серия шутеров от первого лица, охватывающая различные военные конфликты от Второй мировой войны до футуристических сценариев.",
    link: "/franchises/call-of-duty"
  },
  {
    id: 3,
    title: "Alan Wake",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbhn:ANd9GcSMRJvKDCGk3PE4FaNltoC92otLxb7qf3505w&s",
    description: "Психологический триллер от Remedy Entertainment о писателе, сражающемся с темными силами в маленьком городке Брайт-Фоллс.",
    link: "/franchises/alan-wake"
  },
  {
    id: 4,
    title: "The Legend of Zelda",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/76/The_Legend_of_Zelda_Logo.png",
    description: "Легендарная серия приключенческих игр от Nintendo, следующая за героем по имени Линк в его квесте по спасению принцессы Зельды.",
    link: "/franchises/zelda"
  },
  {
    id: 5,
    title: "NieR и Drakengard",
    image: "https://i.ytimg.com/vi/ASpgNWtfJTM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCvLKmNhbTB3RuTqCYgQlvie_RuIA",
    description: "Серия от Ёко Таро, известная своими философскими сюжетами, необычным повествованием и уникальным сочетанием жанров.",
    link: "/franchises/nier-drakengard"
  },
  {
    id: 6,
    title: "Yakuza / Like a Dragon",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Yakuza_logo.jpg",
    description: "Серия боевиков от SEGA, сочетающая драматический сюжет о японской мафии с открытым миром и множеством побочных активностей.",
    link: "/franchises/yakuza"
  },
  {
    id: 7,
    title: "Halo",
    image: "https://images.seeklogo.com/logo-png/40/1/halo-logo-png_seeklogo-403346.png",
    description: "Научно-фантастическая серия шутеров от Microsoft, рассказывающая о войне человечества с инопланетным альянсом Ковенант.",
    link: "/franchises/halo"
  },
  {
    id: 8,
    title: "Resident Evil",
    image: "https://assets.xboxservices.com/assets/ff/f7/fff7298c-57ec-459c-a33b-fb0089aeddd6.jpg?n=MSXC-ResidentEvilTitle-HeroAndImageCard-large-l-794x447-16x9-01.jpg",
    description: "Культовая серия хорроров от Capcom, определившая жанр survival horror и рассказывающая о борьбе с биологическим оружием корпорации Umbrella.",
    link: "/franchises/resident-evil"
  },
  {
    id: 9,
    title: "Half-Life",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_kl5T9WUQAhfZQhbZx6M-H5yfnnB-sPjhHw&s",
    description: "Революционная серия шутеров от Valve, известная своим повествованием без катсцен и инновационным геймплеем.",
    link: "/franchises/half-life"
  },
  {
    id: 10,
    title: "Grand Theft Auto",
    image: "https://fabrikbrands.com/wp-content/uploads/Grand-Theft-Auto-Logo-1-1155x770.png",
    description: "Культовая криминальная серия с открытым миром от Rockstar Games, ставшая культурным феноменом и известная своей сатирой на американское общество.",
    link: "/franchises/gta"
  },
  {
    id: 11,
    title: "Assassin's Creed",
    image: "https://static.vecteezy.com/system/resources/previews/029/337/389/non_2x/assassin-s-creed-logo-free-vector.jpg",
    description: "Серия исторических боевиков от Ubisoft об извечной борьбе ассасинов и тамплиеров, разворачивающаяся в различных исторических эпохах.",
    link: "/franchises/assassins-creed"
  },
  {
    id: 12,
    title: "Red Dead Redemption",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRKm4bWxPrKHkYtEwR60QmsV4Co7LNieBJMQ&s",
    description: "Вестерн с открытым миром от Rockstar Games, повествующий о закате эпохи Дикого Запада и судьбах его обитателей.",
    link: "/franchises/red-dead-redemption"
  },
  {
    id: 13,
    title: "Minecraft",
    image: "https://fabrikbrands.com/wp-content/uploads/Minecraft-Logo-9-1200x750.png",
    description: "Феноменально популярная песочница от Mojang, позволяющая игрокам создавать и исследовать процедурно генерируемые миры из блоков.",
    link: "/franchises/minecraft"
  },
  {
    id: 14,
    title: "Sonic the Hedgehog",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbhn:ANd9GcTjFulvDHj4G98JSvBbJLRaoNg_GJFSC4aTGw&s",
    description: "Культовая серия платформеров от SEGA о сверхскоростном синем ежике, соперничающем с Nintendo's Mario.",
    link: "/franchises/sonic"
  },
  {
    id: 15,
    title: "Forza",
    image: "https://i.pinimg.com/736x/47/0b/a2/470ba2a0278efee802d718e83c89e066.jpg",
    description: "Премиальные гоночные симуляторы от Microsoft, разделенные на две линейки: симулятор Motorsport и аркадный Horizon с открытым миром.",
    link: "/franchises/forza"
  }
];

const FranchiseDetail = () => {
  const { title } = useParams();
  const franchise = franchises.find(f => f.link === `/franchises/${title}`);

  if (!franchise) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-12 text-center">
          <h1 className="text-3xl font-bold">Franchise Not Found</h1>
          <p className="text-muted-foreground mt-4">Sorry, the franchise you're looking for doesn't exist.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <Card>
            <CardContent className="p-6">
              <img
                src={franchise.image}
                alt={franchise.title}
                className="w-full h-64 object-cover mb-4 rounded-md"
              />
              <h1 className="text-3xl font-bold mb-2">{franchise.title}</h1>
              <p className="text-foreground">{franchise.description}</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FranchiseDetail;
