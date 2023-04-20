import { rest } from 'msw';


const handlers = [
  rest.get('popular', async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        "kind": "youtube#videoListResponse",
        "etag": "47JNFXqWyszBANieM1Ry1bah0F8",
        "items": [
          {
            "kind": "youtube#video",
            "etag": "iDsyqgDz4SgTHkBZLN2_SiZbuLk",
            "id": "a8w5_ZvSTdo",
            "snippet": {
              "publishedAt": "2023-04-19T08:10:00Z",
              "channelId": "UCYRrUD5v5j_Ei8sKOo7mhoQ",
              "title": "“저출산 문제에 진심”..무릎까지 꿇었다!",
              "description": "최정우 포스코그룹 회장이 국내 최초로 네쌍둥이 자연 분만에 성공한 직원의 집을 찾았습니다. 9인승 풀옵션 승합차부터 육아지원금까지 억 소리나는 지원을 받았다고 하는데요. 엠빅뉴스가 직접 연락해 봤습니다.\n\n#다둥이 #포스코 #출산",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/a8w5_ZvSTdo/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/a8w5_ZvSTdo/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/a8w5_ZvSTdo/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/a8w5_ZvSTdo/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/a8w5_ZvSTdo/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "엠빅뉴스",
              "tags": [
                "다둥이",
                "포스코",
                "출산",
                "분만",
                "산부인과",
                "카니발",
                "저출산",
                "출산장려금",
                "회장님",
                "출산장려",
                "포스코회장",
                "자연분만",
                "출산선물",
                "네쌍둥이",
                "포스코네쌍둥이"
              ],
              "categoryId": "25",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "“저출산 문제에 진심”..무릎까지 꿇었다!",
                "description": "최정우 포스코그룹 회장이 국내 최초로 네쌍둥이 자연 분만에 성공한 직원의 집을 찾았습니다. 9인승 풀옵션 승합차부터 육아지원금까지 억 소리나는 지원을 받았다고 하는데요. 엠빅뉴스가 직접 연락해 봤습니다.\n\n#다둥이 #포스코 #출산"
              },
              "defaultAudioLanguage": "ko"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "3ijq7Cr9wvp3GVDoJS40lviaBqU",
            "id": "FtWCPhNUw7s",
            "snippet": {
              "publishedAt": "2023-04-18T09:00:07Z",
              "channelId": "UCYtjW8dGkaeHwrMiB01Xa_Q",
              "title": "상상 연애도 한계가 있는데… 벌써 한계에 다다른… | 조밥 곽선생 EP.2",
              "description": "과연 이들에게도 봄이 올까요..? 🥹😭\n\nJB 연애 토론회 《조밥 곽선생》\n매주 화요일 오후 6시 스튜디오 와플 공개!\n👉 https://www.youtube.com/c/스튜디오와플STUDIOWAFFLE\n\n🧇구독 & 좋아요 & 알림설정 필수🧇\n\n#조밥곽선생 #곽튜브 #박원빈 #이희수 #논리왕전기 #연애 #토론",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/FtWCPhNUw7s/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/FtWCPhNUw7s/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/FtWCPhNUw7s/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/FtWCPhNUw7s/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/FtWCPhNUw7s/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "스튜디오 와플 - STUDIO WAFFLE",
              "tags": [
                "바퀴달린입",
                "이용진",
                "뱃사공",
                "풍자",
                "곽튜브",
                "곽준빈",
                "김진우",
                "윤보미",
                "토론회",
                "토론",
                "MSCR_OR_NS",
                "아가리",
                "아가리 파이터",
                "터키즈",
                "터키즈 제작진",
                "터키즈 레전드",
                "MZ세대",
                "양배추",
                "환승연애",
                "조밥",
                "JB",
                "연애",
                "연애 토론"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "defaultLanguage": "ko",
              "localized": {
                "title": "상상 연애도 한계가 있는데… 벌써 한계에 다다른… | 조밥 곽선생 EP.2",
                "description": "과연 이들에게도 봄이 올까요..? 🥹😭\n\nJB 연애 토론회 《조밥 곽선생》\n매주 화요일 오후 6시 스튜디오 와플 공개!\n👉 https://www.youtube.com/c/스튜디오와플STUDIOWAFFLE\n\n🧇구독 & 좋아요 & 알림설정 필수🧇\n\n#조밥곽선생 #곽튜브 #박원빈 #이희수 #논리왕전기 #연애 #토론"
              },
              "defaultAudioLanguage": "ko"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "4Iz30EaeEm7H0oJ6w5dgeVZDs0g",
            "id": "ujA1nyvY2GQ",
            "snippet": {
              "publishedAt": "2023-04-18T10:18:48Z",
              "channelId": "UCoRXPcv8XK5fAplLbk9PTww",
              "title": "IVE, I AM [THE SHOW 230418]",
              "description": "#IVE #I_AM\n\n채널에 가입하여 혜택을 누려보세요.\nhttps://www.youtube.com/channel/UCoRXPcv8XK5fAplLbk9PTww/join\n\nThe K-POP \r\n\r\nAll about K-POP in Korea!\r\nOfficial  K-POP YouTube channel of SBS Medianet.\r\nPlease don’t forget to click Subscribe.\r\nEnjoy your YouTube life with THE K-POP.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/ujA1nyvY2GQ/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/ujA1nyvY2GQ/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/ujA1nyvY2GQ/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/ujA1nyvY2GQ/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/ujA1nyvY2GQ/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "THE K-POP",
              "tags": [
                "K-pop",
                "Kpop",
                "SBS",
                "Korea",
                "sbsmedianet",
                "230418",
                "THE SHOW",
                "더쇼라이브",
                "IVE",
                "I AM"
              ],
              "categoryId": "10",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "IVE, I AM [THE SHOW 230418]",
                "description": "#IVE #I_AM\n\n채널에 가입하여 혜택을 누려보세요.\nhttps://www.youtube.com/channel/UCoRXPcv8XK5fAplLbk9PTww/join\n\nThe K-POP \r\n\r\nAll about K-POP in Korea!\r\nOfficial  K-POP YouTube channel of SBS Medianet.\r\nPlease don’t forget to click Subscribe.\r\nEnjoy your YouTube life with THE K-POP."
              },
              "defaultAudioLanguage": "ko"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "Xb2cqloJHUoeU_p-AqXnlirJus8",
            "id": "nZtfW352d34",
            "snippet": {
              "publishedAt": "2023-04-17T10:00:30Z",
              "channelId": "UCyn-K7rZLXjGl7VXGweIlcA",
              "title": "[백종원 시장이 되다 13화] 재개장 완료한 환상의 예산시장... 뭔가 보여드리겠습니다!💪",
              "description": "#백종원 #백종원시장이되다 #예산\n\n4월 1일 오픈한 예산상설시장!\n다들 가보셨나요?\n\n잠시 휴장에 들어갔던 한 달 동안\n방문하는 팀원분들이 더 다양하고, 더 편하게! 즐길 수 있게\n사상 최대!\n더본코리아 전부서는 물론\n많은 곳에서 힘을 보태주셨습니다!💪\n\n그런데...!\n왜 항상 슬픈 예감은 틀리지 않는지...\n\n무차별적인 건물주의 퇴거 통보에,\n여기저기서 들려오는 흉흉한 소문까지\n예산시장에서도 여지없이 고개를 드는 젠트리피케이션...!\n\n과연...\n예산 프로젝트는 이런 위기를 잘 극복해내고\n지역 경제 활성화라는 꿈을 이뤄낼 수 있을까요?!\n\n\n_\n\n00:00 인트로\n01:09 휴장 스타-또!\n03:38 변화된 모습✨\n07:11 공사 시작!\n08:22 젠트리피케이션?😥\n10:26 하나가 되자!\n12:55 부탁 드립니다..\n16:15 예고편!",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/nZtfW352d34/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/nZtfW352d34/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/nZtfW352d34/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/nZtfW352d34/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/nZtfW352d34/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "백종원 PAIK JONG WON",
              "tags": [
                "백종원",
                "시장",
                "백종원예산",
                "예산시장",
                "재개장",
                "더본코리아",
                "지역경제",
                "활성화 리모델링",
                "비하인드스토리",
                "창업",
                "자영업",
                "젠트리피케이션",
                "음식여행",
                "theborn",
                "paik jong won",
                "얘산",
                "백종원거리",
                "족발 볶음밥",
                "구구통닭",
                "배종원",
                "정보",
                "꿀팁",
                "재개발",
                "상권",
                "요리"
              ],
              "categoryId": "22",
              "liveBroadcastContent": "none",
              "defaultLanguage": "ko",
              "localized": {
                "title": "[백종원 시장이 되다 13화] 재개장 완료한 환상의 예산시장... 뭔가 보여드리겠습니다!💪",
                "description": "#백종원 #백종원시장이되다 #예산\n\n4월 1일 오픈한 예산상설시장!\n다들 가보셨나요?\n\n잠시 휴장에 들어갔던 한 달 동안\n방문하는 팀원분들이 더 다양하고, 더 편하게! 즐길 수 있게\n사상 최대!\n더본코리아 전부서는 물론\n많은 곳에서 힘을 보태주셨습니다!💪\n\n그런데...!\n왜 항상 슬픈 예감은 틀리지 않는지...\n\n무차별적인 건물주의 퇴거 통보에,\n여기저기서 들려오는 흉흉한 소문까지\n예산시장에서도 여지없이 고개를 드는 젠트리피케이션...!\n\n과연...\n예산 프로젝트는 이런 위기를 잘 극복해내고\n지역 경제 활성화라는 꿈을 이뤄낼 수 있을까요?!\n\n\n_\n\n00:00 인트로\n01:09 휴장 스타-또!\n03:38 변화된 모습✨\n07:11 공사 시작!\n08:22 젠트리피케이션?😥\n10:26 하나가 되자!\n12:55 부탁 드립니다..\n16:15 예고편!"
              },
              "defaultAudioLanguage": "ko"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "lFkziirzMnz8GjW5yyzwZcEZTa4",
            "id": "dPMZrxrhIbA",
            "snippet": {
              "publishedAt": "2023-04-19T10:00:11Z",
              "channelId": "UCUj6rrhMTR9pipbAWBAMvUQ",
              "title": "[ENG] 아이브 초대석 (with 주우재)",
              "description": "▶관련 재생목록\n  •침착맨의 일상재롱: https://goo.gl/OJ4Uoa\n\n▶출연\n  •아이브(@IVEstarship), 주우재(@todaywoo-jae), 침착맨\n\n#침착맨 #아이브 #주우재",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/dPMZrxrhIbA/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/dPMZrxrhIbA/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/dPMZrxrhIbA/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/dPMZrxrhIbA/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/dPMZrxrhIbA/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "침착맨",
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "defaultLanguage": "ko",
              "localized": {
                "title": "[ENG] 아이브 초대석 (with 주우재)",
                "description": "▶관련 재생목록\n  •침착맨의 일상재롱: https://goo.gl/OJ4Uoa\n\n▶출연\n  •아이브(@IVEstarship), 주우재(@todaywoo-jae), 침착맨\n\n#침착맨 #아이브 #주우재"
              },
              "defaultAudioLanguage": "ko"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "JUyxlV0TorJG0bGS3Omt31q1E-M",
            "id": "E87JmA7zqyU",
            "snippet": {
              "publishedAt": "2023-04-19T10:18:07Z",
              "channelId": "UCNhofiqfw5nl-NeDJkXtPvw",
              "title": "교토의 최고급 료칸 VS 가성비 료칸 비교 체험 【일본4】",
              "description": "본 컨텐츠는 라쿠텐 트래블의 지원을 받아 제작되었습니다.\n\n--------------------------------------\n카메라\n\n\nGopro11\nGalaxy S21\n--------------------------------------\n배경음악\n\n\nJahzzar - Avientu\nhttps://www.youtube.com/watch?v=0mAwExjcdU0\n\n\nJahzzar - Scenes from the Zoo\nhttps://www.youtube.com/watch?v=gS2XlyjM8Q4\n\n\nJahzzar - Barefoot\nhttps://www.youtube.com/watch?v=xEOdmEW4ZzU\n\n\nJahzzar - Rooftop\nhttps://www.youtube.com/watch?v=fvlbXLKHSNY",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/E87JmA7zqyU/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/E87JmA7zqyU/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/E87JmA7zqyU/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/E87JmA7zqyU/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/E87JmA7zqyU/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "빠니보틀 Pani Bottle",
              "tags": [
                "라쿠텐",
                "료칸 여행",
                "일본 료칸",
                "교토 료칸",
                "교토 여행",
                "교토 닌자 체험",
                "교토 닌자"
              ],
              "categoryId": "19",
              "liveBroadcastContent": "none",
              "defaultLanguage": "ko",
              "localized": {
                "title": "교토의 최고급 료칸 VS 가성비 료칸 비교 체험 【일본4】",
                "description": "본 컨텐츠는 라쿠텐 트래블의 지원을 받아 제작되었습니다.\n\n--------------------------------------\n카메라\n\n\nGopro11\nGalaxy S21\n--------------------------------------\n배경음악\n\n\nJahzzar - Avientu\nhttps://www.youtube.com/watch?v=0mAwExjcdU0\n\n\nJahzzar - Scenes from the Zoo\nhttps://www.youtube.com/watch?v=gS2XlyjM8Q4\n\n\nJahzzar - Barefoot\nhttps://www.youtube.com/watch?v=xEOdmEW4ZzU\n\n\nJahzzar - Rooftop\nhttps://www.youtube.com/watch?v=fvlbXLKHSNY"
              },
              "defaultAudioLanguage": "ko"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "s14jgYSR_B_-9oZtGJKr8nQPT4c",
            "id": "gUmE_TRdp0s",
            "snippet": {
              "publishedAt": "2023-04-19T05:45:07Z",
              "channelId": "UCJ0uqCI0Vqr2Rrt1HseGirg",
              "title": "BLACKPINK Carpool Karaoke",
              "description": "James cruises through Los Angeles with BLACKPINK singing their hits and telling stories. James gets a krumping tutorial and the band talks about their experiences with the training system that led them to form BLACKPINK. We attempt to add to their impressive list of world records and everyone gets their Spice Girls name.\nFull song list: \n\"Pink Venom\" - BLACKPINK\n\"DDU DU DDU DU\" - BLACKPINK\n\"No Scrubs\" - TLC\n\"How You Like That\" - BLACKPINK\n\"Wannabe\" - Spice Girls\n\nMore Late Late Show:\nSubscribe: http://bit.ly/CordenYouTube\nWatch Full Episodes: http://bit.ly/1ENyPw4\nFacebook: http://on.fb.me/19PIHLC\nTwitter: http://bit.ly/1Iv0q6k\nInstagram: http://bit.ly/latelategram\nTikTok: http://https://www.tiktok.com/@latelateshow\n\nWatch The Late Late Show with James Corden weeknights at 12:35 AM ET/11:35 PM CT on CBS and streaming on Paramount+.\n\n\n---\nEach week night, THE LATE LATE SHOW with JAMES CORDEN throws the ultimate late night after party with a mix of celebrity guests, edgy musical acts, games and sketches. Corden differentiates his show by offering viewers a peek behind-the-scenes into the green room, bringing all of his guests out at once and lending his musical and acting talents to various sketches. Additionally, bandleader Reggie Watts and the house band provide original, improvised music throughout the show. Since Corden took the reigns as host in March 2015, he has quickly become known for generating buzzworthy viral videos, such as Carpool Karaoke.\"",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/gUmE_TRdp0s/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/gUmE_TRdp0s/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/gUmE_TRdp0s/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/gUmE_TRdp0s/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/gUmE_TRdp0s/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "The Late Late Show with James Corden",
              "tags": [
                "The Late Late Show",
                "Late Late Show",
                "James Corden",
                "Corden",
                "late night",
                "late night show",
                "comedy",
                "comedian",
                "celebrity",
                "celeb",
                "celebrities",
                "CBS",
                "joke",
                "jokes",
                "funny",
                "funny videos",
                "funny video",
                "humor",
                "hollywood",
                "famous"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "defaultLanguage": "en",
              "localized": {
                "title": "BLACKPINK Carpool Karaoke",
                "description": "James cruises through Los Angeles with BLACKPINK singing their hits and telling stories. James gets a krumping tutorial and the band talks about their experiences with the training system that led them to form BLACKPINK. We attempt to add to their impressive list of world records and everyone gets their Spice Girls name.\nFull song list: \n\"Pink Venom\" - BLACKPINK\n\"DDU DU DDU DU\" - BLACKPINK\n\"No Scrubs\" - TLC\n\"How You Like That\" - BLACKPINK\n\"Wannabe\" - Spice Girls\n\nMore Late Late Show:\nSubscribe: http://bit.ly/CordenYouTube\nWatch Full Episodes: http://bit.ly/1ENyPw4\nFacebook: http://on.fb.me/19PIHLC\nTwitter: http://bit.ly/1Iv0q6k\nInstagram: http://bit.ly/latelategram\nTikTok: http://https://www.tiktok.com/@latelateshow\n\nWatch The Late Late Show with James Corden weeknights at 12:35 AM ET/11:35 PM CT on CBS and streaming on Paramount+.\n\n\n---\nEach week night, THE LATE LATE SHOW with JAMES CORDEN throws the ultimate late night after party with a mix of celebrity guests, edgy musical acts, games and sketches. Corden differentiates his show by offering viewers a peek behind-the-scenes into the green room, bringing all of his guests out at once and lending his musical and acting talents to various sketches. Additionally, bandleader Reggie Watts and the house band provide original, improvised music throughout the show. Since Corden took the reigns as host in March 2015, he has quickly become known for generating buzzworthy viral videos, such as Carpool Karaoke.\""
              },
              "defaultAudioLanguage": "en-US"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "ydJkVglMaQ6-lPASUJwJk3tLWmc",
            "id": "4KRYA4wPLO8",
            "snippet": {
              "publishedAt": "2023-04-18T10:18:20Z",
              "channelId": "UCoRXPcv8XK5fAplLbk9PTww",
              "title": "IVE, Kitsch [THE SHOW 230418]",
              "description": "#IVE #Kitsch\n\n채널에 가입하여 혜택을 누려보세요.\nhttps://www.youtube.com/channel/UCoRXPcv8XK5fAplLbk9PTww/join\n\nThe K-POP \r\n\r\nAll about K-POP in Korea!\r\nOfficial  K-POP YouTube channel of SBS Medianet.\r\nPlease don’t forget to click Subscribe.\r\nEnjoy your YouTube life with THE K-POP.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/4KRYA4wPLO8/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/4KRYA4wPLO8/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/4KRYA4wPLO8/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/4KRYA4wPLO8/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/4KRYA4wPLO8/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "THE K-POP",
              "tags": [
                "K-pop",
                "Kpop",
                "SBS",
                "Korea",
                "sbsmedianet",
                "230418",
                "THE SHOW",
                "더쇼라이브",
                "IVE",
                "Kitsch"
              ],
              "categoryId": "10",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "IVE, Kitsch [THE SHOW 230418]",
                "description": "#IVE #Kitsch\n\n채널에 가입하여 혜택을 누려보세요.\nhttps://www.youtube.com/channel/UCoRXPcv8XK5fAplLbk9PTww/join\n\nThe K-POP \r\n\r\nAll about K-POP in Korea!\r\nOfficial  K-POP YouTube channel of SBS Medianet.\r\nPlease don’t forget to click Subscribe.\r\nEnjoy your YouTube life with THE K-POP."
              },
              "defaultAudioLanguage": "ko"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "O1PfDs2nbzIw3Y9UmnuWQ01XsLw",
            "id": "lSbFDEMf67g",
            "snippet": {
              "publishedAt": "2023-04-18T10:19:26Z",
              "channelId": "UCoRXPcv8XK5fAplLbk9PTww",
              "title": "IVE (아이브), THE SHOW CHOICE! [THE SHOW 230418]",
              "description": "#아이브, 더 쇼 초이스\n#IVE, THE SHOW CHOICE\n\n채널에 가입하여 혜택을 누려보세요.\nhttps://www.youtube.com/channel/UCoRXPcv8XK5fAplLbk9PTww/join\n\nThe K-POP \r\n\r\nAll about K-POP in Korea!\r\nOfficial  K-POP YouTube channel of SBS Medianet.\r\nPlease don’t forget to click Subscribe.\r\nEnjoy your YouTube life with THE K-POP.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/lSbFDEMf67g/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/lSbFDEMf67g/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/lSbFDEMf67g/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/lSbFDEMf67g/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/lSbFDEMf67g/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "THE K-POP",
              "tags": [
                "K-pop",
                "Kpop",
                "SBS",
                "Korea",
                "sbsmedianet",
                "230417",
                "THE SHOW",
                "더쇼",
                "더쇼라이브",
                "더쇼초이스",
                "THE SHOW CHOICE",
                "IVE",
                "아이브"
              ],
              "categoryId": "10",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "IVE (아이브), THE SHOW CHOICE! [THE SHOW 230418]",
                "description": "#아이브, 더 쇼 초이스\n#IVE, THE SHOW CHOICE\n\n채널에 가입하여 혜택을 누려보세요.\nhttps://www.youtube.com/channel/UCoRXPcv8XK5fAplLbk9PTww/join\n\nThe K-POP \r\n\r\nAll about K-POP in Korea!\r\nOfficial  K-POP YouTube channel of SBS Medianet.\r\nPlease don’t forget to click Subscribe.\r\nEnjoy your YouTube life with THE K-POP."
              },
              "defaultAudioLanguage": "ko"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "Ua8Uui8P4MN3TIjHVsEX6YdxjHY",
            "id": "7nRiE4sLLxE",
            "snippet": {
              "publishedAt": "2023-04-17T09:00:07Z",
              "channelId": "UCEf_Bc-KVd7onSeifS3py9g",
              "title": "NCT DOJAEJUNG 엔시티 도재정 'Perfume' MV",
              "description": "NCT DOJAEJUNG's 1st Mini Album \"Perfume\" is out!\nListen and download on your favorite platform: https://NCTDOJAEJUNG.lnk.to/Perfume\n\n[Tracklist]\n01 Perfume\n02 Kiss\n03 Dive\n04 Strawberry Sunday\n05 후유증 (Can We Go Back)\n06 안녕 (Ordinary)\n\nNCT DOJAEJUNG Official\nhttps://www.youtube.com/nctsmtown\nhttps://www.instagram.com/nct_dojaejung/\nhttp://www.tiktok.com/@official_nct\nhttp://twitter.com/NCTsmtown\nhttp://www.facebook.com/NCT.smtown\n\n#NCT_DOJAEJUNG #DOJAEJUNG #NCT\n#Perfume #DOJAEJUNG_Perfume\nNCT DOJAEJUNG 엔시티 도재정 'Perfume' MV ℗ SM Entertainment",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/7nRiE4sLLxE/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/7nRiE4sLLxE/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/7nRiE4sLLxE/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/7nRiE4sLLxE/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/7nRiE4sLLxE/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "SMTOWN",
              "tags": [
                "nct dojaejung",
                "perfume",
                "mv",
                "music video",
                "doyoung",
                "jaehyun"
              ],
              "categoryId": "10",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "NCT DOJAEJUNG 엔시티 도재정 'Perfume' MV",
                "description": "NCT DOJAEJUNG's 1st Mini Album \"Perfume\" is out!\nListen and download on your favorite platform: https://NCTDOJAEJUNG.lnk.to/Perfume\n\n[Tracklist]\n01 Perfume\n02 Kiss\n03 Dive\n04 Strawberry Sunday\n05 후유증 (Can We Go Back)\n06 안녕 (Ordinary)\n\nNCT DOJAEJUNG Official\nhttps://www.youtube.com/nctsmtown\nhttps://www.instagram.com/nct_dojaejung/\nhttp://www.tiktok.com/@official_nct\nhttp://twitter.com/NCTsmtown\nhttp://www.facebook.com/NCT.smtown\n\n#NCT_DOJAEJUNG #DOJAEJUNG #NCT\n#Perfume #DOJAEJUNG_Perfume\nNCT DOJAEJUNG 엔시티 도재정 'Perfume' MV ℗ SM Entertainment"
              },
              "defaultAudioLanguage": "ko"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "7_YOQ9j03gL1yhq-j3YYOcRrHlc",
            "id": "xj75srLvx6M",
            "snippet": {
              "publishedAt": "2023-04-18T11:54:54Z",
              "channelId": "UCF3UEVPt5zZTlBVJwDG317g",
              "title": "＂우리가 도루 저지를 하다니👀?! ＂ 파이어볼러 이대은과 어깨 깡패 박재욱의 미친 활약💥｜최강야구｜JTBC 230417 방송",
              "description": "이 집.. 배터리 맛집이네..\n\n#최강야구 #핫클립 #최강몬스터즈 #이대은 #박재욱\n\n⚾오직 승리만을 추구하는 사상 최강의 야구팀\n＜최강야구＞\n→ 매주 월요일 밤 10시 30분 JTBC 방송!\n\n\n[JTBC봐야지] 구독하기☞ http://asq.kr/VgFZ3\u200b\n\n------------------------------------------------------\n📌영상 속 프로그램은?\n\n【최강야구】\nhttps://tv.jtbc.co.kr/ckmonsters\n------------------------------------------------------",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/xj75srLvx6M/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/xj75srLvx6M/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/xj75srLvx6M/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/xj75srLvx6M/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/xj75srLvx6M/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "JTBC Voyage",
              "tags": [
                "genre:게임",
                "format:하이라이트",
                "source:스포츠",
                "type:방송",
                "series:최강야구",
                "topic:야구",
                "person:이대은",
                "person:박재욱",
                "죄강야구 위즈",
                "KT위즈",
                "이대은 파이어볼",
                "최강몬스터즈",
                "야구",
                "야구선수",
                "야구팀",
                "야구예능",
                "jtbc예능",
                "2023최강야구",
                "2023시즌",
                "2023시즌최강야구",
                "최강야구 개막전",
                "크보",
                "야구쇼츠",
                "야구레전드장면",
                "메이저리그",
                "김하성",
                "류현진",
                "김성근 징크스",
                "김성근 신발",
                "최강야구"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "＂우리가 도루 저지를 하다니👀?! ＂ 파이어볼러 이대은과 어깨 깡패 박재욱의 미친 활약💥｜최강야구｜JTBC 230417 방송",
                "description": "이 집.. 배터리 맛집이네..\n\n#최강야구 #핫클립 #최강몬스터즈 #이대은 #박재욱\n\n⚾오직 승리만을 추구하는 사상 최강의 야구팀\n＜최강야구＞\n→ 매주 월요일 밤 10시 30분 JTBC 방송!\n\n\n[JTBC봐야지] 구독하기☞ http://asq.kr/VgFZ3\u200b\n\n------------------------------------------------------\n📌영상 속 프로그램은?\n\n【최강야구】\nhttps://tv.jtbc.co.kr/ckmonsters\n------------------------------------------------------"
              },
              "defaultAudioLanguage": "ko"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "5_wehR6djOEKicYx9DotWSQFalM",
            "id": "ZebPUYhYKNU",
            "snippet": {
              "publishedAt": "2023-04-17T06:32:02Z",
              "channelId": "UC8rSvDTd9VI0JYUN9N4_yGQ",
              "title": "[범죄도시3] 2023년 상반기 출격! 런칭 예고편 공개",
              "description": "우리 언제 봄?👀 곧 봄!🌸\n\n옵니다.\n그가.\n마석도 IS COMING👊\n\n👇 #범죄도시3 2023년 극장 대개봉! 👇\n대체불가 괴물형사 ‘마석도’가 서울 광수대로 이동 후, 신종 마약 범죄 사건의 배후인 ‘주성철’과 마약 사건에 연루된 또 다른 빌런 ‘리키’를 잡기 위해 펼치는 통쾌한 범죄 소탕 작전!\n\n#이제시작이야 #2023년개봉\n#마동석 #이준혁 #아오키무네타카\n#DonLEE #LEEJunHyuk #AOKIMUNETAKA",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/ZebPUYhYKNU/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/ZebPUYhYKNU/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/ZebPUYhYKNU/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/ZebPUYhYKNU/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/ZebPUYhYKNU/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "ABOentertainment",
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "[범죄도시3] 2023년 상반기 출격! 런칭 예고편 공개",
                "description": "우리 언제 봄?👀 곧 봄!🌸\n\n옵니다.\n그가.\n마석도 IS COMING👊\n\n👇 #범죄도시3 2023년 극장 대개봉! 👇\n대체불가 괴물형사 ‘마석도’가 서울 광수대로 이동 후, 신종 마약 범죄 사건의 배후인 ‘주성철’과 마약 사건에 연루된 또 다른 빌런 ‘리키’를 잡기 위해 펼치는 통쾌한 범죄 소탕 작전!\n\n#이제시작이야 #2023년개봉\n#마동석 #이준혁 #아오키무네타카\n#DonLEE #LEEJunHyuk #AOKIMUNETAKA"
              }
            }
          },
          {
            "kind": "youtube#video",
            "etag": "8VEDiebKKyIESW0C7lK2AJma2zs",
            "id": "6yqZlO0Zxho",
            "snippet": {
              "publishedAt": "2023-04-18T11:15:00Z",
              "channelId": "UCsLoTwOpElvEixfF1-O90rA",
              "title": "15년 전 들여온 씨앗 하나가 섬마을을 먹여 살리는 중🏝️ 절대 이곳을 떠나지 말라는 아버지의 유언을 지키고 섬 전체를 방풍나물 천국으로 만든 남자ㅣ#한국기행",
              "description": "봄이 오면 여수의 작은 오지 마을 둔병도는 초록 물결로 넘실댄다. 봄 방풍 덕분이다. \n\n둔병도 주민들은 1년에 딱 두 달 동안 방풍나물을 수확해 한 해 생계를 잇는다. 고구마 농사가 주 수입원이었던 마을에 처음 방풍나물을 들여온 이는 김경수 할아버지. \n\n15년 전, 조합을 설득해 마을에 무료로 씨앗을 나눠 섬 주민 모두가 방풍 재배로 풍요로워졌다는데! 고된 일이지만, 이 계절 푸른 바다와 초록빛 방풍이 섬을 가득 채우면 마을 사람들은 마음 부자가 된다.\n\n젊은 시절 ‘한량’이라 불렸던 베짱이 김경수 할아버지와 부지런한 개미 부인 배남진 할머니, 가족 같은 이웃 할머니들이 나눠주는 정(情) 덕분에 보는 이의 마음에도 봄바람 살랑이는 둔병도의 봄을 만난다.\n\n#한국기행 #둔병도 #방풍나물\n#귀농귀촌 #부농",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/6yqZlO0Zxho/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/6yqZlO0Zxho/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/6yqZlO0Zxho/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/6yqZlO0Zxho/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/6yqZlO0Zxho/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "EBS 컬렉션 - 라이프스타일",
              "tags": [
                "EBS",
                "EBS컬렉션",
                "ebs collection",
                "collection",
                "세테기",
                "세계테마기행",
                "travel",
                "여행",
                "라이프스타일",
                "다큐멘터리",
                "documentary",
                "lifestyle",
                "humanism",
                "culture",
                "tradition",
                "home",
                "living",
                "다큐멘터리 다시보기",
                "휴먼다큐",
                "다큐",
                "감동",
                "브이로그",
                "인간극장",
                "자연인",
                "나는자연인이다",
                "방풍",
                "나물",
                "농사",
                "귀농",
                "귀촌",
                "방풍나물",
                "섬마을",
                "인급동"
              ],
              "categoryId": "19",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "15년 전 들여온 씨앗 하나가 섬마을을 먹여 살리는 중🏝️ 절대 이곳을 떠나지 말라는 아버지의 유언을 지키고 섬 전체를 방풍나물 천국으로 만든 남자ㅣ#한국기행",
                "description": "봄이 오면 여수의 작은 오지 마을 둔병도는 초록 물결로 넘실댄다. 봄 방풍 덕분이다. \n\n둔병도 주민들은 1년에 딱 두 달 동안 방풍나물을 수확해 한 해 생계를 잇는다. 고구마 농사가 주 수입원이었던 마을에 처음 방풍나물을 들여온 이는 김경수 할아버지. \n\n15년 전, 조합을 설득해 마을에 무료로 씨앗을 나눠 섬 주민 모두가 방풍 재배로 풍요로워졌다는데! 고된 일이지만, 이 계절 푸른 바다와 초록빛 방풍이 섬을 가득 채우면 마을 사람들은 마음 부자가 된다.\n\n젊은 시절 ‘한량’이라 불렸던 베짱이 김경수 할아버지와 부지런한 개미 부인 배남진 할머니, 가족 같은 이웃 할머니들이 나눠주는 정(情) 덕분에 보는 이의 마음에도 봄바람 살랑이는 둔병도의 봄을 만난다.\n\n#한국기행 #둔병도 #방풍나물\n#귀농귀촌 #부농"
              },
              "defaultAudioLanguage": "ko"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "KjHgxEc7p3pe_7OCxYXaJt6OmqI",
            "id": "iy8F488wDig",
            "snippet": {
              "publishedAt": "2023-04-19T06:00:15Z",
              "channelId": "UC4UnP3v-iaFaLdtKwp84Pmw",
              "title": "이찬원 '풍등' 뮤직비디오 촬영 비하인드",
              "description": "찬원이 열심히 촬영에 임한 '풍등' 뮤직비디오 현장!✨\n많이들 궁금하셨죠?😆\n\n찬원이 대기 시간을 보내는 다양한 모습들도 만나실 수 있는\n뮤직비디오 촬영 비하인드, 모두 함께해요~🥰\n\n#이찬원 #LeeChanWon\n#풍등 #MV #비하인드",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/iy8F488wDig/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/iy8F488wDig/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/iy8F488wDig/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/iy8F488wDig/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/iy8F488wDig/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "이찬원",
              "categoryId": "10",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "이찬원 '풍등' 뮤직비디오 촬영 비하인드",
                "description": "찬원이 열심히 촬영에 임한 '풍등' 뮤직비디오 현장!✨\n많이들 궁금하셨죠?😆\n\n찬원이 대기 시간을 보내는 다양한 모습들도 만나실 수 있는\n뮤직비디오 촬영 비하인드, 모두 함께해요~🥰\n\n#이찬원 #LeeChanWon\n#풍등 #MV #비하인드"
              }
            }
          },
          {
            "kind": "youtube#video",
            "etag": "E06_WOFb7B6dCzLCEuP1S5V8ay4",
            "id": "wEXqPH35iJ4",
            "snippet": {
              "publishedAt": "2023-04-19T08:00:08Z",
              "channelId": "UCB9e3pof1o83aa0kkaoeJGA",
              "title": "[4K] NCT 도재정 -“Perfume” Band LIVE Concert │도재정 아카펠라 향기에 취한다...🐰🍑🐶[it’s KPOP LIVE 잇츠라이브]",
              "description": "잇츠라이브를 찾아온 NCT 도재정 (NCT DOJAEJUNG)!!😍\n사랑하는 상대에게 나의 향을 남기겠다는 메시지를 담은 곡,\nNCT 도재정의 'Perfume’ 무대를 지금 바로 만나보세요🐰🍑🐶\n\nNCT DOJAEJUNG - “Perfume”\n\n#itsLive #NCT_DOJAEJUNG #Perfume #DOJAEJUNG #도영 #재현 #정우 #NCT #밴드 #KPOP #잇츠라이브",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/wEXqPH35iJ4/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/wEXqPH35iJ4/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/wEXqPH35iJ4/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/wEXqPH35iJ4/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/wEXqPH35iJ4/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "it's Live",
              "tags": [
                "NCT 도재정",
                "NCT DOJAEJUNG",
                "DOJAEUNG",
                "Perfume",
                "도재정 Perfume",
                "도영",
                "재현",
                "정우",
                "NCT 유닛",
                "NCT U",
                "NCT DREAM",
                "NCT 127",
                "태일",
                "쟈니",
                "태용",
                "유타",
                "쿤",
                "텐",
                "윈윈",
                "마크",
                "샤오쥔",
                "헨드리",
                "런쥔",
                "제노",
                "해찬",
                "재민",
                "양양",
                "쇼타로",
                "성찬",
                "천러",
                "지성",
                "루카스",
                "DOYOUNG",
                "JAEHYUN",
                "JUNGWOO",
                "NCT",
                "엔시티",
                "Candy",
                "영웅",
                "Ay-yo",
                "Beatbox",
                "버퍼링",
                "Hello Future",
                "질주",
                "NCT 직캠",
                "엔시티 노래모음",
                "엔시티 노래",
                "엔시티 라이브",
                "KPOP Group",
                "KPOP Idol",
                "KPOP",
                "MDR",
                "잇츠라이브",
                "itsLive",
                "Band",
                "Band LIVE",
                "밴드",
                "밴드라이브",
                "콘서트",
                "온라인콘서트",
                "온콘",
                "공연",
                "축제"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "defaultLanguage": "ko",
              "localized": {
                "title": "[4K] NCT 도재정 -“Perfume” Band LIVE Concert │도재정 아카펠라 향기에 취한다...🐰🍑🐶[it’s KPOP LIVE 잇츠라이브]",
                "description": "잇츠라이브를 찾아온 NCT 도재정 (NCT DOJAEJUNG)!!😍\n사랑하는 상대에게 나의 향을 남기겠다는 메시지를 담은 곡,\nNCT 도재정의 'Perfume’ 무대를 지금 바로 만나보세요🐰🍑🐶\n\nNCT DOJAEJUNG - “Perfume”\n\n#itsLive #NCT_DOJAEJUNG #Perfume #DOJAEJUNG #도영 #재현 #정우 #NCT #밴드 #KPOP #잇츠라이브"
              },
              "defaultAudioLanguage": "ko"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "zngIJMxsbHDQBCM71R3hgS0gWUc",
            "id": "UbFvUThFuAc",
            "snippet": {
              "publishedAt": "2023-04-19T09:00:18Z",
              "channelId": "UC3PSZivQbIegrfavj4fmgQQ",
              "title": "전세사기를 당했어요ㅜㅜ 루퐁이와 행복하게 살고 싶었을 뿐이었는데...",
              "description": "#포메라니안 #루퐁이네 #rudypongki\n\n루퐁이 힐링채널  youtube.com/c/RudyPongki  \n\n루디 RUDY (female) / 3.5kg / Pomeranian / Birthdate: 2015/03/10\n퐁키 PONGKI (female) /1.5kg / Pomeranian / Birthdate: 2015/05/28\n\n\n\n-----\n입양, 분양은 신중히 결정해 주세요.\n반려견과 함께 산다는 것은 평생 아기를 키우는 것과 같아요\n나이가 들면 아플 수 있어요\n보호자와 교감하며 조건없는 사랑을 주는 생명입니다.\n책임감을 가져주세요.\n-----\n\n\n\n비지니스 문의: thesoy@sandbox.co.kr\n소속회사 이메일이에요\n개인적인 문의는 댓글에 남겨주세요^^\n\n서울시 용산구 서빙고로 17 센트럴파크타워, 30층 샌드박스 \"루퐁이네\"] \n(우편번호 04387)\n\n\n구독하기-https://www.youtube.com/channel/UC3PSZivQbIegrfavj4fmgQQ\n\n더소이 - https://smartstore.naver.com/thesoy\n인스타그램- https://www.instagram.com/thesoy_yoonso/\n페이스북- https://www.facebook.com/thesoythesoythesoy\n\n\n오늘의 일기\n- https://youtu.be/lwEfBOC4VCc\n- https://youtu.be/f566GszmNBo\n- https://youtu.be/spvEN9gmIw8\n\nMusic provided by 브금대통령\nTrack : Avocado  - https://youtu.be/r17F4Lz4pIY\n고양이한테 생선을 맡긴다고? - https://youtu.be/bEPSEbDDbPg\nMy Tiny Tycoon - https://youtu.be/e2agVGR7mH0\n\n\n-----------------------------\n각국어 번역 자막 제작 : 컨텐츠 제작의 마무리는 컨텐츠플라이! 글로벌 진출을 위한 최고의 파트너, CONTENTSFLY에서 제작되었습니다. https://www.contentsfly.com\n-----------------------------",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/UbFvUThFuAc/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/UbFvUThFuAc/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/UbFvUThFuAc/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/UbFvUThFuAc/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/UbFvUThFuAc/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "[THE SOY]루퐁이네",
              "tags": [
                "ポメラニアン",
                "博美犬",
                "Pomeranian",
                "강아지유튜버",
                "강아지유튜브",
                "더소이",
                "포메",
                "pom",
                "퐁키",
                "루디",
                "강아지미용",
                "포메미용",
                "화이트포메",
                "멍멍이",
                "반려견",
                "PET",
                "DOG",
                "강아지애교",
                "강아지훈련",
                "개린이",
                "웃긴강아지",
                "포메리안",
                "포메라이안",
                "pomeranianpuppy",
                "댕튜버",
                "강아지목욕",
                "씻을까",
                "포메곰돌이컷",
                "폼피츠",
                "강아지짖는소리",
                "포메라니안",
                "포메라이언"
              ],
              "categoryId": "15",
              "liveBroadcastContent": "none",
              "defaultLanguage": "ko",
              "localized": {
                "title": "전세사기를 당했어요ㅜㅜ 루퐁이와 행복하게 살고 싶었을 뿐이었는데...",
                "description": "#포메라니안 #루퐁이네 #rudypongki\n\n루퐁이 힐링채널  youtube.com/c/RudyPongki  \n\n루디 RUDY (female) / 3.5kg / Pomeranian / Birthdate: 2015/03/10\n퐁키 PONGKI (female) /1.5kg / Pomeranian / Birthdate: 2015/05/28\n\n\n\n-----\n입양, 분양은 신중히 결정해 주세요.\n반려견과 함께 산다는 것은 평생 아기를 키우는 것과 같아요\n나이가 들면 아플 수 있어요\n보호자와 교감하며 조건없는 사랑을 주는 생명입니다.\n책임감을 가져주세요.\n-----\n\n\n\n비지니스 문의: thesoy@sandbox.co.kr\n소속회사 이메일이에요\n개인적인 문의는 댓글에 남겨주세요^^\n\n서울시 용산구 서빙고로 17 센트럴파크타워, 30층 샌드박스 \"루퐁이네\"] \n(우편번호 04387)\n\n\n구독하기-https://www.youtube.com/channel/UC3PSZivQbIegrfavj4fmgQQ\n\n더소이 - https://smartstore.naver.com/thesoy\n인스타그램- https://www.instagram.com/thesoy_yoonso/\n페이스북- https://www.facebook.com/thesoythesoythesoy\n\n\n오늘의 일기\n- https://youtu.be/lwEfBOC4VCc\n- https://youtu.be/f566GszmNBo\n- https://youtu.be/spvEN9gmIw8\n\nMusic provided by 브금대통령\nTrack : Avocado  - https://youtu.be/r17F4Lz4pIY\n고양이한테 생선을 맡긴다고? - https://youtu.be/bEPSEbDDbPg\nMy Tiny Tycoon - https://youtu.be/e2agVGR7mH0\n\n\n-----------------------------\n각국어 번역 자막 제작 : 컨텐츠 제작의 마무리는 컨텐츠플라이! 글로벌 진출을 위한 최고의 파트너, CONTENTSFLY에서 제작되었습니다. https://www.contentsfly.com\n-----------------------------"
              },
              "defaultAudioLanguage": "ko"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "xAqJElZ85c9pzBA8tGJI4hzI5rY",
            "id": "qrMBLwKaNxQ",
            "snippet": {
              "publishedAt": "2023-04-19T09:00:36Z",
              "channelId": "UCpmfh1rT8g_2eiExfhvEgQQ",
              "title": "[SUB] 사쿠라X츠키X마시로 난생처음 K-페스티벌 가보자Go! 👊 [겁도 없꾸라] EP.21",
              "description": "#sakura #겁도없꾸라 #츠키 #마시로\n\nFEARLESS 꾸라와 꾸동생들의\n달콤살벌 K-페스티벌 즐기기💓\n\n어서 와~\n순한 맛 겁꾸라는 처음이지?🌸\n\n강철 아이돌이 되기 위한 겁상실 프로젝트\n[겁도 없꾸라] ✨매주 수요일 18시✨\n\n제작 / tvN",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/qrMBLwKaNxQ/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/qrMBLwKaNxQ/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/qrMBLwKaNxQ/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/qrMBLwKaNxQ/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/qrMBLwKaNxQ/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "겁도 없꾸라",
              "tags": [
                "宮脇咲良",
                "미야와키사쿠라",
                "사쿠라",
                "르세라핌",
                "fearless",
                "아이즈원",
                "ANTIFRAGILE"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "defaultLanguage": "ko",
              "localized": {
                "title": "[SUB] 사쿠라X츠키X마시로 난생처음 K-페스티벌 가보자Go! 👊 [겁도 없꾸라] EP.21",
                "description": "#sakura #겁도없꾸라 #츠키 #마시로\n\nFEARLESS 꾸라와 꾸동생들의\n달콤살벌 K-페스티벌 즐기기💓\n\n어서 와~\n순한 맛 겁꾸라는 처음이지?🌸\n\n강철 아이돌이 되기 위한 겁상실 프로젝트\n[겁도 없꾸라] ✨매주 수요일 18시✨\n\n제작 / tvN"
              },
              "defaultAudioLanguage": "ko"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "l4fa-AjhdI_VT6fxMK26msW6adQ",
            "id": "zOicrIn6LCs",
            "snippet": {
              "publishedAt": "2023-04-19T11:37:18Z",
              "channelId": "UCyCL5k8P1iUOc1EymhhMW1A",
              "title": "친구 차 훔쳐서 숨긴 다음 엉터리 힌트 줘서 전혀 상관없는 곳으로 보내버리기ㅋㅋㅋㅋㅋ",
              "description": "#더블비#웃긴영상#재밌는영상\n\n엉터리 힌트였다니;; 오늘 저녁은 엉터리 생고기다(?)\n\n광고,협찬 문의 mingyu3@naver.com\n\n인스타그램    장명준 mang_jun_                                                        \n                         박민규  mingggkiiii\n\nMusic provided by 브금대통령\nTrack : A Little Viking - https://www.youtube.com/watch?v=rwRx-3yKZIY\nTrack : 어디를 털어볼까 - https://www.youtube.com/watch?v=FevQHuzj73E\nTrack : 방학이다! - https://youtu.be/rhcGW6WdJnA\nTrack : 능구렁이 남편 - https://youtu.be/ends4k6pyZM\nTrack : Tom's Plan 2 - https://youtu.be/dQl76P95PQM\nTrack : Playground - https://youtu.be/ofYhGhUt0cs\nTrack : Grumpy Cat - https://youtu.be/dVtWRSVQ7x0\nTrack : 서커스 유랑단 - https://youtu.be/V87Nreu7vIU\nTrack : 수사 반장 - https://www.youtube.com/watch?v=wkXKGV9qJ6Y\nTrack : Rookie Fighter  -  https://www.youtube.com/watch?v=lua6ZjX4h2w\nTrack : 1등은 내꺼야 - https://www.youtube.com/watch?v=YVxfesKIzNw\n\n괴짜도둑 - https://www.youtube.com/watch?v=B1y_2qE1OVY  \n작곡/편곡 - 뮤팟",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/zOicrIn6LCs/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/zOicrIn6LCs/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/zOicrIn6LCs/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/zOicrIn6LCs/sddefault.jpg",
                  "width": 640,
                  "height": 480
                }
              },
              "channelTitle": "더블비",
              "tags": [
                "더블비",
                "웃긴영상",
                "재밌는영상",
                "추격전"
              ],
              "categoryId": "23",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "친구 차 훔쳐서 숨긴 다음 엉터리 힌트 줘서 전혀 상관없는 곳으로 보내버리기ㅋㅋㅋㅋㅋ",
                "description": "#더블비#웃긴영상#재밌는영상\n\n엉터리 힌트였다니;; 오늘 저녁은 엉터리 생고기다(?)\n\n광고,협찬 문의 mingyu3@naver.com\n\n인스타그램    장명준 mang_jun_                                                        \n                         박민규  mingggkiiii\n\nMusic provided by 브금대통령\nTrack : A Little Viking - https://www.youtube.com/watch?v=rwRx-3yKZIY\nTrack : 어디를 털어볼까 - https://www.youtube.com/watch?v=FevQHuzj73E\nTrack : 방학이다! - https://youtu.be/rhcGW6WdJnA\nTrack : 능구렁이 남편 - https://youtu.be/ends4k6pyZM\nTrack : Tom's Plan 2 - https://youtu.be/dQl76P95PQM\nTrack : Playground - https://youtu.be/ofYhGhUt0cs\nTrack : Grumpy Cat - https://youtu.be/dVtWRSVQ7x0\nTrack : 서커스 유랑단 - https://youtu.be/V87Nreu7vIU\nTrack : 수사 반장 - https://www.youtube.com/watch?v=wkXKGV9qJ6Y\nTrack : Rookie Fighter  -  https://www.youtube.com/watch?v=lua6ZjX4h2w\nTrack : 1등은 내꺼야 - https://www.youtube.com/watch?v=YVxfesKIzNw\n\n괴짜도둑 - https://www.youtube.com/watch?v=B1y_2qE1OVY  \n작곡/편곡 - 뮤팟"
              },
              "defaultAudioLanguage": "ko"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "vhRhFlj9j_RDq1ys8ajKc4FZcVM",
            "id": "0ozPy6LI1EQ",
            "snippet": {
              "publishedAt": "2023-04-18T08:30:00Z",
              "channelId": "UC9thBCaJFBYplPEGTJJeBvw",
              "title": "KF-21 전자전기로 스텔스 잡는다? F-35B vs KF-21 항모 탑재기의 운명은!?ㅣ전 KAI 전투기 엔지니어 조종래 상무 3편",
              "description": "🕶프파 스페셜 ‘국산 전투기 엔지니어 특집’ 3편🕶\n\n(구독, 좋아요는 제작진에게 힘이 됩니다~!)\n전 KAI 전투기 엔지니어 조종래 상무 특집!\n벌써 세 번째 만남입니다!\n\n지난 2편에서 다뤘던\nFA-50 서유럽 진출, KF-21 단좌/복좌 이야기를 넘어서!\n이번 3편에서는 KF-21 Navy, 국산 항모 개발\n그리고 KF-21 전자전기 개발 가능성까지...!\n\n\"이건.. 비밀인데..?\" 하지만!\n공개 가능한 선까지 알려드립니다!\n많은 관심 부탁드립니다:)\n\n*다음 주에는 KF-21 Navy의 경제성과\n국산 다목적 수송기 이야기로 만나요!\n#kf21 #kfx #한국형전투기 #kai",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/0ozPy6LI1EQ/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/0ozPy6LI1EQ/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/0ozPy6LI1EQ/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/0ozPy6LI1EQ/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/0ozPy6LI1EQ/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "프로파일럿",
              "tags": [
                "KF21",
                "KAI",
                "kf21",
                "kfx",
                "한국형전투기",
                "국산전투기",
                "전투기",
                "공군",
                "카이",
                "전투기개발",
                "KF21보라매",
                "보라매",
                "T50",
                "fa50",
                "FA50",
                "t50",
                "폴란드",
                "폴란드국방장관",
                "폴란드수출",
                "K방산",
                "방산수출",
                "전투기수출",
                "폴란드공군",
                "프로파일럿",
                "밀리터리",
                "밀덕",
                "인니",
                "잠정전투용적합판정",
                "록히드마틴",
                "엔지니어",
                "KF-21",
                "kf21시험비행",
                "kf21반응",
                "kf21중국반응",
                "kf21해외반응"
              ],
              "categoryId": "25",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "KF-21 전자전기로 스텔스 잡는다? F-35B vs KF-21 항모 탑재기의 운명은!?ㅣ전 KAI 전투기 엔지니어 조종래 상무 3편",
                "description": "🕶프파 스페셜 ‘국산 전투기 엔지니어 특집’ 3편🕶\n\n(구독, 좋아요는 제작진에게 힘이 됩니다~!)\n전 KAI 전투기 엔지니어 조종래 상무 특집!\n벌써 세 번째 만남입니다!\n\n지난 2편에서 다뤘던\nFA-50 서유럽 진출, KF-21 단좌/복좌 이야기를 넘어서!\n이번 3편에서는 KF-21 Navy, 국산 항모 개발\n그리고 KF-21 전자전기 개발 가능성까지...!\n\n\"이건.. 비밀인데..?\" 하지만!\n공개 가능한 선까지 알려드립니다!\n많은 관심 부탁드립니다:)\n\n*다음 주에는 KF-21 Navy의 경제성과\n국산 다목적 수송기 이야기로 만나요!\n#kf21 #kfx #한국형전투기 #kai"
              },
              "defaultAudioLanguage": "ko"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "jdl12YbLLuo7C4XqQwYpAZXqeCw",
            "id": "28FMtuzXph8",
            "snippet": {
              "publishedAt": "2023-04-19T12:00:01Z",
              "channelId": "UCLkAepWjdylmXSltofFvsYQ",
              "title": "[BANGTAN BOMB] j-hope’s Entrance Ceremony with BTS - BTS (방탄소년단)",
              "description": "#BANGTANBOMB #방탄밤 #BTS #방탄소년단\n\n\nConnect with BTS: \nhttps://ibighit.com/bts \nhttp://twitter.com/BTS_bighit\nhttp://twitter.com/BTS_twt \nhttp://www.facebook.com/bangtan.official \nhttps://www.youtube.com/user/BANGTANTV \nhttp://instagram.com/BTS.bighitofficial \nhttps://www.tiktok.com/@bts_official_bighit\nhttps://weverse.onelink.me/qt3S/94808190\nhttps://www.weibo.com/BTSbighit\nhttps://www.weibo.com/BTSmembers \nhttp://i.youku.com/btsofficial \nhttp://btsblog.ibighit.com",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/28FMtuzXph8/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/28FMtuzXph8/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/28FMtuzXph8/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/28FMtuzXph8/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/28FMtuzXph8/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "BANGTANTV",
              "tags": [
                "방탄소년단",
                "BTS",
                "BANGTAN",
                "알엠",
                "RM",
                "슈가",
                "SUGA",
                "제이홉",
                "jhope",
                "지민",
                "정국",
                "k-pop",
                "방탄",
                "j-hope",
                "Jung Kook",
                "Jimin",
                "BTS V",
                "Jin"
              ],
              "categoryId": "10",
              "liveBroadcastContent": "none",
              "defaultLanguage": "ko",
              "localized": {
                "title": "[BANGTAN BOMB] j-hope’s Entrance Ceremony with BTS - BTS (방탄소년단)",
                "description": "#BANGTANBOMB #방탄밤 #BTS #방탄소년단\n\n\nConnect with BTS: \nhttps://ibighit.com/bts \nhttp://twitter.com/BTS_bighit\nhttp://twitter.com/BTS_twt \nhttp://www.facebook.com/bangtan.official \nhttps://www.youtube.com/user/BANGTANTV \nhttp://instagram.com/BTS.bighitofficial \nhttps://www.tiktok.com/@bts_official_bighit\nhttps://weverse.onelink.me/qt3S/94808190\nhttps://www.weibo.com/BTSbighit\nhttps://www.weibo.com/BTSmembers \nhttp://i.youku.com/btsofficial \nhttp://btsblog.ibighit.com"
              },
              "defaultAudioLanguage": "ko"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "QvUqzsHoFW-BUdHq3Pv0_4GGNwY",
            "id": "n4IMxRqUBsY",
            "snippet": {
              "publishedAt": "2023-04-19T03:06:15Z",
              "channelId": "UCLItMtuFPIZ-Q0m_oOVwB2Q",
              "title": "우엉을 이렇게 드셔보세요!!우엉조림은 쳐다보지도 않아요!! 오래 두고 간단하게 튀겨먹는 우엉칩(우엉찹쌀부각)Burdock chip",
              "description": "우엉 3뿌리\n건식찹쌀가루 10큰술\n소금 두꼬집\n\n\n\nThree roots of burdock\n10 tablespoons dry glutinous rice powder\na pinch of salt\n\n\n\n\n#우엉칩#우엉부각#우엉튀각#우엉강정#무엉조림#우엉반찬#우엉김밥#우엉효능#우엉요리#우엉보관#우엉과자",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/n4IMxRqUBsY/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/n4IMxRqUBsY/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/n4IMxRqUBsY/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/n4IMxRqUBsY/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/n4IMxRqUBsY/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "sogyo table 소교식탁TV",
              "tags": [
                "km_우엉요리_1080p_30f_20230419_114757"
              ],
              "categoryId": "22",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "우엉을 이렇게 드셔보세요!!우엉조림은 쳐다보지도 않아요!! 오래 두고 간단하게 튀겨먹는 우엉칩(우엉찹쌀부각)Burdock chip",
                "description": "우엉 3뿌리\n건식찹쌀가루 10큰술\n소금 두꼬집\n\n\n\nThree roots of burdock\n10 tablespoons dry glutinous rice powder\na pinch of salt\n\n\n\n\n#우엉칩#우엉부각#우엉튀각#우엉강정#무엉조림#우엉반찬#우엉김밥#우엉효능#우엉요리#우엉보관#우엉과자"
              }
            }
          },
          {
            "kind": "youtube#video",
            "etag": "8CXwCZbX1T_kzNBuBckIx8geLvU",
            "id": "bA7XCoBsIDs",
            "snippet": {
              "publishedAt": "2023-04-19T11:58:10Z",
              "channelId": "UCfkXDY7vwkcJ8ddFGz8KusA",
              "title": "[GOING SEVENTEEN] EP.72 법정 : 모든 걸 꿰뚫어 보는 눈 #1 (Court : Eyes That See The Truth #1)",
              "description": "[GOING SEVENTEEN] EP.72 법정 : 모든 걸 꿰뚫어 보는 눈 #1 (Court : Eyes That See The Truth #1)\n\n드디어 열린 법정즈의 재판!\n판사 '꿰뚫어 보는 눈'과 검사들은 그들의 죄를 밝힐 수 있을 것인가?!\n\n세븐틴은 공정하고 깨끗한 고잉세븐틴을 만들기 위해\n언제나 노력하고 있다구~😏\n\nFinally, it’s the day of the Courtz’s trial!\nWill Judge “Eyes That See The Truth” and the prosecutors be able to reveal their crimes?!\n\nSEVENTEEN is always working hard\nto create a clean and fair GOING SEVENTEEN~😏\n\n#SEVENTEEN #세븐틴\n#GOING_SVT",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/bA7XCoBsIDs/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/bA7XCoBsIDs/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/bA7XCoBsIDs/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/bA7XCoBsIDs/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/bA7XCoBsIDs/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "SEVENTEEN",
              "tags": [
                "에스쿱스",
                "정한",
                "조슈아",
                "호시",
                "원우",
                "우지",
                "디에잇",
                "민규",
                "도겸",
                "승관",
                "버논",
                "디노",
                "SCOUPS",
                "JEONGHAN",
                "JOSHUA",
                "JUN",
                "HOSHI",
                "WONWOO",
                "WOOZI",
                "THE 8",
                "MINGYU",
                "DK",
                "SEUNGKWAN",
                "VERNON",
                "DINO",
                "세븐틴",
                "SEVENTEEN",
                "セブチ"
              ],
              "categoryId": "10",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "[GOING SEVENTEEN] EP.72 법정 : 모든 걸 꿰뚫어 보는 눈 #1 (Court : Eyes That See The Truth #1)",
                "description": "[GOING SEVENTEEN] EP.72 법정 : 모든 걸 꿰뚫어 보는 눈 #1 (Court : Eyes That See The Truth #1)\n\n드디어 열린 법정즈의 재판!\n판사 '꿰뚫어 보는 눈'과 검사들은 그들의 죄를 밝힐 수 있을 것인가?!\n\n세븐틴은 공정하고 깨끗한 고잉세븐틴을 만들기 위해\n언제나 노력하고 있다구~😏\n\nFinally, it’s the day of the Courtz’s trial!\nWill Judge “Eyes That See The Truth” and the prosecutors be able to reveal their crimes?!\n\nSEVENTEEN is always working hard\nto create a clean and fair GOING SEVENTEEN~😏\n\n#SEVENTEEN #세븐틴\n#GOING_SVT"
              },
              "defaultAudioLanguage": "en"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "GyKmwHAWUfwQp_feaN8DRqccXpc",
            "id": "sPF9OuNmOyc",
            "snippet": {
              "publishedAt": "2023-04-19T09:00:36Z",
              "channelId": "UCRE-097LGtx_Zo7LrHvkycA",
              "title": "[오늘의 지수] EP.2 PERSONAL COLOR + HAIR DYE VLOG",
              "description": "#JISOO #지수 #Todays_JISOO #오늘의지수 #PERSONAL_COLOR #HAIR_DYE  #FIRSTSINGLEALBUM #ME #꽃 #FLOWER #AllEyesOnMe #행복지수 #BLACKPINK #블랙핑크",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/sPF9OuNmOyc/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/sPF9OuNmOyc/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/sPF9OuNmOyc/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/sPF9OuNmOyc/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/sPF9OuNmOyc/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "행복지수 103%",
              "categoryId": "22",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "[오늘의 지수] EP.2 PERSONAL COLOR + HAIR DYE VLOG",
                "description": "#JISOO #지수 #Todays_JISOO #오늘의지수 #PERSONAL_COLOR #HAIR_DYE  #FIRSTSINGLEALBUM #ME #꽃 #FLOWER #AllEyesOnMe #행복지수 #BLACKPINK #블랙핑크"
              },
              "defaultAudioLanguage": "ko"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "CxPCk5Bdr8nNjpKfmMvTgNnN4NA",
            "id": "CPSnbURFczA",
            "snippet": {
              "publishedAt": "2023-04-18T01:45:01Z",
              "channelId": "UCI64Eh_rwWGNDOqrXAcSL8Q",
              "title": "오이무침 절대 고추장, 고춧가루 넣지 마세요! 쉽고 간단하면서 맛 좋은 꿀팁 레시피.💯 평생 써먹는 오이 요리 만드는법.🥇 오이들깨무침 맛있게 만드는법",
              "description": "🔔 오이들깨무침. (1T=밥숟가락)\n오이 3개 (650g), 꽃소금 1T (12g), 물 3T, 다진 마늘 ⅓T (2g), 들기름 1T, 고운 소금 2꼬집, 볶은 통들깨 1T (5g).\n\n✨ 오이들깨무침. (자세한 레시피는 영상을 참고하세요.)\n1. 오이 썬다.\n2. 오이, 꽃소금 1T (12g), 물 3T 섞어 30분 놓아둔다.\n3. 30분 후 끓는 물에 오이 넣고 10초 데친다.\n4. 찬물에 헹구고 물 짠다.\n5. 오이, 다진 마늘 1/3T (2g), 들기름 1T, 고운 소금 2꼬집, 볶은 통들깨 1T (5g) 넣고 버무린다.\n\n#오이요리 #오이무침 #건강밥상",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/CPSnbURFczA/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/CPSnbURFczA/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/CPSnbURFczA/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/CPSnbURFczA/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/CPSnbURFczA/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "팔숙이 palsook",
              "tags": [
                "오이",
                "오이 요리",
                "오이 레시피",
                "오이무침",
                "오이무침레시피",
                "오이무침 만드는법",
                "오이무침 황금레시피",
                "오이반찬",
                "반찬",
                "요리",
                "요리법",
                "레시피",
                "recipe",
                "간단요리",
                "쉬운요리",
                "쉬운음식"
              ],
              "categoryId": "26",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "오이무침 절대 고추장, 고춧가루 넣지 마세요! 쉽고 간단하면서 맛 좋은 꿀팁 레시피.💯 평생 써먹는 오이 요리 만드는법.🥇 오이들깨무침 맛있게 만드는법",
                "description": "🔔 오이들깨무침. (1T=밥숟가락)\n오이 3개 (650g), 꽃소금 1T (12g), 물 3T, 다진 마늘 ⅓T (2g), 들기름 1T, 고운 소금 2꼬집, 볶은 통들깨 1T (5g).\n\n✨ 오이들깨무침. (자세한 레시피는 영상을 참고하세요.)\n1. 오이 썬다.\n2. 오이, 꽃소금 1T (12g), 물 3T 섞어 30분 놓아둔다.\n3. 30분 후 끓는 물에 오이 넣고 10초 데친다.\n4. 찬물에 헹구고 물 짠다.\n5. 오이, 다진 마늘 1/3T (2g), 들기름 1T, 고운 소금 2꼬집, 볶은 통들깨 1T (5g) 넣고 버무린다.\n\n#오이요리 #오이무침 #건강밥상"
              },
              "defaultAudioLanguage": "ko"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "EO5CY8POQllCZ8MaJjITUtITkUI",
            "id": "ZlnabTp05h8",
            "snippet": {
              "publishedAt": "2023-04-18T11:00:32Z",
              "channelId": "UCwgtORdDtUKhpjE1VBv6XfA",
              "title": "NCT DOJAEJUNG 엔시티 도재정 'Perfume' Performance Video",
              "description": "NCT DOJAEJUNG's 1st Mini Album \"Perfume\" is out!\nListen and download on your favorite platform: https://NCTDOJAEJUNG.lnk.to/Perfume\n\n💐 'Perfume' MV: https://youtu.be/7nRiE4sLLxE\n\nNCT DOJAEJUNG Official\nhttp://www.youtube.com/nctsmtown\nhttps://www.instagram.com/nct_dojaejung/\nhttp://www.tiktok.com/@official_nct\nhttp://twitter.com/NCTsmtown\nhttp://www.facebook.com/NCT.smtown\n\n#NCT_DOJAEJUNG #DOJAEJUNG #NCT\n#Perfume #DOJAEJUNG_Perfume",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/ZlnabTp05h8/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/ZlnabTp05h8/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/ZlnabTp05h8/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/ZlnabTp05h8/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/ZlnabTp05h8/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "NCT",
              "tags": [
                "NCT",
                "NCT DOJAEJUNG",
                "DOYOUNG",
                "JAEHYUN",
                "JUNGWOO",
                "Perfume",
                "performance",
                "performance video",
                "DOJAEJUNG",
                "엔시티",
                "엔시티 도재정",
                "도영",
                "재현",
                "정우",
                "퍼퓸",
                "퍼포",
                "퍼포 비디오",
                "안무",
                "안무 영상",
                "Choreography",
                "도재정",
                "퍼포먼스"
              ],
              "categoryId": "10",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "NCT DOJAEJUNG 엔시티 도재정 'Perfume' Performance Video",
                "description": "NCT DOJAEJUNG's 1st Mini Album \"Perfume\" is out!\nListen and download on your favorite platform: https://NCTDOJAEJUNG.lnk.to/Perfume\n\n💐 'Perfume' MV: https://youtu.be/7nRiE4sLLxE\n\nNCT DOJAEJUNG Official\nhttp://www.youtube.com/nctsmtown\nhttps://www.instagram.com/nct_dojaejung/\nhttp://www.tiktok.com/@official_nct\nhttp://twitter.com/NCTsmtown\nhttp://www.facebook.com/NCT.smtown\n\n#NCT_DOJAEJUNG #DOJAEJUNG #NCT\n#Perfume #DOJAEJUNG_Perfume"
              },
              "defaultAudioLanguage": "ko"
            }
          }
        ],
        "nextPageToken": "CBkQAA",
        "pageInfo": {
          "totalResults": 200,
          "resultsPerPage": 25
        }
      }),
    );
  }),
  rest.get('related', async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        "kind": "youtube#searchListResponse",
        "etag": "bG48N5JC_tkBVSzclhnxuYsnM0U",
        "nextPageToken": "CBkQAA",
        "regionCode": "KR",
        "pageInfo": {
          "totalResults": 97,
          "resultsPerPage": 25
        },
        "items": [
          {
            "kind": "youtube#searchResult",
            "etag": "ukm408QvBIhyfi7TyHuyC0tz-qQ",
            "id": {
              "kind": "youtube#video",
              "videoId": "7KDajDXtqeI"
            },
            "snippet": {
              "publishedAt": "2023-04-19T06:36:56Z",
              "channelId": "UCUj6rrhMTR9pipbAWBAMvUQ",
              "title": "한국어의 외래어 알아보기",
              "description": "▶관련 재생목록\n  •침착맨의 일상재롱: https://goo.gl/OJ4Uoa\n\n▶생방송 원본\n  •2023년 4월 7일 방송분: https://www.youtube.com/live/DfaHdCglj5w\n\n#침착맨 #외래어",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/7KDajDXtqeI/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/7KDajDXtqeI/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/7KDajDXtqeI/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/7KDajDXtqeI/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/7KDajDXtqeI/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "침착맨",
              "liveBroadcastContent": "none",
              "publishTime": "2023-04-19T06:36:56Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "CX-UJJB8KJAAmHoX1FLp9ZNdGrs",
            "id": {
              "kind": "youtube#video",
              "videoId": "M6seMqcuGW8"
            },
            "snippet": {
              "publishedAt": "2023-04-20T10:29:12Z",
              "channelId": "UChikQdjbh4mQ2h71-L-SnPA",
              "title": "엠카운트다운에서 아스트로 문빈님 추모영상 (2023.04.20)",
              "description": "아스트로 문빈님 부디 그곳에서는 아프지 않으셨으면 좋겠습니다 삼가고인의 명복을 빕니다🙏\n\n#kpop #아스트로 #문빈 #artist #astro #moobin\n#idol #아이돌 #youtube #forever #sad #애도 \n#live #케이팝 #🙏 #ive #winner #주헌 #미연 \n#kep1er #이기광 #출연진 #빌리 #gidle #bts \n#shinee #아티스트 #nmixx #김우석 #박지훈",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/M6seMqcuGW8/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/M6seMqcuGW8/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/M6seMqcuGW8/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "그로버",
              "liveBroadcastContent": "none",
              "publishTime": "2023-04-20T10:29:12Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "5C8CpqbdJahpEj2wgxH1dZ1ZHwk",
            "id": {
              "kind": "youtube#video",
              "videoId": "mWqjFQ-nUuY"
            },
            "snippet": {
              "publishedAt": "2023-04-17T08:30:41Z",
              "channelId": "UCUj6rrhMTR9pipbAWBAMvUQ",
              "title": "통닭천사의 특제 카레",
              "description": "▶관련 영상\n  •통닭천사의 간장국수: https://youtu.be/EAJkJvk5Yf4\n\n▶관련 재생목록\n  •👨\u200d🍳불만 피우면 쿡방: https://youtube.com/playlist?list=PLif_jr7pPZACEQ8CWYYcC2GDDqsJ2icOv\n\n▶생방송 원본\n  •2023년 4월 11일 방송분: https://www.youtube.com/live/g54Fz-_ws6w\n\n▶출연\n  •통닭천사(@user-ts7rl8td6u), 침착맨\n\n#침착맨 #통닭천사 #카레 #쿡방",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/mWqjFQ-nUuY/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/mWqjFQ-nUuY/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/mWqjFQ-nUuY/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/mWqjFQ-nUuY/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/mWqjFQ-nUuY/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "침착맨",
              "liveBroadcastContent": "none",
              "publishTime": "2023-04-17T08:30:41Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "ULpjWj-fKR6pJuZjV3HVCOkCfxM",
            "id": {
              "kind": "youtube#video",
              "videoId": "_ixBJr0NUq4"
            },
            "snippet": {
              "publishedAt": "2023-04-17T02:57:20Z",
              "channelId": "UCjL_p3pTgwFlHXICyekZHWw",
              "title": "우리 손잡아요 - 전기장판 전기장판 211217 카페 아이다호 공연.",
              "description": "전기장판 211217 카페 아이다호 공연.\n\n\nInstagram : @jgjp.come , https://www.instagram.com/jgjp.come/\n\n\nYouTube : https://www.youtube.com/@electricpad2229\n⠀\n\n\n전기장판 211217 카페 아이다호 공연.  setlist\n⠀\n01. 가려진 나무\n02. 젊음의 밤\n03. 반짝이던 소녀\n04. 난 가끔 네 눈이 여섯 개로 보여(김전기)\n05. 나를 잊은 그대에게\n06. 바다 어항\n07. 넌 아무도 미워하지 않잖아\n08. 0000.00.00\n09. Something To Love\n10. 살아있어 사랑(장판숙)\n11. 우리 손잡아요\n⠀\n\n\n\n\n#우리손잡아요\n#우리_손잡아요\n#전기장판 #장판숙  #김전기\n#망원아이다호 #아이다호 \n#cafeidaho #cafe_idaho",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/_ixBJr0NUq4/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/_ixBJr0NUq4/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/_ixBJr0NUq4/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/_ixBJr0NUq4/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/_ixBJr0NUq4/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "처니리",
              "liveBroadcastContent": "none",
              "publishTime": "2023-04-17T02:57:20Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "5S6Cv-a8a80gsZaK3BOTt1Q5bXA",
            "id": {
              "kind": "youtube#video",
              "videoId": "ak490-PtOuU"
            },
            "snippet": {
              "publishedAt": "2023-04-20T06:19:35Z",
              "channelId": "UCB9e3pof1o83aa0kkaoeJGA",
              "title": "[4K] 아이브 (IVE) -“I AM” Band LIVE Concert │넌 그냥 아이브 믿으면 돼, 보이는 그대로야💗 [it’s KPOP LIVE 잇츠라이브]",
              "description": "잇츠라이브를 찾아온 아이브!!😍\n‘내가 가는 길에 확신을 가지라’는 주체적인 삶의 태도를 노래한 곡,\nIVE의 'I AM’ 무대를 지금 바로 만나보세요💗\n\nIVE - “I AM”\n\n#itsLive #아이브 #IAM #IVE #안유진 #가을 #레이 #장원영 #리즈 #이서 #밴드 #KPOP #잇츠라이브",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/ak490-PtOuU/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/ak490-PtOuU/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/ak490-PtOuU/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/ak490-PtOuU/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/ak490-PtOuU/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "it's Live",
              "liveBroadcastContent": "none",
              "publishTime": "2023-04-20T06:19:35Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "C9WO0enBEkkfB0Lys2Guh8FZvjA",
            "id": {
              "kind": "youtube#video",
              "videoId": "MNJBLTaBSPU"
            },
            "snippet": {
              "publishedAt": "2023-04-05T09:31:50Z",
              "channelId": "UCUj6rrhMTR9pipbAWBAMvUQ",
              "title": "얼마나 이뤄졌는가",
              "description": "▶관련 영상\n  •【침착맨X주호민】 침투부의 미래: https://youtu.be/WYDqMDQrLNM\n  •침착맨 IQ 150, 옥냥이 IQ 150, 도합 IQ 300으로 고민해보는 침투부의 미래: https://youtu.be/my-Ab87DF8s\n  •2019년 04월 25일: https://youtu.be/nTZ5xE-F_r8\n  •기안84 인터뷰 1부 - 이제 웹툰이 힘들어요: https://youtu.be/YPty9wJy5Cc\n  •김성모 & 박태준 작가 초대석: https://youtu.be/cmj1HKlahCk\n  •2021년은 어땠나? 2022년은 어떨까?: https://youtu.be/rwYoIzl5o9U\n  •뱉은 말은 지킨다 | 제4화 엘든 링: https://youtu.be/nACIoJIwTUg\n  •침펄인물사전 | 9장 기안84 편: https://youtu.be/RWrucbFNKj4\n  •일일DJ 전무님의 쿡방: https://youtu.be/3btkx7wZsrg\n\n▶관련 재생목록\n  •침착맨의 일상재롱: https://goo.gl/OJ4Uoa\n\n▶생방송 원본\n  •2018년 6월 20일 방송분: https://youtu.be/nWsBSHvttXc\n  •2018년 8월 29일 방송분\n  •2019년 4월 25일 방송분: https://youtu.be/nTZ5xE-F_r8\n  •2021년 2월 15일 방송분\n  •2021년 8월 27일 방송분: https://youtu.be/BGq5ed2qUxM\n  •2021년 12월 28일 방송분: https://youtu.be/k1zW7U0rE6I\n  •2021년 4월 1일 방송분\n  •2022년 7월 23일 방송분\n  •2022년 9월 21일 방송분: https://youtu.be/M7efKB2J-Xc\n\n▶출연\n  •주호민(@joopearl), 옥냥이(@rooftopcat_official), 기안84(@geean84), 박태준(@ptjcomics), 김성모(@TV-po1ub), 김풍, 침착맨\n\n#침착맨 #침투부 #연대기",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/MNJBLTaBSPU/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/MNJBLTaBSPU/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/MNJBLTaBSPU/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/MNJBLTaBSPU/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/MNJBLTaBSPU/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "침착맨",
              "liveBroadcastContent": "none",
              "publishTime": "2023-04-05T09:31:50Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "SN5WznmiUJz7ovud7sG6fSU17dY",
            "id": {
              "kind": "youtube#video",
              "videoId": "HWrTG9nUJz8"
            },
            "snippet": {
              "publishedAt": "2023-04-20T09:55:04Z",
              "channelId": "UCviI9lzTe2pkxJ9M2ArA7WQ",
              "title": "\"라떼는 말이야!\" 스윙스 VS MZ래퍼 | [주식회사 마인필드] EP.1 너네는 준비 안 됐어 | 스윙스, 노윤하, 칠린호미, 다민이, 에이블, 이소",
              "description": "꼰대 사장 스윙스와 참지 않는 MZ사원들의 오피스 생활! 🏢\n🛫4월 21일 내일 저녁 6시! ETA(prod.이소(iiso)) -  발매🛫\n\n#주식회사마인필드 #너넨준비안됐어 #마인필드\n#apalchemy #minefield #indigomusic #justmusic \n#스윙스 #노윤하 #에이블 #이소 #칠린호미 #다민이 \n\n#한국힙합 #국내힙합 #힙합 #국힙 #딩프 #딩고\n#딩고프리스타일 #DingoFreestyle #DF #DFLive #킬링벌스\n\n딩고프리스타일 : df@makeus.com\n\n▶딩고프리스타일 (Dingo Freestyle) : http://bit.ly/Dingo__Freestyle\n▶딩고뮤직 (Dingo Music) : http://bit.ly/Dingo__Music",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/HWrTG9nUJz8/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/HWrTG9nUJz8/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/HWrTG9nUJz8/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/HWrTG9nUJz8/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/HWrTG9nUJz8/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "dingo freestyle",
              "liveBroadcastContent": "none",
              "publishTime": "2023-04-20T09:55:04Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "BFWKxx9NoQVR_DmaNqARDbP98cw",
            "id": {
              "kind": "youtube#video",
              "videoId": "SLHQ8lvSVhc"
            },
            "snippet": {
              "publishedAt": "2023-04-20T01:26:55Z",
              "channelId": "UCuKKkBSGK4e9fuaquWXorJg",
              "title": "대중들이 이동진을 외면한 논란의 외국영화 TOP 7",
              "description": "이동진을 논란 속에 몰아넣은 외국 영화 TOP 7 🔥🔥\n(출연자 : 이동진 평론가, SK브로드밴드 이홍연 매니저)\n\n조회수 1위 [이동진을 괴롭힌 논란의 한국영화 TOP10]이\n[외국영화 TOP 7]편으로 돌아왔습니다!\n이 영화가 왜? 어째서? 너무 궁금하셨다구요?\n여러분들의 궁금증, 이동진 평론가가 속시원하게 밝혀드립니다!\n\n끊김없는 인터넷을 원하신다면?\n👉 인터넷+B tv 신규가입 이벤트 더 알아보기: http://bit.ly/3lsXdmZ\n\n🎬오늘 소개해드린 영화는 B tv에서 보실 수 있습니다.\n📱모바일 B tv로 보고싶다면? 👇\n[퍼시픽 림] - https://bit.ly/3Lb3E89\n[리얼스틸] - https://bit.ly/3UMJiFf\n\n#이동진 #별점논란 #외국영화\n\n※ 욕설, 비방, 광고성 댓글은 삭제 조치될 수 있습니다.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/SLHQ8lvSVhc/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/SLHQ8lvSVhc/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/SLHQ8lvSVhc/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/SLHQ8lvSVhc/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/SLHQ8lvSVhc/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "B tv 이동진의 파이아키아",
              "liveBroadcastContent": "none",
              "publishTime": "2023-04-20T01:26:55Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "dvn_4oLAfS2Rd06ug8cgmXyq4yk",
            "id": {
              "kind": "youtube#video",
              "videoId": "xk_RcRJgtmo"
            },
            "snippet": {
              "publishedAt": "2023-04-20T06:32:20Z",
              "channelId": "UC-uIpGINZDL-VIHQQzJW8jw",
              "title": "원지 - 에콰도르 - 4라운드 Part 2 🎲✈ │지구마불 세계여행 | TEO",
              "description": "4라운드 원지 편 에콰도르 여행기 Part 2 입니다.\n\n📍결과 산정 기간: ~ 4/27 (목) 오후 6시 (KST) / 조회수+(좋아요X100) 결과집계\n\n주사위 한 번에 대륙 이동 🌎지구마불 세계여행🌎\n🏷 TEO 유튜브 매주 목요일 저녁 6시\n🏷 TV판 ENA 매주 토요일 저녁 7시 50분 \n\n#원지 #에콰도르 #지구마불세계여행",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/xk_RcRJgtmo/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/xk_RcRJgtmo/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/xk_RcRJgtmo/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/xk_RcRJgtmo/sddefault.jpg",
                  "width": 640,
                  "height": 480
                }
              },
              "channelTitle": "TEO",
              "liveBroadcastContent": "none",
              "publishTime": "2023-04-20T06:32:20Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "PddEyR8B1ajZFrNJ20oovQGykDI",
            "id": {
              "kind": "youtube#video",
              "videoId": "CwWY25qcFyY"
            },
            "snippet": {
              "publishedAt": "2023-04-20T06:32:12Z",
              "channelId": "UC-uIpGINZDL-VIHQQzJW8jw",
              "title": "빠니보틀 - 바하마 - 4라운드 Part 2 🎲✈ │지구마불 세계여행 | TEO",
              "description": "4라운드 빠니보틀 편 바하마 여행기 Part 2 입니다.\n\n📍결과 산정 기간: ~ 4/27 (목) 오후 6시 (KST) / 조회수+(좋아요X100) 결과집계\n\n주사위 한 번에 대륙 이동 🌎지구마불 세계여행🌎\n🏷 TEO 유튜브 매주 목요일 저녁 6시\n🏷 TV판 ENA 매주 토요일 저녁 7시 50분 \n\n#빠니보틀 #바하마 #지구마불세계여행",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/CwWY25qcFyY/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/CwWY25qcFyY/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/CwWY25qcFyY/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/CwWY25qcFyY/sddefault.jpg",
                  "width": 640,
                  "height": 480
                }
              },
              "channelTitle": "TEO",
              "liveBroadcastContent": "none",
              "publishTime": "2023-04-20T06:32:12Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "kdwMPCQ0aWqq1dAzZbZt-ePvNJM",
            "id": {
              "kind": "youtube#video",
              "videoId": "BvLvjHYgSbQ"
            },
            "snippet": {
              "publishedAt": "2023-04-18T07:06:08Z",
              "channelId": "UCUj6rrhMTR9pipbAWBAMvUQ",
              "title": "후식을 주문하는 통닭천사",
              "description": "▶관련 영상\n  •통닭천사의 특제 카레: https://youtu.be/mWqjFQ-nUuY\n\n▶관련 재생목록\n  •침착맨의 일상재롱: https://goo.gl/OJ4Uoa\n\n▶생방송 원본\n  •2023년 4월 11일 방송분: https://www.youtube.com/live/g54Fz-_ws6w\n\n▶출연\n  •통닭천사(@user-ts7rl8td6u), 침착맨\n\n#침착맨 #통닭천사 #캡틴아메리카노",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/BvLvjHYgSbQ/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/BvLvjHYgSbQ/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/BvLvjHYgSbQ/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/BvLvjHYgSbQ/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/BvLvjHYgSbQ/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "침착맨",
              "liveBroadcastContent": "none",
              "publishTime": "2023-04-18T07:06:08Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "8X06gbLo9Uh0w3_nYXtCUy9O12Q",
            "id": {
              "kind": "youtube#video",
              "videoId": "DffhMgZRPbg"
            },
            "snippet": {
              "publishedAt": "2023-04-20T07:38:30Z",
              "channelId": "UC-uIpGINZDL-VIHQQzJW8jw",
              "title": "곽튜브 - 뉴질랜드 - 4라운드 Part 2 🎲✈ │지구마불 세계여행 | TEO",
              "description": "빠니보틀, 원지, 곽튜브와 함께하는 🌎지구마불 세계여행🌎\n\n4라운드 곽튜브 편 뉴질랜드 여행기 Part 2 입니다.\n\n📍결과 산정 기간: ~ 4/27 (목) 오후 6시 (KST) / 조회수+(좋아요X100) 결과집계\n\n주사위 한 번에 대륙 이동 🌎지구마불 세계여행🌎\n🏷 TEO 유튜브 매주 목요일 저녁 6시\n🏷 TV판 ENA 매주 토요일 저녁 7시 50분 \n\n#곽튜브 #뉴질랜드 #지구마불",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/DffhMgZRPbg/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/DffhMgZRPbg/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/DffhMgZRPbg/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/DffhMgZRPbg/sddefault.jpg",
                  "width": 640,
                  "height": 480
                }
              },
              "channelTitle": "TEO",
              "liveBroadcastContent": "none",
              "publishTime": "2023-04-20T07:38:30Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "ediKcnuR-tuWHMld1bA_XcZeAdY",
            "id": {
              "kind": "youtube#video",
              "videoId": "LqJHGEMZ1YU"
            },
            "snippet": {
              "publishedAt": "2023-04-01T16:51:16Z",
              "channelId": "UCUj6rrhMTR9pipbAWBAMvUQ",
              "title": "(잔인주의) 서부시대 무신사룩 쇼핑 브이로그",
              "description": "▶관련 영상\n  •너굴모자를 쓰는 자 그 무게를 견뎌라: https://youtu.be/Hb4tRPdCt6M\n\n▶관련 재생목록\n  •레드 데드 리뎀션 2 (Red Dead Redemption 2): https://https://www.youtube.com/playlist?list=PLif_jr7pPZADtlx8QIJNJF-6XURHoRO1k\n\n▶생방송 원본\n  •2023년 2월 23일 방송분: https://www.youtube.com/live/FOqDClyly5Q?feature=share\n  •2023년 2월 28일 방송분: https://www.youtube.com/live/CJP_6HM-ZY4?feature=share\n\nSong: Joakim Karud - Dreams\nMusic provided by SAUNDOOO.\nVideo Link:   https://youtu.be/9sQ7hNz3hvc\n\n#침착맨 #레데리2 #reddeadredemption",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/LqJHGEMZ1YU/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/LqJHGEMZ1YU/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/LqJHGEMZ1YU/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/LqJHGEMZ1YU/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/LqJHGEMZ1YU/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "침착맨",
              "liveBroadcastContent": "none",
              "publishTime": "2023-04-01T16:51:16Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "eYw5uFuxUZT52sDFPnYN9KuAfMc",
            "id": {
              "kind": "youtube#video",
              "videoId": "ENVN5ZnM3aM"
            },
            "snippet": {
              "publishedAt": "2023-04-04T04:50:10Z",
              "channelId": "UCUj6rrhMTR9pipbAWBAMvUQ",
              "title": "짤로 보고 썰로 들으면 전설의 예능",
              "description": "▶관련 영상\n  •2018년 6월 5일 #1 【원본】: https://youtu.be/GdbUoPC2KoI\n  •【침착맨】 SBS Plus 새예능 '축제로구나' 출연진 제작발표회: https://youtu.be/KGTQFYZwm40\n  •【침착맨vs주호민】 '기안84' 누가 키웠는가: https://youtu.be/mOrRQAYI0Jc\n  •【침투부어워즈 2018】 2부 - 올해의 캠 컨텐츠 부문: https://youtu.be/rGv19qvuw5E\n  •고추칩 먹다가 출연했던 예능프로그램들 회상하기: https://youtu.be/hZHSTjmwYB0\n  •고양이와 기생수 그리고 광기: https://youtu.be/snbZzkkgvS0\n  •다시 했으면 하는 TV 프로그램 월드컵: https://youtu.be/TAHe9t6Ag-k\n  •상업유튜버와 팝업유튜버: https://youtu.be/kaGg6f2rpXE\n\n▶관련 재생목록\n  •침착맨의 일상재롱: https://goo.gl/OJ4Uoa\n\n▶생방송 원본\n  •2018년 6월 5일 방송분\n  •2018년 7월 13일 방송분\n  •2018년 8월 3일 방송분\n  •2018년 12월 31일 방송분\n  •2021년 7월 13일 방송분: https://youtu.be/04xqIjILP0o\n  •2021년 8월 5일 방송분: https://youtu.be/SWue3bPZeto\n  •2022년 5월 4일 방송분: https://www.youtube.com/watch?v=RRrv--v6Flc\n  •2018년 10월 25일 방송분: https://youtu.be/P3Z3fzFuuFc\n\n▶출연\n  •주호민(@joopearl), 김풍, 심윤수, 침착맨\n\n#침착맨 #주호민 #김풍 #심윤수 #축제로구나",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/ENVN5ZnM3aM/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/ENVN5ZnM3aM/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/ENVN5ZnM3aM/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/ENVN5ZnM3aM/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/ENVN5ZnM3aM/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "침착맨",
              "liveBroadcastContent": "none",
              "publishTime": "2023-04-04T04:50:10Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "rE7AIg6irdpMWHl6swBwHREWuxw",
            "id": {
              "kind": "youtube#video",
              "videoId": "A5J8DfvPt28"
            },
            "snippet": {
              "publishedAt": "2023-03-31T07:47:39Z",
              "channelId": "UCUj6rrhMTR9pipbAWBAMvUQ",
              "title": "내 자취방을 윤택하게 해줄 단 하나의 요정은? Remastered",
              "description": "▶관련 영상\n  •【침&펄】 내 자취방을 윤택하게 해줄 단 하나의 요정은?: https://youtu.be/tGBDyStMr68\n\n▶관련 재생목록\n  •침착맨의 일상재롱: https://goo.gl/OJ4Uoa\n\n▶생방송 원본\n  •2019년 4월 15일 방송분\n\n#침착맨 #이상형월드컵 #리마스터",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/A5J8DfvPt28/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/A5J8DfvPt28/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/A5J8DfvPt28/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/A5J8DfvPt28/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/A5J8DfvPt28/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "침착맨",
              "liveBroadcastContent": "none",
              "publishTime": "2023-03-31T07:47:39Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "IsfE3yNUTEFVExTvr4lGZs3iWp8",
            "id": {
              "kind": "youtube#video",
              "videoId": "2GGNLtVFdUg"
            },
            "snippet": {
              "publishedAt": "2023-04-18T09:01:36Z",
              "channelId": "UCom6YhUY62jM52nIMjf5_dw",
              "title": "유튜브 많이 보는 사람들 특징",
              "description": "◆ 오킹 팬카페! 네이버 카페   : https://oking.kr/fancafe\n◆ 쏠란트 홈페이지 바로가기 : https://ssolant.com\n◆ 오킹에게 후원하기              : https://oking.kr/donate\n◆ 오킹의 생방송 다시보기     : https://oking.kr/youtube2\n◆ 영상 업로드는 매일 18시! 많은 관심 부탁 드릴게요!\n◆ 구독과 좋아요 부탁드립니다.\n\n근거없는 낭설 / 악플, 싸움조장 댓글 삭제 합니다.\n\nBY. 유민\n\n영상 및 광고 문의\n이메일 : okingcompany93@gmail.com\n\n#오킹 #유튜브 #트위치",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/2GGNLtVFdUg/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/2GGNLtVFdUg/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/2GGNLtVFdUg/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/2GGNLtVFdUg/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/2GGNLtVFdUg/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "오킹TV",
              "liveBroadcastContent": "none",
              "publishTime": "2023-04-18T09:01:36Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "fj2YkTWTA2RuvFki0sImVNQXZqM",
            "id": {
              "kind": "youtube#video",
              "videoId": "nsNvtmEV32Q"
            },
            "snippet": {
              "publishedAt": "2023-04-11T05:16:33Z",
              "channelId": "UCUj6rrhMTR9pipbAWBAMvUQ",
              "title": "노스웨스트 항공 305편 공중 납치 사건을 알아보자",
              "description": "▶관련 영상\n  •메리 셀러스트호 실종 사건을 알아보자: https://youtu.be/dns5OuAO8EI\n\n▶관련 재생목록\n  •침착맨의 일상재롱: https://goo.gl/OJ4Uoa\n\n▶생방송 원본\n  •2023년 4월 5일 방송분: https://www.youtube.com/live/1fao8E7Nf8g\n\n#침착맨 #하이잭 #미스터리",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/nsNvtmEV32Q/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/nsNvtmEV32Q/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/nsNvtmEV32Q/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/nsNvtmEV32Q/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/nsNvtmEV32Q/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "침착맨",
              "liveBroadcastContent": "none",
              "publishTime": "2023-04-11T05:16:33Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "xRa2Yx1hnSzfyHI6HRp6HKceeDQ",
            "id": {
              "kind": "youtube#video",
              "videoId": "YceRElMemqw"
            },
            "snippet": {
              "publishedAt": "2023-04-14T08:57:20Z",
              "channelId": "UCUj6rrhMTR9pipbAWBAMvUQ",
              "title": "침착맨은 도파민 중독인가",
              "description": "▶관련 재생목록\n  •침착맨의 일상재롱: https://goo.gl/OJ4Uoa\n\n▶생방송 원본\n  •2023년 3월 13일 주호민 채널 방송분: https://youtu.be/eVf0pGLykn4\n  •2023년 4월 3일 방송분: https://www.youtube.com/live/ZFF8WSgaruA\n  •2023년 4월 5일 방송분: https://www.youtube.com/live/1fao8E7Nf8g\n  •2023년 4월 5일 방송분: https://www.youtube.com/live/kFeoOCvdV2Q\n  •2023년 4월 5일 방송분: https://www.youtube.com/live/akKpknCNgiM\n  •2023년 4월 7일 방송분: https://www.youtube.com/live/DfaHdCglj5w\n  •2023년 4월 7일 방송분: https://www.youtube.com/live/PJI_7Y_f42o\n\n▶출연\n  •주호민(@joopearl), 김풍, 침착맨\n\n#침착맨 #도파민",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/YceRElMemqw/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/YceRElMemqw/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/YceRElMemqw/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/YceRElMemqw/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/YceRElMemqw/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "침착맨",
              "liveBroadcastContent": "none",
              "publishTime": "2023-04-14T08:57:20Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "tuoc2Lmnqrx-Qe4-AJnrwx2NrE4",
            "id": {
              "kind": "youtube#video",
              "videoId": "8ApNfUJwobs"
            },
            "snippet": {
              "publishedAt": "2023-04-05T05:56:09Z",
              "channelId": "UCUj6rrhMTR9pipbAWBAMvUQ",
              "title": "나폴리탄 괴담이란?",
              "description": "▶관련 영상\n  •포켓몬 괴담과 검은 닌텐도: https://youtu.be/lSt2UnEmGxc\n\n▶관련 재생목록\n  •침착맨의 일상재롱: https://goo.gl/OJ4Uoa\n\n▶생방송 원본\n  •2021년 3월 15일 방송분: https://youtu.be/rmIRql0pnJc\n\n#침착맨 #나폴리탄 #괴담",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/8ApNfUJwobs/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/8ApNfUJwobs/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/8ApNfUJwobs/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/8ApNfUJwobs/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/8ApNfUJwobs/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "침착맨",
              "liveBroadcastContent": "none",
              "publishTime": "2023-04-05T05:56:09Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "uvoubvxBQ02kydBsMaGax7grV74",
            "id": {
              "kind": "youtube#video",
              "videoId": "RZm9KViZIxk"
            },
            "snippet": {
              "publishedAt": "2023-04-07T07:08:53Z",
              "channelId": "UCUj6rrhMTR9pipbAWBAMvUQ",
              "title": "일본 카스텔라 3종 먹방",
              "description": "▶관련 영상\n  •일본 페양구 야끼소바 컵라면 먹방: https://youtu.be/kWqonje3JsY\n\n▶관련 재생목록\n  •침착맨의 식욕저하 다이어트 먹방: https://url.kr/a4vk8m\n\n▶생방송 원본\n  •2023년 4월 3일 방송분: https://www.youtube.com/live/ZFF8WSgaruA\n\n#침착맨 #일본 #카스텔라 #과자 #먹방",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/RZm9KViZIxk/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/RZm9KViZIxk/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/RZm9KViZIxk/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/RZm9KViZIxk/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/RZm9KViZIxk/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "침착맨",
              "liveBroadcastContent": "none",
              "publishTime": "2023-04-07T07:08:53Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "ubdNLiLbQe96g3zbNVFnvZZYi5Y",
            "id": {
              "kind": "youtube#video",
              "videoId": "3tt8TrIeOts"
            },
            "snippet": {
              "publishedAt": "2023-04-07T03:23:35Z",
              "channelId": "UCUj6rrhMTR9pipbAWBAMvUQ",
              "title": "쉬다 온 침착맨",
              "description": "▶관련 영상\n  •침착맨의 호캉스: https://youtu.be/HgckUXFzbCo\n\n▶관련 재생목록\n  •침착맨의 일상재롱: https://goo.gl/OJ4Uoa\n\n▶생방송 원본\n  •2023년 4월 3일 방송분: https://www.youtube.com/live/ZFF8WSgaruA\n\n#침착맨 #복귀 #오락가락",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/3tt8TrIeOts/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/3tt8TrIeOts/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/3tt8TrIeOts/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/3tt8TrIeOts/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/3tt8TrIeOts/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "침착맨",
              "liveBroadcastContent": "none",
              "publishTime": "2023-04-07T03:23:35Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "qU0ZBSWqPdcI6y01tapjPwJyNls",
            "id": {
              "kind": "youtube#video",
              "videoId": "stMDkjUknqo"
            },
            "snippet": {
              "publishedAt": "2023-04-20T07:56:06Z",
              "channelId": "UCgiO7Kxib0SZEG0DoeuBkdQ",
              "title": "상냥한 AI와의 기획회의! [라면꼰대4] 미리보기",
              "description": "현재에 안주하지 않는 자, 라면꼰대..\n그가 쓰는 챗GPT는 역시나 달랐습니다..\n\n이제는 AI계에도 소문이 자자한 \n라면꼰대의 휘황찬란한 명성.. \n김풍 작가님의 어깨가 무겁겠는걸요?\n\n오랜시간 심사숙고하여 생각해낸\n쇼킹한 라면꼰대 시즌4의 방향성..\n그 중대발표에 여러분들도 함께하시겠어요?\n\n4월 25일 화요일 6시,\n찬란한 도약이 또 시작됩니다!\n\n[라면꼰대 시즌4]\n📌 더 다채로운 라면의 숨결을 찾아서...\n📌 매주 (화) 오후 6시 공개\n\n더밥스튜디오 구독하기 👉 https://www.youtube.com/@thebobstudio\n#THEBOB #더밥스튜디오 #라면꼰대 #라면꼰대4",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/stMDkjUknqo/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/stMDkjUknqo/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/stMDkjUknqo/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/stMDkjUknqo/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/stMDkjUknqo/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "the BOB studio | 더 밥 스튜디오",
              "liveBroadcastContent": "none",
              "publishTime": "2023-04-20T07:56:06Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "ezf4-O_bqSloBB4BAfWa99LUS0o",
            "id": {
              "kind": "youtube#video",
              "videoId": "6Di6dOV396k"
            },
            "snippet": {
              "publishedAt": "2023-03-31T03:00:54Z",
              "channelId": "UCUj6rrhMTR9pipbAWBAMvUQ",
              "title": "'A WAY OUT' 하이라이트 모음집",
              "description": "▶관련 재생목록\n  •【침착맨X주호민】 어 웨이 아웃 (A WAY OUT): https://youtube.com/playlist?list=PLif_jr7pPZADaAHKYLb2ho3zzrHWW-Ehm\n\n▶생방송 원본\n  •2018년 6월 8일 방송분\n\n▶출연\n  •주호민(@joopearl ), 침착맨\n\n#침착맨 #주호민 #어웨이아웃 #리마스터",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/6Di6dOV396k/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/6Di6dOV396k/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/6Di6dOV396k/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/6Di6dOV396k/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/6Di6dOV396k/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "침착맨",
              "liveBroadcastContent": "none",
              "publishTime": "2023-03-31T03:00:54Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "-JSNfHqsRd4-NvqEGab6TrRpwac",
            "id": {
              "kind": "youtube#video",
              "videoId": "ZL6GivXe_4c"
            },
            "snippet": {
              "publishedAt": "2023-04-05T08:40:00Z",
              "channelId": "UCUj6rrhMTR9pipbAWBAMvUQ",
              "title": "서스펜스 범벅 시나리오 쓰기 '지리는 영화' Remastered",
              "description": "▶관련 영상\n  •【침&펄 영화 만들기】 서스펜스 범벅인 영화 시나리오 쓰기 '지리는 영화': https://youtu.be/4-OFhjG6SZQ\n\n▶관련 재생목록\n  •침착맨의 일상재롱: https://goo.gl/OJ4Uoa\n\n▶생방송 원본\n  •2019년 8월 12일 방송분\n\n▶출연\n  •주호민(@joopearl), 침착맨\n\n#침착맨 #주호민 #서스펜스 #리마스터",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/ZL6GivXe_4c/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/ZL6GivXe_4c/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/ZL6GivXe_4c/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/ZL6GivXe_4c/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/ZL6GivXe_4c/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "침착맨",
              "liveBroadcastContent": "none",
              "publishTime": "2023-04-05T08:40:00Z"
            }
          }
        ]
      }
      ),
    );
  }),
];

export default handlers;
