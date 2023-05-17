
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const OnBoardingScreen = () => {
  const navigation = useNavigation()
  return (
    <Onboarding
    onSkip={()=> navigation.replace("Home")}
    onDone={()=> navigation.replace("Home")}
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={{uri:"https://img.freepik.com/premium-vector/cute-student-boy-girl-characters-illustration_294791-395.jpg?w=740"}} 
        className="w-72 h-72 object-contain"
        />,
        title: 'Welcome to ...',
        subtitle: 'the application here you find notes, pyq, lectues, tricks,tips',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={{uri:"https://img.freepik.com/free-vector/focused-tiny-people-reading-books_74855-5836.jpg?w=900&t=st=1684177925~exp=1684178525~hmac=4322e393c35ebdb1535409c6a1a0c61de3e0a5d8a35ff5b9be9733835a3b6ca5"}} 
        className="w-72 h-72 object-contain"
        />,
        title: 'Notes...',
        subtitle: 'here you find all engineering subjects notes semester wise.',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={{uri:"https://img.freepik.com/free-vector/seminar-concept-illustration_114360-7700.jpg?w=740&t=st=1684178031~exp=1684178631~hmac=985a5e336c6bbc95c5ea55a6d59fa418a94151f045099e246804005283ce05ca"}} 
        className="w-72 h-72 object-contain"
        />,
        title: 'Lectures...',
        subtitle: 'here you find all topics lectures with the refrences.',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={{uri:"https://img.freepik.com/free-vector/giant-check-list_23-2148087771.jpg?w=740&t=st=1684178137~exp=1684178737~hmac=77a85d8010a50b3cbce33ca098bdb7498984755a7605532a857c27a062ece742"}} 
        className="w-72 h-72 object-contain"
        />,
        title: 'PYQs...',
        subtitle: 'here you find all semester all papers previous year question papers',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={{uri:"https://img.freepik.com/free-vector/people-winning-different-prizes_74855-7813.jpg?w=900&t=st=1684174235~exp=1684174835~hmac=3a5a93c4891b43cb13b02bb72f7fe7d5d66dfc0ff2760d8e775b0e9276a71444"}} 
        className="w-72 h-72 object-contain"
        />,
        title: 'Atttempt Quizzes.....',
        subtitle: 'Compete with your mates and get top rank on the college leaderbaord.',
      },
      
    ]}
  />
  )
}

export default OnBoardingScreen;