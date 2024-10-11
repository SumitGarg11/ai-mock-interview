"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import ImageSlider from "./ImageSlider";
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter();
  return (
    <div className="flex  flex-col  ">
    
    <Header/>
   

    <div className="flex justify-between gap-10 " >
        <ImageSlider   />
        <div className="flex flex-col justify-center w-1/2 p-8 ml-8 ">
          <h1 className="text-4xl font-extrabold text-primary mt-24 ">
            Interview Mastery Through
          </h1>
          <h1 className="text-4xl font-extrabold mt-2" > Unlimited Practices</h1>

          <div className="w-[80%] text-lg rounded-lg p-5  bg-blue-600/30  ml-4 mt-8">
           
          <h2 className="text-2xl text-primary font-extrabold">Choose Your Path to Success</h2>
          <p className="text-lg font-extralight text-black ">

            You can select a job role such as Data Scientist, Full Stack Developer, Cloud Engineer, or Cybersecurity. Choose the company like Amazon or Google to tailor your preparation. Start practicing now to enhance your interview skills!
          </p>
          </div>
        </div>
    </div>
      <div className="flex justify-end items-end mr-5 ">
        <h2 className="text-xl bg-blue-600/20  p-4 rounded-lg font-bold  text-primary " > Proceed To The Dashboard To Get Started With Your Preparation </h2>
      </div>

      

      <div className="-mt-32 ml-24 p-5 ">
        <h2 className="font-extrabold text-4xl  text-primary " >Boost your </h2>
        <h2 className="font-extrabold text-4xl  text-primary " > confidence,</h2>
        <h2 className="font-extrabold text-4xl  text-primary " > ace the job interview</h2>
      
      </div>

     
    </div>

   
  );
}
