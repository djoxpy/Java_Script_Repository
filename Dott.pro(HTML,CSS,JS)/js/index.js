
        const questions=[
        {
            text: "Question #1: How would you spend your free time?",
            answers: ["Social networks/apps",
                  "Art exhibition",
                  "Shopping",
                "Exotic restaurant"],
            correctAnswer: 0, //индекс правильного ответа
            imageSrc: "/img/2.jpg"
        },
        {
            text: "Question #2: What are the best words you can say to your girlfriend?",
            answers: ["Let’s build our future together",
                  "I’ll take care about you till the last minute",
                  "As a person, I don’t need anyone else except you", 
                "You’re the sweetest girl in the world"],
            correctAnswer: 1,
            imageSrc: "/img/3.jpg"

        },
        {
            text: "Question #3: What would you gift to her on anniversary?",
            answers: ["No gifts, taking her to restaurant",
                  "Book of her favorite author",
                  "Diamond ring",
                "Throw some cash"],
            correctAnswer: 2, 
            imageSrc: "/img/4.jpg"
        },
        {
            text: "Question #4: Where would you take her this weekend?",
            answers: ["Asian restaurant",
                  "Broadway show",
                  "Netflix and chill",
                "Standup comedy"],
            correctAnswer: 3, 
            imageSrc: "/img/5.jpg"
        },
        {
            text: "Question #5: What activities do you like?",
            answers: ["Sports, different open-air stuff",
                  "Tourism, visiting other countries",
                  "Meditation, I like tea ceremonies and breathing exercises",
                "Self-exploration, reading books and thinking about life"],
            correctAnswer: 0, 
            imageSrc: "/img/6.jpg"
        },
        {
            text: "Question #6: What word describes you best?",
            answers: ["Determined",
                  "Adventurous",
                  "Joking",
                "Honest"],
            correctAnswer: 1, 
            imageSrc: "/img/7.jpg"
        },
        {
            text: "Question #7: What personal qualities would you like to fix in yourself?",
            answers: ["Meticulousness",
                  "Carelessness",
                  "Greedinessg",
                "Loss of emotional control"],
            correctAnswer: 2, 
            imageSrc: "/img/8.jpg"
        },
        {
            text: "Question #8: What qualities do you want to see in your girlfriend?",
            answers: ["Honesty and patience",
                  "Cheerfulness and sense of humor",
                  "Modesty and ability to listen",
                "Loyalty and good manners"],
            correctAnswer: 3, 
            imageSrc: "/img/9.jpg"
        }
        ];
        
        function Engine(question, answer) {
            questions[question]['userAnswer'] = +answer;

            if (questions.length > question + 1) {
                generateQuestion(question + 1);
            } else {
                generateResult();
            }
        }

        const getElem = (selector) => document.querySelector(selector); 

        let quiz = getElem('.quiz');
        quiz.style.display = 'none'; 

        function showQuiz() {
            let hover = getElem('.hover');
            hover.style.display = 'none'; 
            quiz.style.display = 'flex'; 
            generateQuestion(0);
        }

        function generateQuestion (questionNum) {
            let question = questions[questionNum];
            let quiz = getElem('.quiz');
            let d;
            d = '<h1 class="h1">Ready to Build Long-Term Relationships With an Asian Girl? Pass Quiz - Find the Answer</h1>';
            d = d + '<h2 class="question">' + question.text + '</h2><br/>';
            d = d + '<img src="' + question.imageSrc + '">' 
            for(let i in question.answers) {
                d = d + '<div><label><input type=radio name="q' + (questionNum + 1) + '" value="' + i +
                '" onClick="Engine(' + questionNum + ', this.value)">' + question.answers[i] + '</label></div><br/>';
            }
            quiz.innerHTML = d;
        }

        function generateResult() {
            let quiz = getElem('.quiz');
            let d;
            d = '<h1 class="h1">Ready to Build Long-Term Relationships With an Asian Girl? Pass Quiz - Find the Answer</h1>';
            d = d + '<h2 class="h2">Hurray! You passed the test (good results)!</h2>';
            d = d + '<p>Good news, we found hundreds of Asian girls ready to build long-term relationships with a man who got such a high score. Your result matches with expectations of the Asian ladies who seek a partner now.<br/>Interested to get in touch with them? Hit the button below.</p>'
            d = d + '<img src="/img/10.jpg">';
            d = d + '<p class="attraction">Interested to get in touch with them? Hit the button below.</p>'
            d = d + '<input type="button" class="input-result" value="Meet Best Asian Girls"></input>'
                    


            // Показывает на какие ответы отвечено правильно/неправильно в конце опросника
            
            // let quiz = getElem('.quiz');
            // let d;
            // d = '<h3>Ваши результаты:</h3>';
            // for(let question of questions) {
            //     d = d + '<span class="">' + question.text + '</span><br/>';
            //     d = d + '<span class="">Ваш Ответ: <i>' + question.answers[question.userAnswer] + '</i>&nbsp;<b>' + (question.correctAnswer==question['userAnswer'] ? 'ВЕРНО' : 'НЕ ВЕРНО') + '</b></span><br/><br/>'; 
                
            // }

            quiz.innerHTML = d;
        }

        

       




