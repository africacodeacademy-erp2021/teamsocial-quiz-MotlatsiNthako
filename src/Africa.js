import React, { useState } from 'react';

 function Africa() {

  const questions = [
    {
      questionText: 'How many countries in Africa?',
			answerOptions: [
				{ answerText: '53', isCorrect: false },
				{ answerText: '16', isCorrect: false },
				{ answerText: '54', isCorrect: true },
				{ answerText: '19', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is the current prime ministry of Lesotho?',
			answerOptions: [
				{ answerText: 'Motsoa-hae Tom Thabane', isCorrect: false },
				{ answerText: 'Moeketsi Majoro', isCorrect: true },
				{ answerText: 'Pakalitha Mosisili', isCorrect: false },
				{ answerText: 'Leabua Jonathan', isCorrect: false },
      ],
    },
    
    {
      questionText: 'Which is the richest country in Africa?',
			answerOptions: [
				{ answerText: 'Nigeria', isCorrect: true },
				{ answerText: 'Morocco', isCorrect: false },
				{ answerText: 'South Africa', isCorrect: false },
				{ answerText: 'Lesotho', isCorrect: false },
      ],
    },
    {
      questionText: 'What is  the capital city of Lesotho?',
			answerOptions: [
				{ answerText: 'Maseru', isCorrect: true },
				{ answerText: 'Hlotse', isCorrect: false },
				{ answerText: 'Butha-Buthe', isCorrect: false },
				{ answerText: 'Leribe', isCorrect: false },
      ],
    },
    {
      questionText: 'Which is Africa longest river?',
			answerOptions: [
				{ answerText: 'Mohokare River', isCorrect: false },
				{ answerText: 'Niger River', isCorrect: false },
				{ answerText: 'Nile River', isCorrect: true },
				{ answerText: 'Senqu River', isCorrect: false },
      ],
    },
    {
      questionText: 'How high is Mount Kilimanjaro?',
			answerOptions: [
				{ answerText: '4,890 meters', isCorrect: false },
				{ answerText: '5,109 meters', isCorrect: false },
				{ answerText: '5,895 meters', isCorrect: true },
				{ answerText: '5,199 metres', isCorrect: false },
      ],
    },
    {
      questionText: 'Which country uses Loti(LSL) as their currency?',
			answerOptions: [
				{ answerText: 'Malawi', isCorrect: false },
				{ answerText: 'Lesotho', isCorrect: true },
				{ answerText: 'Egypt', isCorrect:  false},
				{ answerText: 'Rwanda', isCorrect: false },
      ],
    },
    {
      questionText: 'How many people live on the African continent 2021?',
			answerOptions: [
				{ answerText: '3,700,800,123', isCorrect: false },
				{ answerText: '2,000,000,100', isCorrect: false },
				{ answerText: '2,003,100,900', isCorrect:  false},
				{ answerText: '1,378,149,334', isCorrect: true },
      ],
    },
    {
      questionText: 'Which is the highest mountain in Africa',
			answerOptions: [
				{ answerText: 'Thabana-ntlenyana', isCorrect: false },
				{ answerText: 'Mount Everest', isCorrect: false },
				{ answerText: 'Mount Kilimanjaro', isCorrect: true },
				{ answerText: 'Mount Kenya', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is the riches man in Africa?',
			answerOptions: [
				{ answerText: 'Ntsokoane Sam Matekane', isCorrect: false },
				{ answerText: 'Patrice Motsepe', isCorrect: false },
				{ answerText: 'Cyril Ramaphosa', isCorrect: false },
				{ answerText: 'Aliko Dangote', isCorrect: true },
      ],
    },
  ]

  //Randomizing without duplication

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [random, setRandom] = useState(questions);//Radomizing without duplication

  function shuffleMyArray(array){
    var number = array.length,
    temp, index;

    while(number> 0){
      index = Math.floor(Math.random() * number);
      number--;

      temp = array[number];
      array[number] = array[index];
      array[index] = temp;
    }
    return array;
  }
  
  //DROP DOWN
const [option,setOption] = useState();
const [selected_number, setSelected_number] = useState(10);

  function selectedOption(event){
    setOption(event.target.value);
     setSelected_number(event.target.value);

     
    if(selected_number === 5){
      shuffleMyArray(questions);
      questions.splice(5, 5);
      let temp = questions;
      setRandom(temp);
  
    }
    else{
      shuffleMyArray(questions);
      questions.splice(7, 3);
      let temp = questions;
      setRandom(temp);
    }

    return selected_number;
  }
  
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
  
    const nextQuetions = currentQuestion + 1;
    
    if (nextQuetions <selected_number) {
      setCurrentQuestion(nextQuetions);
    }
    else {
      setShowScore(true)
    }
  };

  return (
    <>
    <div>
  <select name='option' onChange={selectedOption}>
    <option value="10">All questions</option>
    <option value="5">5 questions</option>
    <option value="7">7 questions</option>
  </select>
  </div>
      <h1 className='header'>KNOW AFRICA</h1>
      <div className="app">
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {selected_number}
          </div>
        )
          :
          (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question {currentQuestion + 1}/</span>{selected_number}
                </div>
                <div className='question-text'>
                  {random[currentQuestion].questionText}
                </div>
              </div>

              <div className='answer-section'>
                {
                  random[currentQuestion].answerOptions.map((answerOptions) => (
                    <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>
                      {answerOptions.answerText}</button>
                  ))
                }
                </div>
              </>
          )}
        </div>
      </>
    );
  }
 
export default Africa;

